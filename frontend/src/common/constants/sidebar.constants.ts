import { NavCategory } from "../types/nav-item.type";

import {
  ChartPieIcon,
  HomeModernIcon,     // Para Branches (Sucursales)
  BuildingOfficeIcon, // Alternativa para Branches
  ArchiveBoxIcon,     // Para Warehouses (Bodegas) - Diferente a Products
  CubeIcon,           // Para Products
  TruckIcon,
  TagIcon,
  IdentificationIcon,
  KeyIcon,
  // Nuevos Iconos Sugeridos
  PlusCircleIcon,       // Crear/Añadir
  ListBulletIcon,       // Ver Listas
  MapIcon,              // Vista de Mapa
  ArrowsRightLeftIcon,  // Transferencias
  ArrowUpTrayIcon,      // Importar/Cargas masivas
  ClipboardDocumentCheckIcon, // Auditoría/Conteo
  SwatchIcon,            // Variantes/Atributos
  ShoppingCartIcon
} from '@heroicons/react/24/outline';

export const adminNavigationConfig: NavCategory[] = [
  {
    title: "Dashboard",
    items: [
      {
        name: "Overview",
        href: "/dashboard",
        icon: ChartPieIcon
      }
    ]
  },
  {
    title: "Network (Logistics)",
    items: [
      {
        name: "Branches", // Sucursales (Puntos de Venta)
        href: "/dashboard/network/branches",
        icon: HomeModernIcon,
        subItems: [
          {
            name: "list-branches",
            href: "/dashboard/network/branches",
            label: "All Branches", // Vista principal
            icon: ListBulletIcon
          },
          {
            name: "add-branch",
            href: "/dashboard/network/branches/new",
            label: "Open New Branch", // Acción clara
            icon: PlusCircleIcon
          },
          {
            name: "map-view",
            href: "/dashboard/network/branches/map",
            label: "Geomap View", // Útil para logística
            icon: MapIcon
          }
        ]
      },
      {
        name: "Warehouses", // Bodegas
        href: "/dashboard/network/warehouses",
        icon: ArchiveBoxIcon, // Cambié CubeIcon para no confundir con Productos
        subItems: [
          {
            name: "list-warehouses",
            href: "/dashboard/network/warehouses",
            label: "All Warehouses",
            icon: ListBulletIcon
          },
          {
            name: "stock-transfers",
            href: "/dashboard/network/warehouses/transfers",
            label: "Stock Transfers", // CRÍTICO en inventarios
            icon: ArrowsRightLeftIcon
          },
          {
            name: "add-warehouse",
            href: "/dashboard/network/warehouses/new",
            label: "Add Facility",
            icon: PlusCircleIcon
          }
        ]
      },
      {
        name: "Providers",
        href: "/dashboard/network/providers",
        icon: TruckIcon,
        subItems: [
          { name: "list", href: "/dashboard/network/providers", label: "Supplier List", icon: ListBulletIcon },
          { name: "add", href: "/dashboard/network/providers/new", label: "Onboard Supplier", icon: PlusCircleIcon }
        ]
      }
    ]
  },
  {
    title: "Catalog",
    items: [
      {
        name: "Categories",
        href: "/dashboard/catalog/category",
        icon: TagIcon,
        subItems: [
          {
            name: "list-categories",
            href: "/dashboard/catalog/category",
            label: "Category Tree",
            icon: ListBulletIcon
          },
          {
            name: "add-category",
            href: "/dashboard/catalog/category/add",
            label: "New Category",
            icon: PlusCircleIcon
          },
        ],
      },
      {
        name: "Products",
        href: "/dashboard/catalog/product",
        icon: CubeIcon,
        subItems: [
          {
            name: "list-products",
            href: "/dashboard/catalog/product",
            label: "All Products",
            icon: ListBulletIcon
          },
          {
            name: "add-product",
            href: "/dashboard/catalog/product/add",
            label: "New Product",
            icon: PlusCircleIcon
          },
          {
            name: "bulk-import",
            href: "/dashboard/catalog/product/import",
            label: "Bulk Import (CSV)", // Fundamental para inventarios grandes
            icon: ArrowUpTrayIcon
          },
          {
            name: "attributes",
            href: "/dashboard/catalog/product/attributes",
            label: "Attributes (Size/Color)", // Gestión de variantes
            icon: SwatchIcon
          }
        ],
      },
    ],
  },
  {
    title: "Users and Security",
    items: [
      {
        name: "Staff",
        href: "/dashboard/users/staff",
        icon: IdentificationIcon,
        subItems: [
          { name: "active-staff", href: "/dashboard/users/staff", label: "Active Members", icon: ListBulletIcon },
          { name: "invite-staff", href: "/dashboard/users/staff/invite", label: "Invite Member", icon: PlusCircleIcon }
        ]
      },
      {
        name: "Roles",
        href: "/dashboard/users/roles",
        icon: KeyIcon
      },
    ]
  }
];

export const operatorNavigationConfig: NavCategory[] = [
  {
    title: "Dashboard",
    items: [
      {
        name: "Overview",
        href: "/dashboard",
        icon: ChartPieIcon
      }
    ]
  },
  {
    title: "Operational",
    items: [
      {
        name: "Orders",
        href: "/dashboard/operational/orders",
        icon: ShoppingCartIcon
      },
      {
        name: "Inventory",
        href: "/dashboard/operational/inventory",
        icon: CubeIcon
      },
      {
        name: "Transfers",
        href: "/dashboard/operational/transfers",
        icon: TruckIcon
      }
    ]
  }
];