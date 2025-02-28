import React, { useEffect, useState } from "react";
import axios from "axios";
import ChatBot from "react-chatbotify";
import {FetchResponse} from './noorBotAI';
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

const runNoorAI = async(prompt) => {
const response = await FetchResponse(prompt);
return response;
}

const flow = {
  start:{
    message: "Hi, I'm NoorBot.....what is your query?",
    path: "model"
  },
  model:{
    message: async(params) => {return await runNoorAI(params.userInput)},
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