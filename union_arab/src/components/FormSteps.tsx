export default function StepComponent({ stepnumber } : { stepnumber: number }) { 
    
    const stepsConfig = (stepnumber: number) => {
      if (stepnumber === 1) {
        return [
          { label: "حدد دورك", status: "in-progress", description: "في تقدم" },
          { label: "معلومات شخصية", status: "pending", description: "انتظار" },
          { label: "الشروط والتأكيد", status: "pending", description: "انتظار" },
        ];
      } else if (stepnumber === 2) {
        return [
          { label: "حدد دورك", status: "completed", description: "منتهي" },
          { label: "معلومات شخصية", status: "in-progress", description: "في تقدم" },
          { label: "الشروط والتأكيد", status: "pending", description: "انتظار" },
        ];
      }
      else if (stepnumber === 3) {
        return [
          { label: "حدد دورك", status: "completed", description: "منتهي" },
          { label: "معلومات شخصية", status: "completed", description: "منتهي" },
          { label: "الشروط والتأكيد", status: "in-progress", description: "في تقدم" },
        ];
      }
      else if (stepnumber === 4) {
        return [
          { label: "حدد دورك", status: "completed", description: "منتهي" },
          { label: "معلومات شخصية", status: "completed", description: "منتهي" },
          { label: "الشروط والتأكيد", status: "completed", description: "منتهي" },
        ];
      }
    }
    

    const steps = stepsConfig(stepnumber);
  
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
  