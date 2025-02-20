"use client"

import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { BoxIcon, HomeIcon, TruckIcon } from "lucide-react"
import Link from "next/link"

const items = [
  {
    title: "Create a new incomming service",
    url: "/",
    icon: HomeIcon,
  },
  {
    title: "Add Supplier",
    url: "/supplier",
    icon: TruckIcon,
    auth: true,
  },
  {
    title: "Add Products",
    url: "/products",
    icon: BoxIcon,
  },
]

export const PersonalSection = () => {
  return (
    <SidebarGroup>
      <SidebarGroupLabel>You</SidebarGroupLabel>
      <SidebarGroupContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                tooltip={item.title}
                asChild
                isActive={false}
                onClick={() => {}}
              >
                <Link href={item.url} className="flex items-center gap-4">
                  <item.icon />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
