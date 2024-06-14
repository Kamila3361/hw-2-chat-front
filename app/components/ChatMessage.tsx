interface ChatMessageProps {
    message: string;
}
  
export default function ChatMessage({ message }: ChatMessageProps){
    return (
        <div className="p-4 mb-2 text-white bg-gray-700 rounded-md">
        {message}
        </div>
    );
};
  