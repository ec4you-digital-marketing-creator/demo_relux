import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agent Panel | Relux Electric",
  robots: {
    index: false,
    follow: false,
  },
};

export default function AgentPanelLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
