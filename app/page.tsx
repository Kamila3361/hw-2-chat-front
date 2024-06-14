import Head from "next/head";
import ChatWindow from "./components/ChatWindow";


export default function Home() {
  return (
    <div className="flex items-center justify-center w-screen h-screen bg-gray-900">
      <Head>
        <title>Chat App</title>
        <meta name="description" content="A simple chat app with Next.js, TypeScript, and Tailwind CSS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ChatWindow />
    </div>
  );
}
