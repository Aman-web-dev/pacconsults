"use client"

import * as React from "react"
import {
  IconInnerShadowTop, // Keeping this for the logo if needed
} from "@tabler/icons-react"
import {
  LayoutDashboard,
  Newspaper,
  Users,
  Search,
  Settings,
  LogOut,
  HelpCircle,
} from "lucide-react"

import { NavMain } from "@/components/nav-main"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

const adminData = {
  user: {
    name: "Admin User", // Placeholder, will be fetched dynamically in NavUser
    email: "admin@example.com", // Placeholder
    avatar: "/avatars/shadcn.jpg", // Placeholder
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/admin",
      icon: LayoutDashboard,
    },
    {
      title: "Blogs",
      url: "/admin/blogs",
      icon: Newspaper,
    },
    {
      title: "Leads",
      url: "/admin/leads",
      icon: Users,
    },
    {
      title: "SEO",
      url: "/admin/seo",
      icon: Search,
    },
  ],
  navSecondary: [
    {
      title: "Settings",
      url: "/admin/settings",
      icon: Settings,
    },
    {
      title: "Help",
      url: "/admin/help", // Placeholder route
      icon: HelpCircle,
    },
  ],
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5"
            >
              <a href="/admin">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">PAC Admin</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={adminData.navMain} />
        {/* NavDocuments and NavSecondary are removed as per admin panel needs */}
        <NavMain items={adminData.navSecondary} className="mt-auto" /> {/* Reusing NavMain for secondary items */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={adminData.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
