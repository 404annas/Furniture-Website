import React from "react";

const Style = () => {
  return (
    <section>
      {/* Hero section with background image and overlay */}
      <div className="relative h-[350px] flex flex-col items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://designz.dwell-rich.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-26-at-11.50.45-AM.jpeg')",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#a1684e] opacity-60"></div>
        <h1
          className="relative text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold z-10 px-4 rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Check Your Style
        </h1>
      </div>

      {/* Grid for images, responsive with Tailwind CSS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-20">
        {/* Images */}
        <img
          className="w-full h-auto rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer hover:opacity-80"
          src="https://designz.dwell-rich.com/wp-content/uploads/2023/08/Contemporary-style-1024x682.jpg"
          alt="Contemporary style"
        />
        <img
          className="w-full h-auto rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer hover:opacity-80"
          src="https://designz.dwell-rich.com/wp-content/uploads/2023/08/Minimalistic-style-1024x682.jpg"
          alt="Minimalistic style"
        />
        <img
          className="w-full h-auto rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer hover:opacity-80"
          src="https://designz.dwell-rich.com/wp-content/uploads/2023/08/Maximalist-interiors-1024x591.jpg"
          alt="Maximalist interiors"
        />
        <img
          className="w-full h-auto rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer hover:opacity-80"
          src="https://designz.dwell-rich.com/wp-content/uploads/2023/08/Mid-century-modern-1024x682.jpg"
          alt="Mid-century modern style"
        />
        <img
          className="w-full h-auto rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer hover:opacity-80"
          src="https://designz.dwell-rich.com/wp-content/uploads/2023/08/Scandavian-1024x682.jpg"
          alt="Scandinavian style"
        />
        <img
          className="w-full h-auto rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer hover:opacity-80"
          src="https://designz.dwell-rich.com/wp-content/uploads/2023/08/Biophyllic-style-1024x681.jpg"
          alt="Biophyllic style"
        />
      </div>
    </section>
  );
};

export default Style;
