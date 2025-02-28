import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface MobileMenuProps {
  isOpen: boolean
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen }) => {
  if (!isOpen) return null

  return (
    <div className="md:hidden bg-white border-t border-gray-200">
      <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
        <Link
          href="/"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-500 hover:bg-gray-50 transition-colors"
        >
          Home
        </Link>
        <Link
          href="/docs"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-500 hover:bg-gray-50 transition-colors"
        >
          Docs
        </Link>
        <Link
          href="/pricing"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-500 hover:bg-gray-50 transition-colors"
        >
          Pricing
        </Link>
        <Link
          href="/blog"
          className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-emerald-500 hover:bg-gray-50 transition-colors"
        >
          Blog
        </Link>
      </div>
      <div className="pt-4 pb-3 border-t border-gray-200">
        <div className="px-2">
          <Button className="w-full bg-emerald-500 text-white hover:bg-emerald-600 transition-colors">Sign In</Button>
        </div>
      </div>
    </div>
  )
}

export default MobileMenu

