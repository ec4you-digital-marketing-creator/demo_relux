import BlogDetailClient from "./BlogDetailClient";
import { BASE_URL, SITE_URL } from "@/app/ui/baceurl";
import type { Metadata } from "next";

type StaticSlugItem = {
  slug?: string | null;
};

type PaginatedSlugResponse = {
  count?: number;
  next?: string | null;
  results?: StaticSlugItem[];
};

type BlogDetail = {
  title?: string | null;
  excerpt?: string | null;
  image?: string | null;
};

export const dynamicParams = true;
export const revalidate = 60;

const PAGE_SIZE = 100;

function toEndpointUrl(path: string, page: number) {
  const url = new URL(path, BASE_URL);
  url.searchParams.set("page", String(page));
  url.searchParams.set("page_size", String(PAGE_SIZE));
  return url.toString();
}

function normalizeItems(data: unknown): {
  items: StaticSlugItem[];
  next: string | null;
  total?: number;
} {
  if (Array.isArray(data)) {
    return { items: data as StaticSlugItem[], next: null };
  }

  if (data && typeof data === "object") {
    const paginated = data as PaginatedSlugResponse;
    return {
      items: Array.isArray(paginated.results) ? paginated.results : [],
      next: paginated.next ?? null,
      total: paginated.count,
    };
  }

  return { items: [], next: null };
}

async function fetchAllSlugItems(path: string, label: string): Promise<StaticSlugItem[]> {
  const allItems: StaticSlugItem[] = [];
  let page = 1;
  let nextUrl: string | null = toEndpointUrl(path, page);

  while (nextUrl) {
    console.log(`[generateStaticParams] ${label} API URL: ${nextUrl}`);

    const res = await fetch(nextUrl, { cache: "no-store" });
    console.log(
      `[generateStaticParams] ${label} response status: ${res.status} ${res.statusText}`
    );

    if (!res.ok) {
      throw new Error(`${label} API failed with ${res.status} at ${nextUrl}`);
    }

    const data = await res.json();
    const { items, next, total } = normalizeItems(data);
    console.log(
      `[generateStaticParams] ${label} page ${page} returned ${items.length} item(s)${
        typeof total === "number" ? ` of ${total}` : ""
      }`
    );

    allItems.push(...items);
    nextUrl = next ? new URL(next, BASE_URL).toString() : null;
    page += 1;
  }

  console.log(`[generateStaticParams] ${label} total fetched: ${allItems.length}`);
  return allItems;
}

async function fetchBlogDetail(slug: string): Promise<BlogDetail | null> {
  try {
    const url = new URL(`/api/blogs/${encodeURIComponent(slug)}/`, BASE_URL).toString();
    const res = await fetch(url, { next: { revalidate: 60 } });
    if (res.ok) {
      return (await res.json()) as BlogDetail;
    }
  } catch (err) {
    console.error("Error fetching blog detail:", err);
  }
  return null;
}

export async function generateStaticParams(): Promise<{ slug: string }[]> {
  console.log(`[generateStaticParams] Fetching slugs directly from backend: ${BASE_URL}`);

  try {
    const blogs = await fetchAllSlugItems("/api/blogs/", "blogs");
    const items = [...blogs];

    const slugs = Array.from(
      new Set(
        items
          .map((item) => item?.slug?.trim())
          .filter((slug): slug is string => Boolean(slug))
      )
    );

    console.log(`[generateStaticParams] Successfully fetched ${slugs.length} unique slugs from backend.`);
    return slugs.map((slug) => ({ slug }));
  } catch (error) {
    console.error("[generateStaticParams] Error fetching backend slugs:", error);
    return [];
  }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogDetail(slug);
  const title = post?.title || slug.replace(/-/g, " ");
  const description = post?.excerpt || `${title} | Relux Electric`;
  const canonical = `${SITE_URL}/activity-hub/blogs/${slug}`;
  const image = post?.image
    ? post.image.startsWith("http")
      ? post.image
      : `${BASE_URL}${post.image.startsWith("/") ? "" : "/"}${post.image}`
    : undefined;

  return {
    title,
    description,
    alternates: {
      canonical,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      type: "article",
      images: image ? [{ url: image }] : undefined,
    },
  };
}

export default function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  return <BlogDetailClient params={params} />;
}
