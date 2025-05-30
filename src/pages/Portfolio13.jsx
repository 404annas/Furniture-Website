import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import Hallway1 from "../assets/Hallway1.webp";
import Hallway2 from "../assets/Hallway2.webp";
import Hallway3 from "../assets/Hallway3.webp";
import Hallway4 from "../assets/Hallway4.webp";
import Chimney1 from "../assets/Chimney1.webp";
import Chimney2 from "../assets/Chimney2.webp";
import Chimney3 from "../assets/Chimney3.webp";
import Chimney4 from "../assets/Chimney4.webp";
import Air4 from "../assets/Air4.webp";
import Air3 from "../assets/Air3.webp";
import Bespoke2 from "../assets/Bespoke2.webp";
import Kingston4 from "../assets/Kingston4.webp";

const images = [
  {
    src: Hallway1,
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
  {
    src: Chimney1,
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: Air4,
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: Chimney4,
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: Hallway4,
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: Chimney2,
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: Hallway3,
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: Air3,
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: Kingston4,
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: Chimney3,
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: Hallway2,
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: Bespoke2,
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
];

const Portfolio13 = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-10">
      <div className="text-center my-12 sm:my-16 md:my-20">
        <h1
          className="text-[#b37558] text-2xl sm:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Surbiton Project Living and Hallway
        </h1>
      </div>

      <div className="flex flex-col gap-4 items-center rb text-lg text-black text-center mx-4 sm:mx-10 md:mx-20 my-10">
        <h1 className="rbs text-xl sm:text-3xl text-black font-semibold">
          Living Room
        </h1>
        <p className="text-base sm:text-lg">
          The marble panel, typically placed as a feature wall, serves as the
          room’s focal point.
        </p>
        <p className="text-base sm:text-lg">
          Complementing this, adjacent walls feature textured wall panels in
          sleek wood, adding warmth to the coolness of the marble.
        </p>
        <p className="text-base sm:text-lg">
          At the center of the room, a set of plush, in soft, rich fabric
          ‘Boucle’ provides comfort and style.
        </p>
        <p className="text-base sm:text-lg">
          The coffee table takes center stage between the seating arrangement.
          It features a sleek marble top with thin, minimalist metal legs.
        </p>
        <p className="text-base sm:text-lg">
          The room’s overall color palette remains within elegant neutrals—soft
          whites and black accent. The result is a perfectly balanced space that
          feels serene, inviting, and effortlessly chic, with a blend of
          contemporary materials like marble, plush textiles, and sleek metal
          finishes to create a harmonious and elegant living environment.
        </p>

        <h1 className="rbs text-xl sm:text-3xl text-black font-semibold">
          Hallway
        </h1>
        <p className="text-base sm:text-lg">
          In this contemporary hallway, the use of fluted panels creates a
          refined and tactile backdrop that exudes understated elegance. The
          vertical grooves of the fluted panels, typically in a warm finish, add
          texture and depth to the walls, giving the hallway a sleek, modern
          look.
        </p>
        <p className="text-base sm:text-lg">
          Alongside the fluted panels, floating shelves are strategically
          installed, accentuated by indirect lighting. Subtle LED strip lights
          run underneath the shelves, casting a soft, ambient glow that enhances
          any decor items placed on the shelves. At the entryway, a cozy bench
          sits beneath the fluted panels, offering both functionality and
          comfort.
        </p>
      </div>

      <div className="px-6 md:px-28 py-10">
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
                    className="w-full h-64 sm:h-80 object-cover rounded-md cursor-pointer shadow hover:scale-105 transition-transform duration-200"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link to={"/p11-seven-bed"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p14-air-mitcham" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio13;
