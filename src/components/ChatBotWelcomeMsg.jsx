import React, { useEffect, useState } from "react";

const ChatBotWelcomeMsg = () => {
  const [showMsg, setShowMsg] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowMsg(false);
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  if (!showMsg) return null;

  return (
    <div className="fixed bottom-24 right-4 bg-white shadow-lg rounded-xl px-4 py-3 z-50 animate-fade-in text-sm sm:text-base max-w-xs border border-gray-200">
      <p className="text-gray-800">
        👋 Need any help or a guide about <strong>Designz</strong>? Tap The
        Chat!
      </p>
    </div>
  );
};

export default ChatBotWelcomeMsg;
