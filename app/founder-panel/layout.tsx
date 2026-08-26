import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Founder Panel | Relux Electric",
  robots: {
    index: false,
    follow: false,
  },
};

export default function FounderPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
