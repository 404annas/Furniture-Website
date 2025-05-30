import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import SevenBedMainS from "../assets/SevenBedMainS.webp";
import SevenBed1 from "../assets/SevenBed1.webp";
import SevenBed2 from "../assets/SevenBed2.webp";
import WhiteGamla from "../assets/WhiteGamla.webp";

const images = [
  {
    src: SevenBed1,
    width: 1600,
    height: 1200,
    caption: "Modern",
  },
  {
    src: SevenBedMainS,
    width: 1600,
    height: 1200,
    caption: "Stylish",
  },
  {
    src: SevenBed2,
    width: 1600,
    height: 1200,
    caption: "Stylish",
  },
  {
    src: WhiteGamla,
    width: 1600,
    height: 1200,
    caption: "Stylish",
  },
];

const Portfolio11 = () => {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-24 py-10">
      <div className="text-center my-8 sm:my-12 md:my-16">
        <h1
          className="text-[#b37558] text-2xl sm:text-3xl md:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Seven bed high-end project, Sutton
        </h1>
      </div>

      <div className="flex flex-col gap-4 items-center rb text-base sm:text-lg text-black text-center max-w-4xl mx-auto px-4 sm:px-6 md:px-8 my-10">
        <h2 className="rbs text-xl sm:text-3xl text-black font-semibold">
          Luxury Living Redefined: A Seven-Bedroom High-End Project
        </h2>
        <p>
          Our design team is proud to be working on an exceptional high-end
          project: a sprawling seven-bedroom residence that epitomizes luxury
          and sophistication. From concept to completion, every detail of this
          bespoke home is being meticulously crafted to meet the highest
          standards of design and functionality.
        </p>
        <p>
          The residence boasts world-class amenities, including a
          state-of-the-art gym, a private cinema room, and an expansive double
          reception area designed for both comfort and entertaining. Each space
          is thoughtfully planned to combine elegance with practicality,
          ensuring a seamless living experience for the homeowners.
        </p>
        <p>
          Our comprehensive approach encompasses everything from the initial
          architectural layouts to the finest interior design touches. Luxurious
          materials, innovative layouts, and custom finishes are at the core of
          this project, reflecting the client’s aspirations and the artistry of
          our team.
        </p>
        <p>
          This project is a testament to our ability to transform a vision into
          a reality, delivering not just a house but a masterpiece of modern
          living. Stay tuned as we continue to bring this dream home to life!
        </p>
      </div>

      <div className="px-4 sm:px-6 md:px-10 py-10">
        <Gallery>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
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
                    className="w-full h-64 object-cover rounded-lg cursor-pointer shadow hover:scale-105 transition-transform duration-300"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link to={"/p10-reception-central"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p13-surbiton-project" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio11;
