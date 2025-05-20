import React, { useEffect } from "react";

const ChatBot = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cdn.botpress.cloud/webchat/v2.5/inject.js";
    script.async = true;

    script.onload = () => {
      window.botpress.init({
        botId: "69a3d569-b57c-4f63-b32f-639f36e74d00",
        configuration: {
          composerPlaceholder: "Hey!",
          botName: "Desingz",
          botAvatar:
            "https://files.bpcontent.cloud/2025/05/20/05/20250520051638-ZBX1HLVX.png",
          botDescription: "We Create Custom Desingz...",
          fabImage:
            "https://files.bpcontent.cloud/2025/05/20/05/20250520051721-VE4QMDV0.png",
          website: {},
          email: {
            title: "",
            link: "",
          },
          phone: {},
          termsOfService: {},
          privacyPolicy: {},
          color: "#ffc53d",
          variant: "soft",
          themeMode: "dark",
          fontFamily: "inter",
          radius: 1,
          allowFileUpload: false,
        },
        clientId: "1c6ed135-d2dd-4942-8f26-e2f6a1daac85",
      });
    };

    document.body.appendChild(script);
  }, []);

  return null;
};

export default ChatBot;
