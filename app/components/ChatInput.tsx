"use client";

import { useState, FormEvent } from 'react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
}

export default function ChatInput({ onSendMessage }: ChatInputProps){
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSendMessage(message);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex p-4 bg-gray-800">
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="flex-1 p-2 text-white bg-gray-700 border-none rounded-md focus:ring-2 focus:ring-blue-500"
        placeholder="Type your message..."
      />
      <button
        type="submit"
        className="p-2 ml-2 text-white bg-blue-600 rounded-md"
      >
        Send
      </button>
    </form>
  );
};
