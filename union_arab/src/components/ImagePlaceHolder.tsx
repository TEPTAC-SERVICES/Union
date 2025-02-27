import { User2 } from 'lucide-react'
import React from 'react'

const ImagePlaceHolder = ({width, height , className} : {width: number, height: number , className?: string}) => {
  return (
    <div className={`bg-gray-200 w-${width} h-${height} rounded-full flex items-center justify-center ${className} ` }>
        <User2  className="h-fit w-auto"/>
    </div>
  )
}

export default ImagePlaceHolder
