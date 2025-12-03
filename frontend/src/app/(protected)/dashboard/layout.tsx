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
    <section className="flex h-screen w-full overflow-hidden">
      <aside className="h-full shrink-0 p-4">
        <Sidebar />
      </aside>

      <main className="flex-1 h-full overflow-y-auto p-4 rounded-tl-2xl">
        {children}
      </main>
    </section>
  );
}