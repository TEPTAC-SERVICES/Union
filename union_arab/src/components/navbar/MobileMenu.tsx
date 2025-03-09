"use client"
import React, { useState } from 'react'
import { Link } from '@/i18n/routing'
import { useLocale, useTranslations } from 'next-intl'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetHeader,
  SheetTitle,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Menu,  Mail, Home, Sun, Moon } from 'lucide-react'

import { useRouter, usePathname } from 'next/navigation'
import { getLangDir } from 'rtl-detect'
import { useNavigationItems } from '@/hooks/useNavigationItems'
import { languages } from '@/lib/constants'
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { useTheme } from 'next-themes'



export const MobileMenu = ({ 
  className, 

}: { 
  className?: string; 
  
}) => {
  const t = useTranslations('Navbar');
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const navigationItems = useNavigationItems();
  const { theme, setTheme } = useTheme()



  const handleLanguageChange = (langCode :string) => {
    router.push(pathname.replace(/^\/(en|fr|ar)/, `/${langCode}`));
    setOpen(false);
  };
     const locale = useLocale();
      const direction = getLangDir(locale);

  return (
    <div className={className} >
      <Sheet open={open} onOpenChange={setOpen}  >
        <SheetHeader className='hidden'>
          <SheetTitle>
            navbar mobile
          </SheetTitle>
        </SheetHeader>
        <SheetTrigger asChild>
            <Menu className="h-6 w-6" />
           
        </SheetTrigger>
        <SheetContent side={direction === 'ltr' ? "right" : "left"} className="w-full sm:w-full pt-12 flex flex-col overflow-y-scroll bg-white dark:bg-gray-800 px-5" dir={direction}>
          

          {/* Mobile Navigation */}
          <div className="flex flex-col gap-6 h-full">
            <nav className="flex flex-col gap-1 ">
            <Link 
                href='/' 
                className="px-6 py-3 hover:bg-muted rounded-md transition-colors flex items-center gap-2 font-amiri font-medium text-md border-b border-muted-foreground"
                onClick={() => setOpen(false)}
              >
                
                <Home className="h-4 w-4" />
                {t('home')}
              </Link>
              
              {/* Nested Navigation with Accordion */}
              <Accordion type="single" collapsible className="w-full" >
                {navigationItems.map((item) => (
                  <AccordionItem key={item.key} value={item.key}>
                    <AccordionTrigger className="px-4 py-3 hover:bg-muted rounded-md transition-colors font-amiri font-medium text-lg border-b border-muted-foreground">
                      <div className="flex items-center gap-2">
                        {item.icon}
                        {item.label}
                      </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="pr-4 flex flex-col gap-1 py-1 text-sm text-[16px]">
                        {item.items.map((subItem) => (
                          <Link 
                            key={subItem.href} 
                            href={subItem.href}
                            className="py-2 hover:text-[#0E4815]  transition-colors"
                            onClick={() => setOpen(false)}
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
              
              
            
              <Link 
                href='/contact-us' 
                className="px-6 py-3 hover:bg-muted rounded-md transition-colors flex items-center gap-2 font-amiri font-medium text-md border-b border-muted-foreground"
                onClick={() => setOpen(false)}
              >
                <Mail className="h-4 w-4" />
                {t('contact us')}
              </Link>
            </nav>
            
            {/* Language Selector in Mobile */}
            <div className="px-4 py-2 md:hidden ">
              <h3 className="mb-2 text-sm font-medium">{t('select language')}</h3>
              <div className="flex flex-col gap-1">
             
                  <ToggleGroup type="single" className='w-full'  variant={'outline'} value={locale}>
                  {languages.map((lang) => (
                  <ToggleGroupItem className="border-muted-foreground text-muted-foreground hover:bg-muted " key ={lang.code} onClick={() => handleLanguageChange(lang.code)} value={lang.code}>{lang.name}</ToggleGroupItem>
                ))}
                  
                </ToggleGroup>
    
                
              </div>
            </div>

            <div className="px-4 py-2 md:hidden">
              <h3 className="mb-2 text-sm font-medium">{t('select theme')}</h3>
              <div className="flex flex-col gap-1">
             
                  <ToggleGroup type="single" className='w-full'  variant={'outline'} value={theme}>
                  <ToggleGroupItem className="border-muted-foreground text-muted-foreground hover:bg-muted " value='light' onClick={() => setTheme('light')}>{t('light')}<Sun/></ToggleGroupItem>
                  <ToggleGroupItem className="border-muted-foreground text-muted-foreground hover:bg-muted " value='dark' onClick={()=> setTheme('dark')}>{t('dark')}<Moon/></ToggleGroupItem>

              
                  
                </ToggleGroup>
    
                
              </div>
            </div>
            
            {/* Login/Register in Mobile */}
            <div className="mt-auto px-4 py-4 grid gap-3">
              <Link href='/login' onClick={() => setOpen(false)}>
                <Button className='w-full text-white bg-[#0E4815] hover:bg-[#0a3610] font-bold'>
                  {t('login')}
                </Button>
              </Link>
              <Link href='/register' onClick={() => setOpen(false)}>
                <Button variant='outline' className='w-full text-[#0E4815] border-[#0E4815] hover:bg-[#f0f7f1] dark:hover:bg-[#1a2e1d] font-bold'>
                  {t('register')}
                </Button>
              </Link>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  )
}