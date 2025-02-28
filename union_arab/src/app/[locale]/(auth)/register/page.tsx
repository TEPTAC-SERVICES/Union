"use client"
import FormSteps from '@/components/FormSteps'
import React , { useState} from 'react'
import { RegisterForm } from '@/components/RegisterForm'
import {  useTranslations } from "next-intl";
import { Button } from '@/components/ui/button';
import Image from 'next/image';

const Page = () => {
  const [step, setStep] = useState(1)
  const t = useTranslations("RegisterPage");
  
  
  return (
    <div className="grid md:grid-cols-[300px_1fr] lg:grid-cols-[300px_1fr_300px] min-h-screen gap-4 bg-white dark:bg-gray-800 py-4">
    {/* Left Sidebar */}
    <aside className=" p-4 hidden md:block bg-white dark:bg-gray-800">
      <FormSteps stepnumber={step} />
      {step === 2 && 
  <div className='flex flex-col gap-4'>
    <div className="relative">
      <div className="absolute inset-0 flex items-center">
        <span className="w-full border-t border-gray-800 dark:border-white" />
      </div>
      <div className="relative flex justify-center text-xs uppercase">
        <span className="px-2 bg-white dark:bg-gray-800 text-muted-foreground z-10">
          {t("stepsstatus.orcontinuewith")}
        </span>
      </div>
    </div>
    <div className="grid grid-cols-1 gap-4">
      <Button 
        variant="outline" 
        className="w-full"
      >
        <Image src="/facebook.svg" width={20} height={20} alt="facebook" />
        {t("stepsstatus.facebook")}
      </Button>
      <Button 
        variant="outline" 
        className="w-full"
      >
        <Image src="/google.svg" width={20} height={20} alt="google" />
        {t("stepsstatus.google")}
      </Button>
    </div>
  </div>
}
    </aside>

    {/* Middle Section (Main Content) */}
    <main className="bg-white dark:bg-gray-800 p-4 flex flex-col gap-4">
  <>
      <h1 className="text-2xl font-bold font-amiri">{t(`step${step}.title`)}</h1>
      <h2 className='text-xl font-medium font-amiri'>{t(`step${step}.subtitle`)}</h2>
      <div className=' border-b border-muted-foreground'/>
      {(step === 1 || step === 2 || step === 3) ?

      <RegisterForm step={step} setStep={setStep} /> : null

}
    </>

    </main>


    {/* Right Sidebar */}
    <aside className="bg-white dark:bg-gray-800 p-4 hidden lg:block"></aside>
  </div>
  )
}

export default Page
