// LiveChat.tsx
import React from 'react';
import { IoCloudOffline } from "react-icons/io5";

const LiveChat: React.FC = () => {
  return (
    <div className="live-chat flex flex-col items-center justify-center">
      <h2 className="text-center mb-4 mt-4 text-4xl font-semibold text-white">Live Chat</h2>

      <div className="offline-message text-xl font-medium text-white mb-4">
        We are currently offline. Please check back later.
      </div>
      <div><IoCloudOffline size={250}/></div>
    </div>
  );
};

export default LiveChat;
