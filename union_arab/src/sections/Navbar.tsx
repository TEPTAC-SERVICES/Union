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
    <nav className='bg-white dark:bg-gray-800 w-full h-32  flex items-center justify-between px-12 shadow-sm z-10'>
      <Image src='/logo.svg' width={100} height={100} alt='logo' />
      <div className='flex gap-5'>
      
        <Link href='/'>{t('home')}</Link>
        <Link href='/organization'>{t('organization')}</Link>
        <Link href='/membership'>{t('membership')}</Link>
        <Link href='/activities'>{t('activities')}</Link>
        <Link href='/financing'>{t('financing')}</Link>
        <Link href='/documents'>{t('documents')}</Link>
        <Link href='/contact-us'>{t('contact us')}</Link>
        
      </div>
      <div className='flex gap-5 items-center'>
        <div className='flex gap-1'><ChevronDown /><Globe /> </div>
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
    </nav>
  )
}

export default Navbar
