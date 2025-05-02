"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Send } from "lucide-react";

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "무엇이든 물어보세요😊", isUser: false },
  ]);

  const handleButtonClick = (message: string) => {
    setMessages(prev => [
      ...prev,
      { text: message, isUser: true },
      { text: "좋은 질문이에요!", isUser: false }, // Dummy bot response
    ]);
  };

  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Chat area */}
      <div className="flex-1 p-4 overflow-y-auto">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              message.isUser ? "justify-end" : "justify-start"
            } mb-4`}
          >
            <Card
              className={`border-0 shadow-sm ${
                message.isUser ? "bg-[#40e0d0]" : "bg-gray-50"
              }`}
            >
              <CardContent className="p-3">
                <p
                  className={`${
                    message.isUser ? "text-white" : "text-gray-700"
                  }`}
                >
                  {message.text}
                </p>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>

      {/* Center placeholder */}
      {messages.length <= 1 && (
        <div className="flex-grow flex items-center justify-center">
          <h2 className="text-3xl font-bold text-[#40e0d0] opacity-30">
            채팅하기
          </h2>
        </div>
      )}

      {/* Suggestion buttons */}
      <div className="p-4 border-t border-gray-200">
        <div className="grid grid-cols-3 gap-2">
          <Button variant="outline" onClick={() => handleButtonClick("레시피 추천 해줘")}>
            레시피 추천
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick("냉장고 상태 보여줘")}>
            내 냉장고
          </Button>
          <Button variant="outline" onClick={() => handleButtonClick("마이페이지 열어줘")}>
            마이페이지
          </Button>
        </div>
      </div>

      {/* Floating Action Button */}
      <div className="fixed bottom-20 right-5">
        <Button className="w-14 h-14 rounded-full bg-[#40e0d0] hover:bg-[#3bcdc0]">
          <Send className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
};

export default Chat;
