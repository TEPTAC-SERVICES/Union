import React from 'react'
import { MessageSquareQuote } from 'lucide-react'
const TestimonialCarousselFrame = ({name , job , comment} : {name : string , job : string , comment : string}) => {
  return (
    <div className='flex flex-col border-4 border-[#0E4815] rounded-xl  gap-3 p-4 pb-10'>
      <div className=' bg-[#E7EDE8] w-[72px] h-[72px] items-center flex justify-center rounded-xl'>
        <MessageSquareQuote color='#0E4815' size={50} strokeWidth={2}/>
      </div>
      <h1 className='font-bold font-amiri text-3xl text-black dark:text-white'>{name}</h1>
      <h2 className='font-bold font-amiri text-3xl text-black dark:text-white'>{job}</h2>
      <p className='font-normal text-2xl font-amiri text-muted-foreground'>{comment}</p>
    </div>
  )
}

export default TestimonialCarousselFrame
