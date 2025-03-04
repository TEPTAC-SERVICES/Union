import { StepsConfig } from '@/lib/constants';
import React from 'react'

const FormStepsMobile = ({stepindex} : {stepindex : number}) => {
     const steps = StepsConfig(stepindex);
      
        if (!steps) {
          return <div>Invalid step number</div>;
        }
  return (
    <div className="flex md:hidden flex-row items-start px-5 pt-20 pb-5 w-full">
    {steps.map((step, index) => (
      <React.Fragment key={index}>
        <div className="flex flex-col items-center flex-shrink-0">
          {/* Circle */}
          <div
            className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold
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
          {/* Text */}
          <div className="font-amiri text-center mt-2">
            <p className="font-bold text-xl">{step.label}</p>
            <p className="text-muted-foreground text-lg">{step.description}</p>
          </div>
        </div>
        {/* Horizontal line between steps */}
        {index < steps.length - 1 && (
          <div className="flex-grow h-px bg-gray-300 mt-5 mx-2" />
        )}
      </React.Fragment>
    ))}
  </div>
  )
}

export default FormStepsMobile
