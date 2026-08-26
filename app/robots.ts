import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const disallowed = ["/api/", "/admin/", "/admin-panel/", "/admin-panel", "/agent-panel", "/founder-panel"];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: disallowed,
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "PerplexityBot",
          "CCBot",
          "Google-Extended",
          "Applebot-Extended",
          "Amazonbot",
          "Bytespider",
          "Meta-ExternalAgent",
          "Cohere-AI",
        ],
        allow: "/",
        disallow: disallowed,
      },
    ],
    sitemap: "https://reluxelectric.com/sitemap.xml",
  };
}
