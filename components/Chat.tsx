'use-client'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useChat } from "ai/react";
import { ScrollArea } from "./ui/scroll-area";

export function Chat() {
  const { messages, input, handleInputChange, handleSubmit } = useChat()

  return (
      <div className="flex min-h-screen bg-slate-50 items-center justify-center">
        <Card className="w-[440px] grid grid-rows-[min-content_1fr_min-content]">
          <CardHeader>
            <CardTitle>Chat AI</CardTitle>
            <CardDescription>Usign Vercel SDK to Create Chat</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
         <ScrollArea>
            {messages?.map((message, index) => (
              <div key={message?.id}>
              {message.role === 'user' && <Avatar>
                <AvatarFallback>
                  DF
                </AvatarFallback>
                <AvatarImage src="https://avatars.dicebear.com/api/avataaars/df.svg" />
              </Avatar>}
              {message.role === 'assistant' && <Avatar>
                <AvatarFallback>
                  DF
                </AvatarFallback>
                <AvatarImage src="https://avatars.dicebear.com/api/avataaars/df.svg" />
              </Avatar>}
              <p className="leading-relaxed">
                <span className="text-slate-700 block font-bold">
                  {message?.role === 'user' ? 'You' : 'Assistant'}
                </span>
                {message?.content}
              </p>
            </div>
            ))}
            </ScrollArea>
          </CardContent>
          <CardFooter>
            <form  className="space-x-2" onSubmit={handleSubmit}>
              <Input placeholder="How can i help you?" value={input} onChange={handleInputChange}  />
              <Button type="submit">Send</Button>
            </form>
          </CardFooter>
        </Card>
      </div>
    );
}
