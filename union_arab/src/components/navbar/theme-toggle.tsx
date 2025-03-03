"use client"
 
import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
 
import { Button } from "@/components/ui/button"
 
export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
 
  return (
    <Button
      variant="outline"
      size="icon"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="relative bg-white dark:bg-gray-800 border border-muted-foreground"
    >
      {/* Moon shown in light mode, hidden in dark mode */}
      <Moon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-transform duration-300 ease-in-out dark:-rotate-90 dark:scale-0" />
      
      {/* Sun shown in dark mode, hidden in light mode */}
      <Sun className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-transform duration-300 ease-in-out dark:rotate-0 dark:scale-100" />
    </Button>
  )
}