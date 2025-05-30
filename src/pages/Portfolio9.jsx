import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import Wardrobe6 from "../assets/Wardrobe6.webp";
import Wardrobe5 from "../assets/Wardrobe5.webp";

const images = [
  {
    src: Wardrobe5,
    width: 1600,
    height: 1200,
    caption: "Modern",
  },
  {
    src: Wardrobe6,
    width: 1600,
    height: 1200,
    caption: "Stylish",
  },
];

const Portfolio9 = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-24 py-10">
      <div className="text-center my-10 sm:my-14 md:my-20">
        <h1
          className="text-[#b37558] text-2xl sm:text-3xl md:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Chessington, Kingston
        </h1>
      </div>

      <div className="flex flex-col gap-4 text-center items-center text-black max-w-4xl mx-auto px-2 sm:px-6">
        <h2 className="rbs text-xl sm:text-2xl md:text-3xl font-semibold">
          Full-Length Wardrobe in Indigo with Drawers, Brass Handles, and
          Interior Lighting
        </h2>
        <p className="text-base sm:text-lg">
          The full-length wardrobe in a rich indigo finish presents a sleek,
          modern take on classic design...
        </p>
        <p className="text-base sm:text-lg">
          The exterior features brass handles, which stand out beautifully
          against the indigo backdrop...
        </p>
        <p className="text-base sm:text-lg">
          The wardrobe doors open to reveal interior lighting...
        </p>
        <p className="text-base sm:text-lg">
          Inside, the wardrobe is meticulously organized...
        </p>

        <h2 className="rbs text-xl sm:text-2xl md:text-3xl font-semibold mt-6">
          Boy's Study Cum Wardrobe in Denim Blue with Wood Tones and Brass
          Circular Handles
        </h2>
        <p className="text-base sm:text-lg">
          The boy’s study cum wardrobe merges functionality and style...
        </p>
        <p className="text-base sm:text-lg">
          One side of the unit houses the wardrobe space...
        </p>
        <p className="text-base sm:text-lg">
          The other side of the unit is designed as a study area...
        </p>

        <h2 className="rbs text-xl sm:text-2xl md:text-3xl font-semibold mt-6">
          Under Staircase Cabinet
        </h2>
        <p className="text-base sm:text-lg">
          In a contemporary and functional design, the under-staircase area is
          ingeniously transformed...
        </p>
        <p className="text-base sm:text-lg">
          Beneath the sloping staircase, a compact washing area is created...
        </p>
        <p className="text-base sm:text-lg">
          Flanking the washing machines, custom cabinets are fitted...
        </p>
        <p className="text-base sm:text-lg">
          By smartly utilizing this often-overlooked space, it becomes a highly
          functional zone...
        </p>
      </div>

      <div className="px-4 sm:px-6 md:px-20 py-10">
        <Gallery>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                    className="w-full h-56 sm:h-64 md:h-80 object-cover rounded-md cursor-pointer shadow hover:scale-105 transition-transform duration-200"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      {/* <div className="w-full px-4 sm:px-6 md:px-10">
        <video
          controls
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg object-cover mb-12"
        >
          <source
            src="https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Video-2024-12-12-at-12.27.42-PM.mp4"
            type="video/mp4"
          />
        </video>
      </div> */}

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link to={"/p8-twickenham"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p10-reception-central" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio9;
