import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import WardrobeMain from "../assets/WardrobeMain.webp"
import Wardrobe1 from "../assets/Wardrobe1.webp"
import Wardrobe2 from "../assets/Wardrobe2.webp"
import Wardrobe3 from "../assets/Wardrobe3.webp"
import Wardrobe4 from "../assets/Wardrobe4.webp"
import Wardrobe5 from "../assets/Wardrobe5.webp"
import Wardrobe6 from "../assets/Wardrobe6.webp"
import Wardrobe7 from "../assets/Wardrobe7.webp"
import Wardrobe8 from "../assets/Wardrobe8.webp"
import Wardrobe9 from "../assets/Wardrobe9.webp"

const images = [
  {
    src: Wardrobe1,
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
  {
    src: Wardrobe2,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Wardrobe3,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Wardrobe4,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Wardrobe5,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Wardrobe9,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Wardrobe6,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Wardrobe7,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Wardrobe8,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
];

const Portfolio18 = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      <div className="text-center my-8 sm:my-12 md:my-16">
        <h1
          className="text-[#b37558] text-3xl sm:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Bespoke Wardrobe study in Wimbledon
        </h1>
      </div>

      <div className="flex flex-col gap-6 text-base sm:text-lg text-black text-center max-w-4xl mx-auto px-4 sm:px-6">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste
          aperiam autem quia molestiae tempora recusandae, doloribus magnam ex
          expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in
          voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error
          quae repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste
          aperiam autem quia molestiae tempora recusandae, doloribus magnam ex
          expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in
          voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error
          quae repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste
          aperiam autem quia molestiae tempora recusandae, doloribus magnam ex
          expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in
          voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error
          quae repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste
          aperiam autem quia molestiae tempora recusandae, doloribus magnam ex
          expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in
          voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error
          quae repellat.
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
        <Link to={"/p14-air-mitcham"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p17-wine-cellar" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio18;
