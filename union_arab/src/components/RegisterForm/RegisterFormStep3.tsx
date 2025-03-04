import React, { useState } from 'react'
import { Checkbox } from '../ui/checkbox'
import { useTranslations } from 'next-intl';
import { Button } from '../ui/button';
import { cn } from '@/lib/utils';

const RegisterFormStep3 = ({step, setStep} : {step: number; setStep: React.Dispatch<React.SetStateAction<number>>}) => {
    const [termsAccepted, setTermsAccepted] = useState(false);
      const t = useTranslations("RegisterPage");
    
  return (

    <div className={cn(step === 3 ? " space-y-5 flex flex-col " : "hidden")}>
    <div className="flex items-center space-x-2">
    <Checkbox 
      id="terms" 
      checked={termsAccepted}
      onCheckedChange={()=> setTermsAccepted(!termsAccepted)}
    />
    <label
      htmlFor="terms"
      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
    >
      {t("step3.checkbox")}
    </label>
    </div>
    <div className="flex gap-4 mb-5 w-full justify-between items-center">
      <Button
        variant={"outline"}
        className="border-[#0E4815]
       text-[#0E4815] font-bold px-4 py-2 bg-white dark:bg-gray-800"
        onClick={() => {
          
          setStep((prev) => prev - 1)}}
      >
        {t("step3.button2")}
      </Button>
      <Button
        type="submit"
        disabled={!termsAccepted}
        className="mt-4 text-lg text-white font-amiri bg-[#0E4815] hover:bg-[#092F0E] px-4 py-2"
      >
        {t("step3.button1")}
      </Button>
    </div>
  </div>

    

    
  )
}

export default RegisterFormStep3
