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
    route: "/p2-biophilic-oasis-conservatory",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/11/Screenshot-2023-11-29-160007.png",
    title: "Collaborative Hub",
    route: "/p3-collaborative-hub",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/11/Hallway-1536x863.jpg",
    title: "Gilded Elegance Passage",
    route: "/p4-gilded-elegance-passage",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-4.14.20-AM-e1701710633307-1.jpeg",
    title: "Bespoke joinery Projects",
    route: "/p5-bespoke-joinery-projects",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-06-at-01.58.32_4207f4a0-1536x1152.jpg",
    title: "Kitchens",
    route: "/p6-kitchens",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.29.11-PM-2.jpeg-1.jpg",
    title: "Garden design-Kingston",
    route: "/p7-garden-design-kingston",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/Screenshot-2025-01-10-195411.png",
    title: "Twickenham",
        route: "/p8-twickenham",

  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.27.41-PM-1.jpeg-1536x1152.jpg",
    title: "Chessingtion Kingston",
        route: "/p9-chessingtion-kingston",

  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/home-design.jpg",
    title: "Reception Central London , Chelsea",
        route: "/p10-reception-central",

  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/a9f143eb06c90d47_0099-w378-h378-b0-p0-contemporary-living-room.webp",
    title: "Seven bed high-end project, Sutton",
        route: "/p11-seven-bed",

  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/home-design-1-1536x1440.jpg",
    title: "Kingston Project",
        route: "/p12-kingston-project",

  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.29.11-PM.jpeg-1536x1152.jpg",
    title: "Surbiton Project Living and Hallway",
        route: "/p13-surbiton-project",

  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-33_3-1536x1024.jpg",
    title: "Air B&B Mitcham",
        route: "/p14-air-mitcham",

  },
];

const Portfolio = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 4);
  };

  const visibleItems = allItems.slice(0, visibleCount);

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 mb-10">
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
        <div className="flex items-center justify-center mt-8">
          <button
            onClick={handleLoadMore}
            className="bg-[#b37558] hover:bg-[#a0654d] text-white font-medium px-5 sm:px-6 py-2 sm:py-2.5 rounded-md transition duration-200 text-sm sm:text-base"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
