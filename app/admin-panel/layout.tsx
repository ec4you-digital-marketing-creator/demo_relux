import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Panel | Relux Electric",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
