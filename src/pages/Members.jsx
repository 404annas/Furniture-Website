import React from "react";
import logo0 from "../assets/Logo0.png";
import logo1 from "../assets/Logo1.png";
import logo2 from "../assets/Logo2.png";
import logo3 from "../assets/Logo3.png";
import logo4 from "../assets/Logo4.jpg";

const Members = () => {
  return (
    <section className="bg-[#a1684e] h-fit text-center py-10 px-4">
      <h1
        className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold mb-10"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Proud Members
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
        <img
          className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs object-contain"
          src={logo0}
          alt="BIID Member"
        />
        <img
          className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs object-contain"
          src={logo4}
          alt="Kingston Chamber Logo"
        />
        <img
          className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs object-contain"
          src={logo1}
          alt="Logo 1"
        />
        <img
          className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs object-contain"
          src={logo2}
          alt="Logo 2"
        />
        <img
          className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs object-contain"
          src={logo3}
          alt="Logo 3"
        />
      </div>
    </section>
  );
};

export default Members;
