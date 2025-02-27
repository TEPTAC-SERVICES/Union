"use client";

import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Trash2, Sparkles as WandSparkles, Loader2 } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardFooter } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import axios from 'axios';
import { explainpostPromt } from '@/lib/promts';

export function Post() {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(142);
  const [showAIDialog, setShowAIDialog] = useState(false);
  const [aiMessage, setAiMessage] = useState('Hi! I\'m your AI assistant. How can I help you analyze this post?');
  const [userMessage, setUserMessage] = useState('');
  const [loading, setLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [posts, setPosts] = useState([  {
    text: "Just finished building a new feature for our app! 🚀 The power of React and TypeScript never ceases to amaze me. Clean code is happy code. What's your favorite tech stack?",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80",
    author: "Alex Thompson",
    author_image : "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&h=150",
    timestamp: "Posted 2 hours ago"
  }]);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikeCount(isLiked ? likeCount - 1 : likeCount + 1);
  };

  const handleDelete = () => {
    console.log('Post deleted!');
  };

  const handleSendMessage = async () => {
    if (userMessage.trim()) {
      try {
        setLoading(true);
        const response = await axios.post('http://localhost:11434/api/generate', {
          model: "llama3.2",
          prompt: explainpostPromt(posts[0].text),
          stream: false,
          temperature: 0.7,
        });

        if (response.data?.response) {
          setAiMessage(response.data.response);
        }
        setUserMessage('');
      } catch (error) {
        console.error(error);
        setAiMessage("An error occurred. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="bg-white dark:bg-[#0f0f0f]  border-border">
        <CardHeader className="space-y-0 pb-4">
          <div className="flex justify-between items-start">
            <div className="flex items-center space-x-3">
              <Avatar className="h-12 w-12 ring-2 ring-emerald-500/20">
                <AvatarImage
                  src={posts[0].author_image}
                  alt={posts[0].author}
                />
                <AvatarFallback>AT</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-foreground">{posts[0].author}</h3>
                <p className="text-sm text-muted-foreground">{posts[0].timestamp}</p>
              </div>
            </div>
            
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full text-muted-foreground hover:text-foreground">
                  <MoreHorizontal className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="bg-background border-border">
                <DropdownMenuItem 
                  className="text-destructive focus:text-destructive focus:bg-destructive/10"
                  onClick={handleDelete}
                >
                  <Trash2 className="mr-2 h-4 w-4" />
                  Delete Post
                </DropdownMenuItem>
                <DropdownMenuItem 
                  className="text-emerald-600 dark:text-emerald-400 focus:text-emerald-600 dark:focus:text-emerald-400 focus:bg-emerald-600/10"
                  onClick={() => setShowAIDialog(true)}
                >
                  <WandSparkles className="mr-2 h-4 w-4" />
                  Ask AI Assistant
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </CardHeader>
        
        <CardContent className="space-y-4">
          <p className="text-foreground">
            {posts[0].text}
          </p>
          
          
        </CardContent>
        
        <CardFooter className="border-t border-border pt-4">
          <div className="flex space-x-6">
            <Button
              variant="ghost"
              size="sm"
              className={cn(
                "flex items-center space-x-2 text-muted-foreground hover:text-foreground",
                isLiked && "text-emerald-600 dark:text-emerald-400 hover:text-emerald-600 dark:hover:text-emerald-400"
              )}
              onClick={handleLike}
            >
              <Heart 
                className={cn("h-5 w-5", isLiked && "fill-current")}
              />
              <span>{likeCount}</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
            >
              <MessageCircle className="h-5 w-5" />
              <span>24</span>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="flex items-center space-x-2 text-muted-foreground hover:text-foreground"
            >
              <Share2 className="h-5 w-5" />
              <span>Share</span>
            </Button>
          </div>
        </CardFooter>
      </Card>

      <Dialog open={showAIDialog} onOpenChange={setShowAIDialog}>
        <DialogContent className="sm:max-w-[500px] bg-background border-border">
          <DialogHeader>
            <DialogTitle className="flex items-center space-x-2 text-emerald-600 dark:text-emerald-400">
              <WandSparkles className="h-5 w-5" />
              <span>AI Assistant</span>
            </DialogTitle>
          </DialogHeader>
          
          <div className="bg-emerald-50/50 dark:bg-emerald-950/20 rounded-lg p-4 my-4 border border-emerald-100 dark:border-emerald-900">
            <p className="text-sm text-foreground">{aiMessage}</p>
          </div>

          <DialogFooter className="flex items-center space-x-2">
            <Input
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              placeholder="Ask the AI about this post..."
              className="flex-1 bg-background border-border focus-visible:ring-emerald-500"
              disabled={loading}
            />
            <Button 
              onClick={handleSendMessage} 
              disabled={loading}
              className="bg-emerald-600 hover:bg-emerald-700 text-white dark:bg-emerald-600 dark:hover:bg-emerald-700"
            >
              {loading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Processing...
                </>
              ) : (
                'Send'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}