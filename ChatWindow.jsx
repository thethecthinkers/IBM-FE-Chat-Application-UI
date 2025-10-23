import React, { useState } from "react";
import MessageBubble from "./MessageBubble";
import MessageInput from "./MessageInput";

const ChatWindow = ({ contact }) => {
  const [messages, setMessages] = useState([
    { sender: "them", text: "Hey there!" },
    { sender: "me", text: "Hello 👋" },
  ]);

  const handleSend = (msg) => {
    setMessages([...messages, { sender: "me", text: msg }]);
  };

  return (
    <div className="chat-window">
      <div className="chat-header">{contact.name}</div>
      <div className="chat-body">
        {messages.map((m, i) => (
          <MessageBubble key={i} message={m} />
        ))}
      </div>
      <MessageInput onSend={handleSend} />
    </div>
  );
};

export default ChatWindow;
