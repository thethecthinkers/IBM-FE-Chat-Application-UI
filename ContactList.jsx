import React from "react";

const ContactList = ({ contacts, onSelect }) => {
  return (
    <div className="contact-list">
      {contacts.map((contact) => (
        <div
          key={contact.id}
          className={`contact ${contact.status}`}
          onClick={() => onSelect(contact)}
        >
          <span>{contact.name}</span>
          <small>{contact.status}</small>
        </div>
      ))}
    </div>
  );
};

export default ContactList;
