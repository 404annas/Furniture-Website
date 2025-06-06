import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import KitchenMain from "../assets/KitchenMain.webp";
import Kitchen1 from "../assets/Kitchen1.webp";
import Kitchen2 from "../assets/Kitchen2.webp";
import Kitchen3 from "../assets/Kitchen3.webp";
import Kitchen4 from "../assets/Kitchen4.webp";
import Kitchen5 from "../assets/Kitchen5.webp";

const images = [
  {
    src: KitchenMain,
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
  {
    src: Kitchen1,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Kitchen2,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Kitchen3,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Kitchen4,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Kitchen5,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
];

const Portfolio6 = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      <div className="text-center my-8 sm:my-12 md:my-16">
        <h1
          className="text-[#b37558] text-3xl sm:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Modern Kitchens
        </h1>
      </div>

      <div className="flex flex-col gap-6 text-base sm:text-lg text-black text-center max-w-4xl mx-auto px-4 sm:px-6">
        <p>
          At our company, we view Modern Kitchens as the heart of every home,
          where families gather, memories are made, and culinary adventures
          unfold. Our portfolio showcases kitchens designed to stand the test of
          time, with timeless aesthetics that transcend fleeting trends.
        </p>
        <p>
          In each Modern Kitchen, you’ll find elegant handles adorning cabinets
          and drawers, meticulously selected to complement the overall design
          while offering a touch of sophistication.
        </p>
        <p>
          Expert joinery is at the core of our designs, reflecting our
          commitment to craftsmanship and precision. Every cabinet, countertop,
          and fixture is seamlessly integrated, resulting in a space that exudes
          both beauty and functionality.
        </p>
        <p>
          In essence, our Modern Kitchens are more than just spaces for cooking;
          they’re sanctuaries where families come together, where design meets
          functionality, and where every detail is thoughtfully considered to
          create a truly exceptional living experience.
        </p>
      </div>

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

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link to={"/p16-sutton-style"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p15-traditional-kitchens" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio6;
