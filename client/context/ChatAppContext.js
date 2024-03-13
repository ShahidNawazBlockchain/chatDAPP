"use client"
import React, { useEffect,useState } from "react";
import { CheckIfWalletConnected,connectingWithContract,connectwallet,convertTime } from "@/utils/apiFeature";

export const ChatAppConnect=React.createContext();

export const ChatAppProvider=({children})=>{
    const title="Hi Welcome to blockchain Cat app";
    return (
        <ChatAppConnect.Provider value={title}> 
        {children}
        {title}
        </ChatAppConnect.Provider>
    )
}