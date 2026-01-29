export interface SubItem {
  name: string;
  href: string;
  label: string;
  icon?: React.ElementType;
}

export interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  subItems?: SubItem[];
}

export interface NavCategory {
  title?: string;
  items: NavItem[];
}