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
      <aside className="h-full w-52 shrink-0">
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

      <main className="flex-1 h-full overflow-y-auto p-4 rounded-tl-2xl">
        {children}
      </main>
    </section>
  );
}