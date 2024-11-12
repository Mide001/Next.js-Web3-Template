/* @client-only */
"use client";
import React, { useState, useEffect} from "react"; 
import { ConnectButton } from "@rainbow-me/rainbowkit";

export default function Home() {

  const [message, setMessage] = useState('');

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setMessage(data.message);
    }

    fetchData();
  }, []);


  return (
    <>
    <div>
      <h1>Next.js API Example</h1>
      <h2 className="text-red-500">{message}</h2>
      <ConnectButton />
    </div>
    </>
  );
}
