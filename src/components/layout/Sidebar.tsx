"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  User,
  PieChart,
  Users,
  LayoutDashboard,
  NotepadText,
} from "lucide-react";

export function Sidebar() {
  const pathname: string = usePathname(); // Mendapatkan URL aktif

  const links = [
    { href: "/profile", label: "Profile", Icon: User },
    { href: "/overview", label: "Overview", Icon: PieChart },
    { href: "/dashboard", label: "Dashboard", Icon: LayoutDashboard },
  ];

  return (
    <aside className="container flex justify-center items-center pt-24 gap-4">
      {links.map(({ href, label, Icon }) => (
        <Link
          key={href}
          href={href}
          className={`flex items-center gap-2 hover:text-primary transition duration-300 ${
            pathname === href ? "text-foreground" : " text-foreground/60"
          }`}
        >
          <Icon className="w-5 h-5" />
          <span>{label}</span>
        </Link>
      ))}
    </aside>
  );
}
