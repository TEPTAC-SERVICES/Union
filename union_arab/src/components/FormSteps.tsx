import { useTranslations } from "next-intl";

export default function StepComponent({ stepnumber } : { stepnumber: number }) { 
    
    const StepsConfig = (stepnumber: number) => {
      const t = useTranslations("RegisterPage");

      
      if (stepnumber === 1) {
        return [
          { label: t('step1.title'), status: "in-progress", description: t('stepsstatus.inprogress')},
          { label: t('step2.title'), status: "pending", description: t('stepsstatus.pending') },
          { label: t('step3.title'), status: "pending", description: t('stepsstatus.pending') },
        ];
      } else if (stepnumber === 2) {
        return [
          { label: t('step1.title'), status: "completed", description: t('stepsstatus.completed') },
          { label: t('step2.title'), status: "in-progress", description: t('stepsstatus.inprogress')},
          { label: t('step3.title'), status: "pending", description: t('stepsstatus.pending') },
        ];
      }
      else if (stepnumber === 3) {
        return [
          { label: t('step1.title'), status: "completed", description: t('stepsstatus.completed') },
          { label: t('step2.title'), status: "completed", description: t('stepsstatus.completed') },
          { label: t('step3.title'), status: "in-progress", description: t('stepsstatus.inprogress')},
        ];
      }
      else if (stepnumber === 4) {
        return [
          { label: t('step1.title'), status: "completed", description: t('stepsstatus.completed') },
          { label: t('step2.title'), status: "completed", description: t('stepsstatus.completed') },
          { label: t('step3.title'), status: "completed", description: t('stepsstatus.completed') },
        ];
      }
    }
    

    const steps = StepsConfig(stepnumber);
  
    if (!steps) {
      return <div>Invalid step number</div>;
    }
  
    return (
      <div className="flex flex-col items-start px-5 pt-20 pb-5">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start mb-4">
            {/* Circle + Connecting Line */}
            <div className="flex flex-col items-center">
              {/* Circle */}
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold mb-2
                  ${
                    step.status === "completed"
                      ? "bg-[#0E4815]"
                      : step.status === "in-progress"
                      ? "bg-[#AF9113]"
                      : "bg-gray-400"
                  }
                `}
              >
                {step.status === "completed" ? "✔" : index + 1}
              </div>
  
              {/* Vertical Line (except for the last step) */}
              {index < steps.length - 1 && (
                <div className="w-px h-10 bg-gray-300 mt-2" />
              )}
            </div>
  
            {/* Text Section (Label + Description) */}
            <div className="ml-4 font-amiri">
              <p className="font-bold text-xl mx-5">{step.label}</p>
              <p className="text-muted-foreground mx-5 text-lg">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    );
  }
  