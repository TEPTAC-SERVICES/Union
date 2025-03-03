"use client"

import * as React from "react"
import { Link } from "@/i18n/routing"

import {
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

interface DropdownItem {
  label: string
  path: string
}

interface HoverDropdownMenuProps {
  label: string
  href: string
  items?: DropdownItem[]
}

export function HoverDropdownMenu({ label, href, items }: HoverDropdownMenuProps) {
  const [isOpen, setIsOpen] = React.useState(false)

  // If there are no items, just render a simple link
  if (!items || items.length === 0) {
    return (
      <NavigationMenuItem>
        <Link href={href} legacyBehavior passHref>
          <NavigationMenuLink className={navigationMenuTriggerStyle()}>{label}</NavigationMenuLink>
        </Link>
      </NavigationMenuItem>
    )
  }

  return (
    <NavigationMenuItem onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
      <NavigationMenuTrigger
        onClick={(e) => {
          // Prevent default behavior to avoid closing on click
          e.preventDefault()
          window.location.href = href
        }}
        className="font-amiri text-lg font-normal"
      >
        {label}
      </NavigationMenuTrigger>
      {isOpen && (
        <NavigationMenuContent>
          <ul className="grid w-[200px] gap-1 p-2">
            {items.map((item, index) => (
              <li key={index}>
                <Link href={item.path} legacyBehavior passHref>
                  <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground">
                    <div className="text-sm font-medium">{item.label}</div>
                  </NavigationMenuLink>
                </Link>
              </li>
            ))}
          </ul>
        </NavigationMenuContent>
      )}
    </NavigationMenuItem>
  )
}

