"use client";

import {
  ArrowRightStartOnRectangleIcon,
  Cog8ToothIcon,
  CubeIcon,
  HomeIcon,
  UsersIcon,
} from "@heroicons/react/24/outline";
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
    icon: <HomeIcon className="w-4.5 h-4.5" />,
    iconSelected: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4.5"
      >
        <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
        <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
      </svg>
    ),
  },
  {
    name: "Item Management",
    href: "/dashboard/item-management",
    icon: <CubeIcon className="w-4.5 h-4.5" />,
    iconSelected: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4.5"
      >
        <path d="M12.378 1.602a.75.75 0 0 0-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03ZM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 0 0 .372-.648V7.93ZM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 0 0 .372.648l8.628 5.033Z" />
      </svg>
    ),
  },
  {
    name: "User Management",
    href: "/dashboard/user-management",
    icon: <UsersIcon className="w-4.5 h-4.5" />,
    iconSelected: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4.5"
      >
        <path d="M4.5 6.375a4.125 4.125 0 1 1 8.25 0 4.125 4.125 0 0 1-8.25 0ZM14.25 8.625a3.375 3.375 0 1 1 6.75 0 3.375 3.375 0 0 1-6.75 0ZM1.5 19.125a7.125 7.125 0 0 1 14.25 0v.003l-.001.119a.75.75 0 0 1-.363.63 13.067 13.067 0 0 1-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 0 1-.364-.63l-.001-.122ZM17.25 19.128l-.001.144a2.25 2.25 0 0 1-.233.96 10.088 10.088 0 0 0 5.06-1.01.75.75 0 0 0 .42-.643 4.875 4.875 0 0 0-6.957-4.611 8.586 8.586 0 0 1 1.71 5.157v.003Z" />
      </svg>
    ),
  },
  {
    name: "User Settings",
    href: "/dashboard/user-settings",
    icon: <Cog8ToothIcon className="w-4.5 h-4.5" />,
    iconSelected: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-4.5"
      >
        <path
          fillRule="evenodd"
          d="M11.828 2.25c-.916 0-1.699.663-1.85 1.567l-.091.549a.798.798 0 0 1-.517.608 7.45 7.45 0 0 0-.478.198.798.798 0 0 1-.796-.064l-.453-.324a1.875 1.875 0 0 0-2.416.2l-.243.243a1.875 1.875 0 0 0-.2 2.416l.324.453a.798.798 0 0 1 .064.796 7.448 7.448 0 0 0-.198.478.798.798 0 0 1-.608.517l-.55.092a1.875 1.875 0 0 0-1.566 1.849v.344c0 .916.663 1.699 1.567 1.85l.549.091c.281.047.508.25.608.517.06.162.127.321.198.478a.798.798 0 0 1-.064.796l-.324.453a1.875 1.875 0 0 0 .2 2.416l.243.243c.648.648 1.67.733 2.416.2l.453-.324a.798.798 0 0 1 .796-.064c.157.071.316.137.478.198.267.1.47.327.517.608l.092.55c.15.903.932 1.566 1.849 1.566h.344c.916 0 1.699-.663 1.85-1.567l.091-.549a.798.798 0 0 1 .517-.608 7.52 7.52 0 0 0 .478-.198.798.798 0 0 1 .796.064l.453.324a1.875 1.875 0 0 0 2.416-.2l.243-.243c.648-.648.733-1.67.2-2.416l-.324-.453a.798.798 0 0 1-.064-.796c.071-.157.137-.316.198-.478.1-.267.327-.47.608-.517l.55-.091a1.875 1.875 0 0 0 1.566-1.85v-.344c0-.916-.663-1.699-1.567-1.85l-.549-.091a.798.798 0 0 1-.608-.517 7.507 7.507 0 0 0-.198-.478.798.798 0 0 1 .064-.796l.324-.453a1.875 1.875 0 0 0-.2-2.416l-.243-.243a1.875 1.875 0 0 0-2.416-.2l-.453.324a.798.798 0 0 1-.796.064 7.462 7.462 0 0 0-.478-.198.798.798 0 0 1-.517-.608l-.091-.55a1.875 1.875 0 0 0-1.85-1.566h-.344ZM12 15.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5Z"
          clipRule="evenodd"
        />
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
        className={`w-full h-full flex items-center justify-center ${isSelected ? "text-white" : "text-neutral-400"}`}
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
    <div className="w-15 h-full bg-neutral-800 rounded-xl">
      <div className="w-full h-full flex flex-col items-center py-4">
        {/* --- SECCIÓN SUPERIOR (Logo) --- */}
        <div className="w-8 h-8 flex items-center justify-center bg-black rounded-md shrink-0">
          <Image
            src="/images/png/logo.png"
            alt="Emptyte team Logo"
            width={18}
            height={18}
          />
        </div>
        <div className="w-full flex flex-col gap-6 mt-10">
          {navItems.map((item) => (
            <NavItem key={item.name} item={item} />
          ))}
        </div>
        <button
          className="mt-auto mb-1 text-neutral-400 hover:text-white transition-colors cursor-pointer"
          onClick={() => {}}
        >
          <ArrowRightStartOnRectangleIcon className="w-4.5 h-4.5" />
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
