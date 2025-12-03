"use client";

import { CubeIcon, HomeIcon } from "@heroicons/react/24/outline";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface NavItem {
  name: string;
  href: string;
  icon: React.ReactNode;
  iconSelected: React.ReactNode;
}

const navItems: NavItem[] = [
  {
    name: "Home",
    href: "/dashboard",
    icon: <HomeIcon className="w-4 h-4" />,
    iconSelected: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
  {
    name: "Item Management",
    href: "/dashboard/item-management",
    icon: <CubeIcon className="w-4 h-4" />,
    iconSelected: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4"
      >
        <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
      </svg>
    ),
  },
];

function NavItem({ item }: { item: NavItem }) {
  const pathname = usePathname();
  const isSelected = pathname === item.href;

  return (
    <div className="relative w-full h-full">
      <Link
        key={item.name}
        href={item.href}
        className="w-full h-full flex items-center justify-center"
      >
        {isSelected ? item.iconSelected : item.icon}
      </Link>

      {isSelected && (
        <motion.div
          layoutId="active-nav-border" // 2. Identificador único compartido
          transition={{
            type: "spring",
            stiffness: 350,
            damping: 30,
          }}
          className="
            absolute
            left-0           
            top-1/2
            -translate-y-1/2
            h-6
            w-[3px]
            bg-white
            rounded-r-full
          "
        />
      )}
    </div>
  );
}

function Sidebar() {
  return (
    <div className="w-15 h-screen bg-neutral-800 rounded-xl">
      <div className="w-full h-[85%] flex flex-col items-center pt-3">
        <div className="w-8 h-8 flex items-center justify-center bg-black rounded-lg">
          <Image
            src="/images/png/logo.png"
            alt="Katharsis Logo"
            width={18}
            height={18}
          />
        </div>

        <div className="w-full flex flex-col gap-6 mt-10">
          {navItems.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
