"use client"
import { ThemeToggle } from '@/components/theme-toggle'
import { Button } from '@/components/ui/button'
import { Link } from '@/i18n/routing'
import { ChevronDown, Globe } from 'lucide-react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import React from 'react'
const Navbar = () => {
    const t = useTranslations('Navbar');
  return (
    <header className='bg-white dark:bg-gray-800 w-full h-32 z-20  flex items-center justify-between px-12 border-b border-muted-foreground '>
      <Image src='/logo.svg' width={100} height={100} alt='logo' />
      <div className='hidden xl:block gap-12 font-amiri text-lg  font-normal  '>
     
        <Link  href='/'>{t('home')}</Link>
        <Link className='flex items-center justify-center' href='/organization'>{t('organization')}<ChevronDown /></Link>
        <Link className='flex items-center justify-center' href='/membership'>{t('membership')}<ChevronDown /></Link>
        <Link className='flex items-center justify-center' href='/activities'>{t('activities')}<ChevronDown /></Link>
        <Link  href='/financing'>{t('financing')}</Link>
        <Link className='flex items-center justify-center' href='/documents'>{t('documents')}<ChevronDown /></Link>
        <Link  href='/contact-us'>{t('contact us')}</Link>
       
      </div>
      <div className='flex gap-5 items-center'>
        <div className='flex '><Globe /><ChevronDown /></div>
        <ThemeToggle/>
      </div>
      <div className='flex gap-5'>
        <Link href='/login'>
        <Button className='text-white bg-[#0E4815]  font-bold px-4 py-2'>{t('login')}</Button>
        </Link>
        <Link href='/register'>
        <Button variant={'outline'} className='text-[#0E4815] border-[#0E4815]  bg-transparent font-bold px-4 py-2' >{t('register')}</Button>
        </Link>
      </div>
    </header>
  )
}
export default Navbar
