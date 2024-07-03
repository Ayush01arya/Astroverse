
import { useEffect } from 'react';

const Chatbot = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.gstatic.com/dialogflow-console/fast/messenger/bootstrap.js?v=1';
    script.async = true;
    document.body.appendChild(script);
    const style = document.createElement('style');
    style.innerHTML = `
      df-messenger {
        --df-messenger-bot-message: #d2f0c7;
        --df-messenger-button-titlebar-color: #3888C2;
        --df-messenger-chat-background-color: #fff;
        --df-messenger-font-color: #333;
        --df-messenger-send-icon: url('/images/photo.png');
        --df-messenger-user-message: #fff;
        --df-messenger-user-message-background-color: #3778C2;
      }
    `;
    document.head.appendChild(style);
  }, []);



  return (
    <df-messenger
      intent="WELCOME"
      chat-title="Astroverse Chatbot"
      agent-id="<<AGENT ID>>"
      language-code="en"
      icon-url="/images/photo.png"
    ></df-messenger>
  );
};

export default Chatbot;
