import { ChevronDownIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

function SidebarProfile({
  title,
  subtitle,
  imageSrc,
  Icon,
  variant = "default",
  isDropdown = false,
}: {
  title: string;
  subtitle: string;
  imageSrc?: string;
  Icon?: React.ElementType;
  variant?: "default" | "primary";
  isDropdown?: boolean;
}) {
  return (
    <button className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-white/5 transition-colors group text-left">
      <div className="flex items-center gap-3 overflow-hidden">
        <div className={`
          shrink-0 size-10 rounded-lg flex items-center justify-center text-xs text-white font-bold
          ${variant === 'primary' ? 'bg-theme-primary' : 'bg-blue-200'}
        `}>
          {imageSrc ? (
            <Image
              src={imageSrc}
              alt={title}
              width={40}
              height={40}
              className="size-10 rounded-lg object-cover"
            />
          ) : (
            Icon && <Icon className="size-6 text-white" />
          )}
        </div>

        <div className="flex flex-col min-w-0">
          <span className="text-[13px] font-medium text-theme-main truncate block group-hover:text-theme-primary transition-colors">
            {title}
          </span>
          <span className="text-[11px] text-theme-secondary-light truncate block">
            {subtitle}
          </span>
        </div>
      </div>

      {isDropdown && (
        <div className="ml-2 shrink-0 text-theme-secondary-light group-hover:text-theme-primary transition-colors">
          <ChevronDownIcon className="size-3.5" />
        </div>
      )}
    </button>
  );
};

export default SidebarProfile;
