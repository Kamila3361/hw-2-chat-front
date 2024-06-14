"use client";

import Link from 'next/link'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import axios from 'axios';


export default function Page(){
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [token, setToken] = useState("");
    const router = useRouter();
    const [error, setError] = useState();

    const postData = async () => {
        try{
            const response = await axios.post('http://localhost:8000/api/login', {
                email: email,
                password: password,
            });
            setToken(response.data.accessToken);
            router.push("/login");
        } catch (error: any) {
            setError(error?.response.status);
            console.error('Error posting data:', error);
        }
    }

    useEffect(() => {
        localStorage.setItem('token', JSON.stringify(token));
    }, [token]);

    if(error){
        return(
            <div>{error}</div>
        );
    }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Login</h2>
        <form>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input type="email" className="w-full p-2 border rounded" onChange={(e) => setEmail(e.target.value)}/>
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium mb-1">Password</label>
            <input type="password" className="w-full p-2 border rounded" onChange={(e) => setPassword(e.target.value)}/>
          </div>
          <button onClick={postData} type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">
            Login
          </button>
          <p className="text-sm text-center mt-4">
            Don't have an account?{' '}
            <Link href="/signup" className="text-blue-500">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  )
}

