import React, { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.5/inject.js";
    script.async = true;

    const allMessages = [];

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

      window.botpressWebChat.onEvent(
        function (event) {
          if (
            event.type === "MESSAGE.RECEIVED" ||
            event.type === "MESSAGE.SENT"
          ) {
            const message = event.payload.text;
            const sender = event.type === "MESSAGE.SENT" ? "User" : "Bot";
            allMessages.push(`${sender}: ${message}`);
          }
        },
        ["MESSAGE.RECEIVED", "MESSAGE.SENT"]
      );

      window.sendToWhatsApp = () => {
        const fullChat = allMessages.join("\n");
        const encoded = encodeURIComponent(fullChat);
        const adminNumber = "923272695806"; // Replace with your WhatsApp number
        const url = `https://wa.me/${adminNumber}?text=${encoded}`;
        window.open(url, "_blank");
      };
    };

    document.body.appendChild(script);
  }, []);

  return (
    <>
      {/* WhatsApp Button */}
      <div
        style={{
          position: "fixed",
          bottom: "70px",
          right: "20px",
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
            transition: "all 0.3s ease-in-out",
          }}
          onClick={() => window.sendToWhatsApp()}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            style={{ width: "20px", height: "20px" }}
          />
          <span>Click to share chat with admin</span>
        </div>
      </div>
    </>
  );
};

export default ChatBot;
