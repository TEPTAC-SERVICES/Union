"use client"
import Image from "next/image"
import { useState } from "react"
import {  ImagePlus, Loader2  ,Sparkles  } from "lucide-react"
import axios from "axios"
import { enhancePostPromt } from "@/lib/promts"
import { useAuthContext } from "@/Providers/AuthProvider"

export function PostInput() {
    const [content, setContent] = useState("")
    const [loading, setLoading] = useState(false)
    const { user:session, loading : sessionLoading } = useAuthContext();
    if(sessionLoading){
      return (
        <div className="min-h-screen flex justify-center items-center">
          <p>Loading...</p>
        </div>
      )
    }
    if (!session) {
      return (
        <div className="min-h-screen flex justify-center items-center">
          <p>Not logged in</p>
        </div>
      )
    }
    
    const handleImageUpload = () => {
      // Create a hidden file input and trigger it
      const input = document.createElement('input')
      input.type = 'file'
      input.accept = 'image/*'
      input.onchange = (e) => {
        const target = e.target as HTMLInputElement;
        const file = target.files?.[0]
        if (file) {
          // Handle the file upload here
          console.log('File selected:', file)
        }
      }
      input.click()
    }

    const HandleAIPromt = async () => {
      try {
        setLoading(true)

        const response = await axios.post('http://localhost:11434/api/generate', {
          "model": "llama3.2",
          "prompt": enhancePostPromt(content),
          "stream": false,
          "temperature": 1.0,
        });
    
        if (response.data?.response) {
          // If response contains enhanced text, update content with it
          setContent(response.data.response);
        } 
    
        console.log(response);
      } catch (error) {
        console.error(error);
        setContent("An error occurred. Please try again.");
      } finally {
        setLoading(false)
      }
    }
    
    console.log("loading", loading)

    return (
      <div className="bg-white dark:bg-[#0f0f0f]  rounded-lg border border-gray-200 dark:border-gray-800 p-4 mb-6 ">
      <div className="flex space-x-4">
        <Image
          src={session?.image_url || "https://api.dicebear.com/7.x/avataaars/svg?seed=current-user"}
          alt="Current user"
          width={48}
          height={48}
          className="rounded-full bg-gray-300 dark:bg-gray-800 w-12 h-12 
            ring-2 ring-emerald-500/20"
        />
        <div className="flex-1">
          <div className="relative">
            <textarea
              placeholder="Share your thoughts..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full 
                bg-gray-100 dark:bg-[#1f1f1f]
                text-gray-900 dark:text-gray-100 
                px-4 py-3 rounded-lg 
                focus:outline-hidden 
                focus:ring-2 focus:ring-emerald-500 
                placeholder-gray-500 dark:placeholder-gray-400 
                resize-none transition-all duration-200
                border border-gray-300 dark:border-gray-800 
                hover:border-gray-400 dark:hover:border-gray-700"
              rows={3}
            />
            <div className="absolute bottom-3 right-3 flex space-x-2">
              <button
                className="p-2 rounded-full transition-colors duration-200
                  text-gray-600 dark:text-gray-400 
                  hover:text-emerald-600 dark:hover:text-emerald-500"
                title="Start AI conversation"
                onClick={HandleAIPromt}
                disabled={loading}
              >
                {loading ? (
                  <Loader2 size={20} className="animate-spin text-emerald-600 dark:text-emerald-500" />
                ) : (
                  <Sparkles size={20} />
                )}
              </button>
              <button
                onClick={handleImageUpload}
                className="p-2 rounded-full transition-colors duration-200
                  text-gray-600 dark:text-gray-400 
                  hover:text-emerald-600 dark:hover:text-emerald-500"
                title="Upload image"
                disabled={loading}
              >
                <ImagePlus size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}