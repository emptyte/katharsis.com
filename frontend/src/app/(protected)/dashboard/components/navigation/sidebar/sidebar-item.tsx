import type { NavItem, SubItem } from "@/common/types/nav-item.type";
import { ChevronRightIcon } from "@heroicons/react/16/solid";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type NavItemProps = {
  isExpanded?: boolean;
  onToggle?: () => void;
  navItem: NavItem;
};

function SidebarItem({ isExpanded = false, onToggle, navItem }: NavItemProps) {
  const pathname = usePathname();

  const isExactActive = pathname === navItem.href;
  const isChildActive = navItem.subItems?.some((sub) => pathname === sub.href);
  const isActive = isExactActive || isChildActive;
  const isClosedAndActive = isActive && !isExpanded;

  const handleClick = (e: React.MouseEvent) => {
    if (navItem.subItems) {
      e.preventDefault();
      onToggle?.();
    }
  };

  const containerClasses = `
    relative w-full flex items-center justify-between px-3 py-2.5 
    cursor-pointer rounded-lg transition-all duration-300 ease-out select-none
    border
    ${isClosedAndActive
      ? "bg-theme-surface-light/30 border-theme-primary/10"
      : "bg-transparent border-transparent group-hover/item:bg-white/5"
    }
    ${isActive || isExpanded 
      ? "text-theme-primary" 
      : "text-theme-secondary-light group-hover/item:text-theme-primary"
    }
  `;

  const Icon = navItem.icon;

  return (
    <div className="w-full px-2 mb-1 group/item">
      {/* --- MAIN LINK --- */}
      <Link
        href={navItem.href}
        onClick={handleClick}
        className={containerClasses}
        aria-expanded={isExpanded}
      >
        <div className="flex items-center gap-3">
          <div
            className={`
              transition-all duration-300 
              ${isActive || isExpanded ? "text-theme-primary" : "group-hover/item:text-theme-primary"}
            `}
          >
            {Icon && <Icon className="size-4" />}
          </div>

          <span className="text-[13px]">
            {navItem.name}
          </span>
        </div>

        {/* Chevron Icon */}
        {navItem.subItems && (
          <ChevronRightIcon
            className={`
              size-3.5
              transition-transform duration-300
              ${isExpanded
                ? "rotate-90 text-theme-primary"
                : "text-theme-secondary-light group-hover/item:text-theme-primary"
              }
            `}
          />
        )}
      </Link>

      <div
        className={`
          grid transition-[grid-template-rows] duration-300 ease-in-out
          ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-1" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="overflow-hidden">
          <div className="flex flex-col gap-2 pl-4 relative py-0.5">
            {navItem.subItems?.map((sub: SubItem) => {
              const isSubActive = pathname === sub.href;
              const SubIcon = sub.icon;

              return (
                <Link
                  key={sub.name}
                  href={sub.href}
                  className={`
                    relative flex items-center gap-3 pl-6 py-1.5 
                    text-[13px] transition-colors duration-200 rounded-md
                    group/sub
                    ${isSubActive
                      ? "text-theme-primary bg-theme-primary/5"
                      : "text-theme-secondary-light hover:text-theme-primary hover:bg-white/5"
                    }
                  `}
                >
                  {SubIcon ? (
                    <SubIcon className={`size-4 ${isSubActive ? "text-theme-primary" : "opacity-70 group-hover/sub:opacity-100"}`} />
                  ) : (
                    <span
                      className={`
                        size-1.5 rounded-full transition-colors
                        ${isSubActive ?
                          "bg-theme-primary" :
                          "bg-theme-secondary-light/40 group-hover/sub:bg-theme-secondary-light"
                        }
                      `}
                    />
                  )}

                  {sub.label}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SidebarItem;