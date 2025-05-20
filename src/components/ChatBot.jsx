import React, { useEffect } from "react";

const ChatBot = () => {
  const adminNumber = "923272695806";

  const openWhatsApp = () => {
    const url = `https://wa.me/${adminNumber}`;
    window.open(url, "_blank");
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.5/inject.js";
    script.async = true;

    script.onload = () => {
      window.botpress.init({
        botId: "69a3d569-b57c-4f63-b32f-639f36e74d00",
        clientId: "1c6ed135-d2dd-4942-8f26-e2f6a1daac85",
        configuration: {
          composerPlaceholder: "Hey!",
          botName: "Desingz",
          botAvatar:
            "https://files.bpcontent.cloud/2025/05/20/05/20250520051638-ZBX1HLVX.png",
          botDescription: "We Create Custom Desingz...",
          fabImage:
            "https://files.bpcontent.cloud/2025/05/20/05/20250520051721-VE4QMDV0.png",
          color: "#ffc53d",
          variant: "soft",
          themeMode: "dark",
          fontFamily: "inter",
          radius: 1,
          allowFileUpload: false,
        },
      });
    };

    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <div
        style={{
          position: "fixed",
          bottom: "90px",
          right: "30px",
          zIndex: 9999,
        }}
      >
        <div
          style={{
            background: "#25D366",
            color: "#fff",
            padding: "10px 14px",
            borderRadius: "50px",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            gap: "10px",
            boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
            fontSize: "14px",
            fontWeight: "500",
          }}
          onClick={openWhatsApp}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </div>
    </>
  );
};

export default ChatBot;
