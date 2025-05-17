import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";

const WhatsAppChat = () => {
    return (
      <FloatingWhatsApp
        phoneNumber="+254783967670"
        accountName="Nalazuri Support"
        chatMessage="Hello! How can we assist you today?"
        statusMessage="Typically replies within a few minutes"
        avatar="/favicon.ico"
        allowEsc
        allowClickAway
        notification
        notificationSound
      />
    );
};

export default WhatsAppChat;
