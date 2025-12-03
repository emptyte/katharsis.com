import Sidebar from "./components/navigation/sidebar/sidebar";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Katharsis — Dashboard",
  description: "Access your Katharsis dashboard.",
};

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="relative flex min-h-screen py-4 px-4">
      <aside className="relative">
        <Sidebar />
      </aside>

      <main className="relative px-4">{children}</main>
    </section>
  );
}
