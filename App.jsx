import React, { useState } from "react";
import ChatWindow from "./components/ChatWindow";
import ContactList from "./components/ContactList";
import "./App.css";

const App = () => {
  const [activeChat, setActiveChat] = useState(null);

  const contacts = [
    { id: 1, name: "John Doe", status: "online" },
    { id: 2, name: "Alice", status: "offline" },
    { id: 3, name: "Bob", status: "online" },
  ];

  return (
    <div className="chat-app">
      <ContactList contacts={contacts} onSelect={setActiveChat} />
      {activeChat ? (
        <ChatWindow contact={activeChat} />
      ) : (
        <div className="welcome">Select a contact to start chatting</div>
      )}
    </div>
  );
};

export default App;
