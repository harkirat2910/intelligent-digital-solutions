import React, { useEffect, useState } from "react";
import ChatBot from "react-chatbotify";
import { GoogleGenerativeAI } from "@google/generative-ai";
import './noorBot.css';

const settings = {
    isOpen: true,
    general: {
      primaryColor: '#42b0c5',
      secondaryColor: '#491d8d',
      fontFamily: 'Arial, sans-serif',
      embedded: true,
      showFooter: true,
      height: "6000px",
    },
    header: {
      title: 'NoorBot'
    },
    botBubble: {
      simStream: true
    }

  };

const bodyStyle = {
  display: "flex", 
  justifyContent: "center",
  alignItems: "center", 
  backgroundColor : '#B0E0E6',
  height:'100vh',
  width:'100vw',
}

const genAI = new GoogleGenerativeAI("AIzaSyAlSGNT0EKprAvUcp51v8hXv6HBCK4RN5U");
const runGenAI = async(prompt) => {
const model = genAI.getGenerativeModel({  model: "gemini-pro"});
const result = await model.generateContent(prompt);
const response = await result.response;
return response.text();
}

const flow = {
  start:{
    message: "Hi, I'm NoorBot.....what is your query?",
    path: "model"
  },
  model:{
    message: async(params) => {return await runGenAI(params.userInput)},
    path: "model"
  }
};

const noorBot = () => {
    return(
    <div style={bodyStyle}>
        <ChatBot flow = {flow} settings={settings} />
    </div>

    );
};  

export default noorBot;