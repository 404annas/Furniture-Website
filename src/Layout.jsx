import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";
import ChatBot from "./components/ChatBot";
import ChatBotWelcomeMsg from "./components/ChatBotWelcomeMsg";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <Outlet />
      </main>
      <Footer />
      <ChatBot />
      <ChatBotWelcomeMsg />
      
    </div>
  );
};

export default Layout;
