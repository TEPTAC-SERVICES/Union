"use client";
import FormSteps from "@/components/RegisterForm/FormSteps";
import React, { useState } from "react";
import { RegisterForm } from "@/components/RegisterForm/RegisterForm";
import { useTranslations } from "next-intl";
import ThankYouStep from "@/components/RegisterForm/ThankYouStep";
import FormStepsMobile from "@/components/RegisterForm/FormStepsMobile";

const Page = () => {
  const [step, setStep] = useState(1);
  const t = useTranslations("RegisterPage");
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const BackendURL =process.env.NEXT_PUBLIC_BACK_END_URL || "http://localhost:5000";


  return (
    <div className="grid md:grid-cols-[300px_1fr] xl:grid-cols-[350px_1fr_350px] lg:grid-cols-[300px_1fr_300px] min-h-screen bg-white dark:bg-gray-800  pt-36">
      <aside className="p-4 hidden md:block bg-white dark:bg-gray-800 h-screen md:sticky md:top-0 overflow-y-auto">
        <FormSteps stepnumber={step} />
      
      </aside>

      <main className="bg-white dark:bg-gray-800 p-4 flex flex-col gap-4 overflow-y-auto min-h-screen no-scrollbar">
        <FormStepsMobile stepindex={step} />
        {[1, 2, 3].includes(step) ? (
          <>
          <h1 className="text-2xl font-bold font-amiri">
            {t(`step${step}.title`)}
          </h1>
          <h2 className="text-xl font-medium font-amiri">
            {t(`step${step}.subtitle`)}
          </h2>
          <div className="border-b border-muted-foreground" />
          
            <RegisterForm step={step} setStep={setStep} />
            </>
          ) : <ThankYouStep />}
        
      </main>

      <aside className="bg-white dark:bg-gray-800 p-4 hidden lg:block h-screen lg:sticky lg:top-0 overflow-y-auto"></aside>
    </div>
  );
};

export default Page;