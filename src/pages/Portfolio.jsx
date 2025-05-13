import React, { useState } from "react";
import { Link } from "react-router-dom";

const allItems = [
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/DSC00311-scaled-1-1536x1025.jpg",
    title: "Kingston Upon Thames",
    route: "/p1-kingston-upon-thames",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/11/imageedit_16_6242385301.jpg",
    title: "Biophilic Oasis Conservatory",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/11/Screenshot-2023-11-29-160007.png",
    title: "Collaborative Hub",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/11/Hallway-1536x863.jpg",
    title: "Gilded Elegance Passage",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-4.14.20-AM-e1701710633307-1.jpeg",
    title: "Bespoke joinery Projects",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-06-at-01.58.32_4207f4a0-1536x1152.jpg",
    title: "Kitchens",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.29.11-PM-2.jpeg-1.jpg",
    title: "Garden design-Kingston",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/Screenshot-2025-01-10-195411.png",
    title: "Twickenham",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.27.41-PM-1.jpeg-1536x1152.jpg",
    title: "Chessingtion Kingston",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/home-design.jpg",
    title: "Reception Central London , Chelsea",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/a9f143eb06c90d47_0099-w378-h378-b0-p0-contemporary-living-room.webp",
    title: "Seven bed high-end project, Sutton",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/home-design-1-1536x1440.jpg",
    title: "Kingston Project",
  },
];

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleItems = allItems.slice(0, visibleCount);

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28">
      <div className="text-center my-12 sm:my-16 md:my-20">
        <h1
          className="text-black text-3xl sm:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Portfolio
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {visibleItems.map((item, index) => (
          <div key={index} className="my-4">
            <Link to={item.route}>
              <img
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-md transition-opacity duration-300 hover:opacity-80"
                src={item.src}
                alt={item.title}
              />
            </Link>
            <h1 className="font-semibold text-lg sm:text-xl text-center mt-2 rbs">
              {item.title}
            </h1>
          </div>
        ))}
      </div>

      {visibleCount < allItems.length && (
        <div className="flex items-center justify-center mt-8 mb-16">
          <button
            onClick={handleLoadMore}
            className="bg-[#b37558] px-6 py-2 sm:px-8 sm:py-3 rounded-md text-white font-semibold rb hover:bg-[#a0654d] transition-colors"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
