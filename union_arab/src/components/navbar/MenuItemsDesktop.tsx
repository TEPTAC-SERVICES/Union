"use client"
import { useNavigationItems } from '@/hooks/useNavigationItems';
import { Link } from '@/i18n/routing';
import { useLocale, useTranslations } from 'next-intl';
import React, { useRef, useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { getLangDir } from 'rtl-detect';
const MenuItemsDesktop = () => {
    const [openPopover, setOpenPopover] = useState<string | null>(null);
     const t = useTranslations('Navbar');
      const navigationItems = useNavigationItems();
      const locale = useLocale();
      const direction = getLangDir(locale);
  
    // Refs for hover detection
    const popoverRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
    
    // Timeouts for delay on mouseout
    const timeoutRefs = useRef<{ [key: string]: NodeJS.Timeout }>({});
     const handleNavHoverStart = (key : string) => {
        // Clear any existing timeout
        if (timeoutRefs.current[key]) {
          clearTimeout(timeoutRefs.current[key]);
          delete timeoutRefs.current[key];
        }
        setOpenPopover(key);
      };
      
      const handleNavHoverEnd = (key : string) => {
        // Add a small delay before closing
        timeoutRefs.current[key] = setTimeout(() => {
          if (openPopover === key) {
            setOpenPopover(null);
          }
        }, 10); // 150ms delay
      };
  return (
    <nav className='hidden 2xl:flex gap-8 font-amiri text-lg font-normal'>
    <Link href='/' className="transition-colors hover:text-[#0E4815] ">
      {t('home')}
    </Link>
    
    {/* Nested Navigation Items */}
    {navigationItems.map((item) => (
      <div
        key={item.key}
        ref={el => { popoverRefs.current[item.key] = el }}
        className="relative"
        onMouseEnter={() => handleNavHoverStart(item.key)}
        onMouseLeave={() => handleNavHoverEnd(item.key)}
      >
        <Popover open={openPopover === item.key} >
          <PopoverTrigger asChild>
            <button className="flex items-center gap-1 transition-colors hover:text-[#0E4815] focus:outline-none">
              {item.label} 
              <ChevronDown 
                className={cn(
                  "h-4 w-4 transition-transform duration-200",
                  openPopover === item.key && "transform rotate-180"
                )} 
              />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-64 p-0 bg-white dark:bg-gray-800 border-muted-foreground" sideOffset={16} dir={direction}>
            <div className="grid gap-1 p-2">
              {item.items.map((subItem) => (
                <Link 
                  key={subItem.href} 
                  href={subItem.href}
                  className="flex items-center rounded-md px-4 py-2 text-sm hover:bg-gray-200  transition-colors hover:text-[#0E4815] "
                >
                  {subItem.label}
                </Link>
              ))}
            </div>
          </PopoverContent>
        </Popover>
      </div>
    ))}
    
   
    <Link href='/contact-us' className="transition-colors hover:text-[#0E4815]">
     
        {t('contact us')}
  
    </Link>
  </nav>
  )
}

export default MenuItemsDesktop
