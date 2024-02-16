/* eslint-disable react/jsx-no-undef */
import './main.css';
import './chat.css';
import { FaBars, FaRegPaperPlane } from 'react-icons/fa6';
import { useState } from 'react';
import { TextInput } from './macros';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

function ChatElement() {
    return (
        <div className="chat-element">
            <header>
                <h3>Chat Panel</h3>
                <p>/main (788)</p>
            </header>
            <div className="messages-container">
                <div className="message-container">
                    <div className="message-header">
                        <div className="message-author">
                            <Avatar size="30" src="https://api.dicebear.com/7.x/bottts/svg?seed=Admin" /> Admin
                        </div>
                        <div className="message-time">
                            10:20 pm
                        </div>
                    </div>
                    <div className="message-text">
                        Ut eu magna elementum nisl suscipit consequat et eget leo. 
                    </div>
                </div>
                <div className="message-container">
                    <div className="message-header">
                        <div className="message-author">
                            <Avatar size="30" src="https://api.dicebear.com/7.x/bottts/svg?seed=Super Cat 112" /> Super Cat 112
                        </div>
                        <div className="message-time">
                            10:25 pm
                        </div>
                    </div>
                    <div className="message-text">
                        elementum nisl noseto leo?
                    </div>
                </div>
                <div className="message-container">
                    <div className="message-header">
                        <div className="message-author">
                            <Avatar size="30" src="https://api.dicebear.com/7.x/bottts/svg?seed=vova" /> vova
                        </div>
                        <div className="message-time">
                            10:30 pm
                        </div>
                    </div>
                    <div className="message-text">
                        super cat 112, loil os leo!
                    </div>
                </div>
                <textarea className="message-typing-input"></textarea>
            </div>
        </div>
    )
}

export function ChatPage(){

    const [leftPanel, setLeftPanel] = useState<boolean>(false)

    return (
        <div className="chat-page">
            <header className="blur-header">
                <div onClick={() => setLeftPanel(!leftPanel)} className="toogle-left-panel">
                    <FaBars />
                    <div className="blur-background" style={{display: leftPanel ? "block" : "none"}}    >

                    </div>
                </div>
            </header>
            <div className="groups-list-container" style={{display: leftPanel ? "block" : "none"}}>
                <TextInput />
                <div className="groups-list">
                    <h2 className="groups-list-add">Public groups  <button className="groups-list-add">+</button></h2>
                    <ul className="groups-list-add">
                        <li>/main (788)</li>
                        <li>/group122 (12)</li>
                    </ul>
                </div>
                <div className="groups-list">
                    <h2 className="groups-list-add">Private groups <button className="groups-list-add">+</button></h2>
                    <ul className="groups-list-add">
                        <li>/group12 (10)</li>
                        <li>/group14 (6)</li>
                    </ul>
                </div>
            </div>
            <div ><ChatElement /></div>
        </div>
    )
}