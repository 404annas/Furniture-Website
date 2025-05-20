import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";

import Before1 from "../assets/Before1.jpg";
import Before2 from "../assets/Before2.jpg";
import Before3 from "../assets/Before3.jpg";
import Before4 from "../assets/Before4.jpg";
import Before5 from "../assets/Before5.jpg";
import Before6 from "../assets/Before6.jpg";
import Before7 from "../assets/Before7.jpg";
import Before8 from "../assets/Before8.jpg";
import Before9 from "../assets/Before9.jpg";

const images = [
  {
    src: Before1,
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
  {
    src: Before2,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Before3,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Before4,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Before5,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Before6,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Before7,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Before8,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Before9,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
];

const SuttonLondonBefore = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      <div className="px-4 sm:px-8 md:px-20 py-10">
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
                    className="w-full h-60 sm:h-64 object-cover rounded-md cursor-pointer shadow hover:scale-105 transition-transform duration-200"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      <Link
        to="/p16-sutton-style"
        className="flex items-center justify-center mb-10"
      >
        <button className="bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 transition-all duration-300">
          Go Back
        </button>
      </Link>
    </section>
  );
};

export default SuttonLondonBefore;
