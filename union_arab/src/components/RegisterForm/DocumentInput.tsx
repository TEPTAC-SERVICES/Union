"use client"

import { useLocale, useTranslations } from 'next-intl'
import {  useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { getLangDir } from 'rtl-detect'
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form'
import { Input } from '../ui/input'
import { cn } from '@/lib/utils'
import {  XCircle} from 'lucide-react'

const DocumentInput = () => {
  const [fileName, setFileName] = useState<string>('')
  const [isDragging, setIsDragging] = useState(false)
  const t = useTranslations("RegisterPage")
  const locale = useLocale()
  const direction = getLangDir(locale)
  const { control, setValue } = useFormContext()

  const handleFileChange = (file: File | undefined) => {
    if (file) {
      setFileName(file.name)
      setValue("document", file)
    } else {
      setFileName('')
      setValue("document", null)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    handleFileChange(file)
  }

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(false)
    const file = e.dataTransfer.files?.[0]
    handleFileChange(file)
  }

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = () => {
    setIsDragging(false)
  }

  return (
    <FormField
      control={control}
      name="document"
      render={({ }) => (
        <FormItem>
          <FormLabel>{t("step2.document")}</FormLabel>
          <FormControl>
            <div
            dir={direction}
              className={cn(
                "border-2 border-dashed rounded-lg p-4 text-center cursor-pointer transition-colors relative",
                isDragging ? "border-primary bg-primary/10" : "border-muted-foreground"
              )}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              onDragLeave={handleDragLeave}
            >
              <Input
                type="file"
                onChange={handleInputChange}
                accept=".pdf,.doc,.docx,image/*"
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                {fileName ? (
                  <>
                  <p className="text-sm text-muted-foreground">{fileName}</p>
                  <XCircle className="absolute -top-3 z-10 text-[#0E4815] -right-3" />
                  </>
                ) : (
                  <div className="text-muted-foreground">
                    <svg
                      className="mx-auto h-12 w-12 mb-2"
                      stroke="currentColor"
                      fill="none"
                      viewBox="0 0 48 48"
                      aria-hidden="true"
                    >
                      <path
                        d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                        strokeWidth={2}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="mt-1">{t("step2.documenttitle")}</p>
                    <p className="text-xs mt-1">
                      {t("step2.documentsubtitle")}
                    </p>
                  </div>
                )}
              </label>
            </div>
          </FormControl>
          <FormMessage />
        </FormItem>
      )}
    />
  )
}

export default DocumentInput