"use client";

import { cn } from "@/lib/utils";
import { 
  LayoutDashboard, 
  FileText, 
  DollarSign, 
  Settings, 
  HelpCircle,
  CircleUser
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const sidebarItems = [
  {
    title: "Dashboard",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    title: "Claims",
    href: "/claims",
    icon: FileText,
  },
  {
    title: "Income",
    href: "/income",
    icon: DollarSign,
  },
  {
    title: "Settings",
    href: "/settings",
    icon: Settings,
  },
  {
    title: "Help",
    href: "/help",
    icon: HelpCircle,
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="flex h-full w-[250px] flex-col bg-white border-r">
      <div className="p-6">
        <div className="flex items-center gap-2 mb-8">
          <div className="h-8 w-8 rounded-full bg-purple-500" />
          <span className="font-semibold text-lg">Vantage Solutions</span>
        </div>

        <nav className="space-y-2">
          {sidebarItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-gray-500 transition-all hover:text-gray-900",
                pathname === item.href ? "bg-purple-50 text-purple-600" : ""
              )}
            >
              <item.icon className="h-5 w-5" />
              {item.title}
            </Link>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 border-t">
        <div className="flex items-center gap-3">
          <CircleUser className="h-8 w-8" />
          <div>
            <p className="font-medium">Manan Bagga</p>
            <p className="text-sm text-gray-500">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}