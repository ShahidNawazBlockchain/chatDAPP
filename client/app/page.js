 "use client"
 import { useEffect,useState,useContext } from "react";
import { ChatAppConnect } from "@/context/ChatAppContext";
export default function Home() {
  const {title}=useContext(ChatAppConnect);
  return (
    <>
    <h1>{title}</h1>
    </>
  );
}
