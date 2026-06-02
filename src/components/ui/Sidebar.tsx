"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Megaphone, Users } from "lucide-react";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/promotions", label: "Promotions", icon: Megaphone },
  { href: "/segments", label: "Segments", icon: Users },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden md:flex flex-col w-56 min-h-screen bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-4 gap-1">
      <p className="text-xs text-gray-400 dark:text-gray-500 uppercase tracking-widest px-3 mb-3">Navigation</p>
      {NAV_ITEMS.map(({ href, label, icon: Icon }) => {
        const isActive = pathname === href;
        return (
          <Link key={href} href={href}>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? "bg-indigo-600 text-white"
                  : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
            >
              <Icon size={16} />
              {label}
              {isActive && (
                <motion.div
                  layoutId="activeIndicator"
                  className="ml-auto w-1.5 h-1.5 rounded-full bg-white"
                />
              )}
            </motion.div>
          </Link>
        );
      })}
    </aside>
  );
}