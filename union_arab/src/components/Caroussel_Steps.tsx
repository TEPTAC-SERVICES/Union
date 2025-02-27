import { cn } from "@/lib/utils";

const Caroussel_Steps = ({ current, total , className ,stepcolor }: { current: number, total: number  , className?: string , stepcolor?: string}) => {
    if (total <= 1) return null;
  
    return (
      <div className={cn("flex gap-1", className)}>
        {
        Array.from({ length: total }).map((_, index) => (

          <div
            key={index+1}
            className={`w-3 h-3 rounded-full ${
              index+1 === current ? `${stepcolor ? `bg-[${stepcolor}]` : "bg-[#AF9113]"}` : "bg-[#D9D9D9]"
            }`}
          />
        ))}
      </div>
    );
  };

export default Caroussel_Steps;