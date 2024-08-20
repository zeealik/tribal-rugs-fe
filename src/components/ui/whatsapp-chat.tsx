import React, { useState } from 'react';
import WhatsAppIcon from '@/assets/icons/whatsapp.svg';
import CustomerCare from '@/assets/icons/customer-care.svg';

interface ChatboxProps {
  onClose: () => void;
}

const WhatsAppButton: React.FC<{ onClick: () => void }> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="fixed bottom-4 right-4 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
    >
      <img src={WhatsAppIcon} className="w-16 bg-cover" />
    </button>
  );
};

const Chatbox: React.FC<ChatboxProps> = ({ onClose }) => {
  const [message, setMessage] = useState('Hello! I have a few questions. Can you help?');
  const whatsappNumber = '+923032332787';

  const handleSendMessage = () => {
    const encodedMessage = encodeURIComponent(message);
    window.open(
      `https://web.whatsapp.com/send?phone=${whatsappNumber}&text=${encodedMessage}`,
      '_blank'
    );
  };

  return (
    <div className="fixed bottom-20 right-4 bg-white w-80 p-4 rounded-lg shadow-lg">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-green-600">WhatsApp Chat</h2>
        <button onClick={onClose} className="text-gray-500 hover:text-gray-700 transition">
          &#x2715;
        </button>
      </div>
      <div className="mt-4">
        <div className="flex items-center">
          <img src={CustomerCare} alt="Customer Care" className="w-10 h-10 rounded-full mr-3" />
          <div>
            <h3 className="text-sm font-semibold">Tribal Rugs Palace</h3>
            <p className="text-xs text-gray-500">Customer Care</p>
          </div>
        </div>
        <div className="mt-4">
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            rows={3}
          />
        </div>
        <button
          onClick={handleSendMessage}
          className="w-full bg-green-500 text-center text-white mt-4 py-2 rounded-md hover:bg-green-600 transition duration-300"
        >
          Send
        </button>
      </div>
    </div>
  );
};

const WhatsAppChat: React.FC = () => {
  const [isChatboxOpen, setIsChatboxOpen] = useState(false);

  const toggleChatbox = () => {
    setIsChatboxOpen((prev) => !prev);
  };

  return (
    <>
      <WhatsAppButton onClick={toggleChatbox} />
      {isChatboxOpen && <Chatbox onClose={toggleChatbox} />}
    </>
  );
};

export default WhatsAppChat;
