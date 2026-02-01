import Navbar from "./components/navigation/navbar/navbar";
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
      <aside className="h-full w-72 shrink-0">
        <Sidebar
          role="admin"
          user={{
            name: "Nelson R.",
            email: "nrodriguezr@gmail.com",
            avatarUrl: "/images/png/avatar.png"
          }}
          currentBranch={{
            name: "Mosquera Main",
            type: "Distribution Center"
          }}
        />
      </aside>

      <main className="flex-1 h-full relative px-8 py-6.5">
        <header className="sticky top-0 z-10">
          <Navbar />
        </header>
        <div className="h-full w-full rounded-l-3xl overflow-y-auto overflow-x-hidden py-4">
          {children}
        </div>
      </main>
    </section>
  );
}