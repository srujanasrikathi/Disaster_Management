import React, { useState } from 'react';
import './ChatAI.css';
import chatPic from '../assets/chatPic.png';
import axios from 'axios';

function ChatAI() {
    const [isChatOpen, setIsChatOpen] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [answer, setAnswer] = useState("");   

    const displayChat = () => {
        setIsChatOpen(prev => !prev);
    }

    const handleChange = (evn) => {
        setPrompt(evn.target.value);
    }

    const generateAnswer = async () => {
        try {
            setAnswer("Preparing Answer....");

            const res = await axios.post('https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=AIzaSyCE9YsWvR4RJjZoTy_tt-PlbAWOFIZI5xQ', 
            { 
                "contents": [{"parts":[{"text": prompt}]}] 
            });

            const generatedAnswer = res?.data?.candidates?.[0]?.content?.parts?.[0]?.text;

            if (generatedAnswer) {
                setAnswer(generatedAnswer);  
            } else {
                setAnswer("No answer available in the response");
            }

        } catch (err) {
            setAnswer("Error fetching answer");   
        }
    }

    return (
        <div className='chat_container'>
            <div className='chat_button' onClick={displayChat}>
                <img src={chatPic} alt="" width='170px' height='170px' />
            </div>
            <div className={`chat_area ${isChatOpen ? 'open' : ''}`}>
                <div className='chat_input'>
                    <textarea
                        type="text"
                        placeholder='Message Rescue Ready GPT'
                        name='message'
                        onChange={handleChange}
                        value={prompt}
                    />
                    <button onClick={generateAnswer}>Ask</button>
                </div>
                <p>{answer}</p>
            </div>
        </div>
    )
}

export default ChatAI;
