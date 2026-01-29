"use client";

import Image from "next/image";
import NavItem from "./item/nav-item";
import {
  EllipsisVerticalIcon,
  Square3Stack3DIcon
} from "@heroicons/react/24/outline";
import { adminNavigationConfig, operatorNavigationConfig } from "@/common/constants/sidebar.constants";
import InfoCard from "./card/info-card";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

interface UserProfile {
  name: string;
  email: string;
  avatarUrl: string;
}

interface BranchInfo {
  name: string;
  type: string;
}

interface SidebarProps {
  role: "admin" | "operator";
  user: UserProfile;
  currentBranch?: BranchInfo;
}

function Sidebar({ role, user, currentBranch }: SidebarProps) {
  const pathname = usePathname();

  const isAdmin = role === "admin";
  const navigationConfig = isAdmin ? adminNavigationConfig : operatorNavigationConfig;

  const findActiveItem = (config: any[], currentPath: string): string | null => {
    for (const section of config) {
      for (const item of section.items) {
        if (item.subItems?.some((sub: any) => currentPath.startsWith(sub.href))) {
          return item.name;
        }
      }
    }
    return null;
  };

  const [expandedItem, setExpandedItem] = useState<string | null>(() => {
    return findActiveItem(navigationConfig, pathname);
  });

  useEffect(() => {
    const activeItem = findActiveItem(navigationConfig, pathname);
    setExpandedItem((prev) => {
      if (prev !== activeItem) return activeItem;
      return prev;
    });
  }, [pathname, navigationConfig]);

  const handleToggle = (itemName: string) => {
    setExpandedItem(prev => prev === itemName ? null : itemName);
  };

  return (
    <aside className="h-screen w-72 bg-theme-obsidian flex flex-col border-r border-gray-100/10 transition-all duration-300">

      {/* 1. HEADER SECTION */}
      <div className="h-22 flex items-center px-4">
        {isAdmin ? (
          <InfoCard
            title={user?.name || "Unknown Branch"}
            subtitle={user?.email || "Location"}
            Icon={Square3Stack3DIcon}
            variant="primary"
            isDropdown
          />
        ) : (
          <InfoCard
            title={currentBranch?.name || "Unknown Branch"}
            subtitle={currentBranch?.type || "Location"}
            Icon={Square3Stack3DIcon}
            variant="primary"
            isDropdown
          />
        )}
      </div>

      {/* 2. NAVIGATION BODY */}
      <nav className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-6 scrollbar-hide">
        {navigationConfig.map((section, index) => (
          <div key={index} className="flex flex-col gap-1">
            {/* Section Title */}
            {section.title && (
              <div className="px-3 mb-2">
                <p className="text-[10px] uppercase text-theme-secondary-light/75 font-special font-bold">
                  {section.title}
                </p>
              </div>
            )}

            {/* Nav Items */}
            <div className="space-y-0.5">
              {section.items.map((item: NavItem) => (
                <NavItem
                  key={item.name}
                  navItem={item}
                  isExpanded={expandedItem === item.name}
                  onToggle={() => handleToggle(item.name)}
                />
              ))}
            </div>
          </div>
        ))}
      </nav>

      {/* 3. FOOTER SECTION */}
      {!isAdmin && (
        <div className="p-4 border-t border-gray-800/50">
          <div className="flex items-center justify-between p-2 rounded-xl hover:bg-white/5 cursor-pointer group transition-colors">
            <div className="flex items-center gap-3">
              <Image
                src={user.avatarUrl}
                alt={user.name}
                width={40}
                height={40}
                className="size-9 rounded-lg bg-blue-200 object-cover"
              />
              <div className="flex flex-col">
                <span className="text-[12px] font-medium text-gray-200 group-hover:text-theme-primary">
                  {user.name}
                </span>
                <span className="text-[10px] text-theme-secondary-light">
                  {user.email}
                </span>
              </div>
            </div>
            <EllipsisVerticalIcon className="size-5 text-theme-secondary-light group-hover:text-white" />
          </div>
        </div>
      )}
    </aside>
  );
}

export default Sidebar;