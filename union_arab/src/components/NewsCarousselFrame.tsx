import Image from 'next/image'
import React from 'react'
import { Button } from './ui/button'
import { cn } from '@/lib/utils'

const CarousselFrame = ({className , Imagesrc , title , subtitle} : {className : string , Imagesrc : string , title : string , subtitle : string} ) => {
  return (
    <div className={cn("relative" , className)}>
        <Image src={Imagesrc} alt="Cover Image" fill className='object-cover rounded-xl' />
        <div className='absolute bottom-0 w-full h-1/2 bg-black/40 flex flex-col py-10 px-8  gap-6 rounded-xl z-10'>
            <h1 className='font-bold text-5xl font-amiri text-white'>{title}</h1>
            <h2 className='font-bold text-xl font-amiri text-white'>{subtitle}</h2>
            <Button className='mt-4 border-4 border-[#AF9113] bg-transparent text-white py-7 hover:bg-[#AF9113] hover:text-white w-64 rounded-xl font-bold text-xl font-amiri' variant={"outline"} >اضغط للتفاصيل </Button>
        </div>
    </div>
  )
}

export default CarousselFrame
