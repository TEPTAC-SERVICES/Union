"use client";

import { useEffect, useState } from "react";
import { useAuthContext } from "@/Providers/AuthProvider";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import axios from "axios";

const Page = () => {
  const { user:session, loading : sessionLoading,  handleLogout } = useAuthContext();
  const router = useRouter();
  const [uploading, setUploading] = useState(false); // Upload state
  const [file, setFile] = useState<File | null>(null); // Selected file
  const [user, setUser] = useState<User | null>(null);
  const [loading , setLoading] = useState(true);


  useEffect(()=>{
    const fetchUser = async ({id} : {id :string | undefined}) => {
      try {
        setLoading(true);
        if (!id) {
          return;
        }
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BACK_END_URL}/profile/${id}`, 
        { withCredentials: true });
        setUser(response.data);

      } catch (error) {
        console.error("Error fetching user:", error);
      }
      finally {
        setLoading(false);
      }
    };
    fetchUser({id: session?.id});

        
  }, [session])


  

  // Redirect to login if no user and not loading
  useEffect(() => {
    if (!session && !loading) {
      router.push("/login");
    }
  }, [session, loading, router]);

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent default form submission

    if (!file) {
      alert("Please select a file first.");
      return;
    }

    setUploading(true);
    const formData = new FormData();
    formData.append("avatar", file);

    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_BACK_END_URL}/profile/upload`, formData, {
        withCredentials: true,
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      

    

      const data = response.data;
      setUser(user ? { ...user, image_url: data.fileUrl } : null);

      console.log(data.image_url); // Public URL of the uploaded file
    } catch (error) {
      console.error("Error uploading file:", error);
      alert("Failed to upload file");
    } finally {
      setUploading(false);
    }
  };

  // Handle file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0] || null;
    setFile(selectedFile);
  };

  if (!session) {
    return <p>not logged in</p>; // Optional fallback if `user` is null
  }

  return (
    <div className="flex flex-col items-center justify-center h-dvh">

      {loading || sessionLoading ? (
        <div className="flex flex-col items-center justify-center h-dvh">
          <div className="animate-spin text-gray-500">Loading...</div>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center gap-5">
          <div className="flex gap-5 items-center justify-center">
            {file ? (
              <Image
                src={URL.createObjectURL(file)}
                alt={file.name}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) :
            user?.image_url ? (
              <Image
                src={user.image_url}
                alt={user.username}
                width={40}
                height={40}
                className="rounded-full"
              />
            ) : (
              <Image
                src="/default-avatar.png"
                alt="Default Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            )}
            <div>{user?.username}</div>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>

          {/* File Upload Form */}
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 w-full max-w-md"
          >
            <Input
              type="file"
              onChange={handleFileChange}
              accept="image/*"
              className="border p-2 rounded w-full"
              disabled={uploading}
            />
            <Button
              type="submit"
              disabled={uploading || !file}
              className={`w-full ${
                uploading ? "bg-gray-400" : "bg-blue-500 text-white"
              }`}
            >
              {uploading ? "Uploading..." : "Upload Avatar"}
            </Button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Page;
