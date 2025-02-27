

import { PostInput } from "@/components/PostInput"
import Navbar from "@/sections/Navbar"
import { Post } from "@/components/Post"








function App() {
   

  return (
    <div className="min-h-screen ">
      <Navbar />

      <div className="max-w-2xl mx-auto pt-24 px-4">
        <PostInput />
        <Post />

       
      </div>
    </div>
  )
}

export default App

