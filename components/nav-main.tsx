"use client"

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { type LucideIcon } from "lucide-react"; // Import LucideIcon type

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

interface NavItem {
  title: string;
  url: string;
  icon?: LucideIcon; // Use LucideIcon type
}

interface NavMainProps extends React.ComponentPropsWithoutRef<typeof SidebarGroup> {
  items: NavItem[];
}

export function NavMain({ items, ...props }: NavMainProps) {
  const pathname = usePathname();

  return (
    <SidebarGroup {...props}>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          {items.map((item) => {
            const isActive = pathname === item.url;
            const IconComponent = item.icon;

            return (
              <SidebarMenuItem key={item.title}>
                <Link href={item.url} passHref>
                  <SidebarMenuButton
                    tooltip={item.title}
                    className={isActive ? "bg-accent text-accent-foreground" : ""}
                  >
                    {IconComponent && <IconComponent className="h-5 w-5" />}
                    <span>{item.title}</span>
                  </SidebarMenuButton>
                </Link>
              </SidebarMenuItem>
            );
          })}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  );
}
