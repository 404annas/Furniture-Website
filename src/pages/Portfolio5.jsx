import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const images = [
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-4.14.22-AM-2.jpeg",
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-4.14.22-AM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-4.14.22-AM.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-4.14.21-AM-2.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-4.14.21-AM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-4.14.21-AM.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-4.14.20-AM-2.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-4.14.20-AM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/12/WhatsApp-Image-2023-12-04-at-4.14.20-AM-e1701710633307.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
];

const Portfolio5 = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10 max-w-screen-xl mx-auto">
      <div className="text-center my-10 sm:my-14 md:my-20">
        <h1
          className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Bespoke Joinery Projects
        </h1>
      </div>

      <Gallery>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <Item
              key={index}
              original={img.src}
              thumbnail={img.src}
              width={img.width}
              height={img.height}
              caption={img.caption}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={img.src}
                  alt={img.caption || `Image ${index + 1}`}
                  className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover rounded-lg cursor-pointer shadow-md hover:scale-105 transition-transform duration-200"
                />
              )}
            </Item>
          ))}
        </div>
      </Gallery>

      <div className="text-center mt-10 sm:mt-12 md:mt-16 text-sm sm:text-base md:text-lg leading-relaxed text-black px-2 sm:px-6 md:px-12 lg:px-28">
        <p>
          Our portfolio showcases impeccably crafted wardrobes, headboards, and
          TV units, where functionality meets artistry in every detail.
        </p>
      </div>

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link to={"/p1-kingston-upon-thames"} className="w-full sm:w-auto">
          <button
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2"
          >
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p16-sutton-style" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio5;
