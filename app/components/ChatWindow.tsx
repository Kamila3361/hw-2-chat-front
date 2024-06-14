"use client";

import { useState } from 'react';
import ChatInput from './ChatInput';
import ChatMessage from './ChatMessage';

export default function ChatWindow(){
  const [messages, setMessages] = useState<string[]>(["Hello", "World"]);

  const handleSendMessage = (message: string) => {
    setMessages([...messages, message]);
  };

  return (
    <div className="flex flex-col w-full h-full p-4 bg-gray-900">
      <div className="flex-1 overflow-y-auto">
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      <ChatInput onSendMessage={handleSendMessage} />
    </div>
  );
};
