import React from "react";
import { Link } from "react-router-dom";

const styleImages = [
  {
    id: "style-1",
    title: "Contemporary style",
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Contemporary-style-1024x682.jpg",
  },
  {
    id: "style-2",
    title: "Minimalistic style",
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Minimalistic-style-1024x682.jpg",
  },
  {
    id: "style-3",
    title: "Maximalist interiors",
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Maximalist-interiors-1024x591.jpg",
  },
  {
    id: "style-4",
    title: "Mid-century modern style",
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Mid-century-modern-1024x682.jpg",
  },
  {
    id: "style-5",
    title: "Scandinavian style",
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Scandavian-1024x682.jpg",
  },
  {
    id: "style-6",
    title: "Biophyllic style",
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Biophyllic-style-1024x681.jpg",
  },
];

const Style = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[350px] flex flex-col items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://designz.dwell-rich.com/wp-content/uploads/2023/06/WhatsApp-Image-2023-06-26-at-11.50.45-AM.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-[#a1684e] opacity-60"></div>
        <h1
          className="relative text-white text-2xl sm:text-3xl md:text-4xl font-semibold z-10 px-4"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Check Your Style
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-20">
        {styleImages.map((item) => (
          <Link key={item.id} to={`/style/${item.id}`}>
            <img
              className="w-full h-auto rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer hover:opacity-80"
              src={item.src}
              alt={item.title}
            />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Style;
