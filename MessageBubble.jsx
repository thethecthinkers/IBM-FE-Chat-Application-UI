import React from "react";

const MessageBubble = ({ message }) => {
  return (
    <div className={`message-bubble ${message.sender}`}>
      <p>{message.text}</p>
    </div>
  );
};

export default MessageBubble;
