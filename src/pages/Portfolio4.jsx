import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import HallwayMain from "../assets/HallwayMain.jpg"
import Hallway1 from "../assets/Hallway1.webp"
import Hallway2 from "../assets/Hallway2.webp"
import Hallway3 from "../assets/Hallway3.webp"
import Hallway4 from "../assets/Hallway4.webp"

const images = [
  {
    src: Hallway4,
    width: 1600,
    height: 900,
  },
  {
    src: Hallway1,
    width: 1600,
    height: 900,
  },
  {
    src: Hallway2,
    width: 1600,
    height: 900,
  },
  {
    src: Hallway3,
    width: 1600,
    height: 900,
  },
];

const Portfolio4 = () => {
  return (
    <section className="px-4 sm:px-6 md:px-10 lg:px-20 xl:px-32 py-10 max-w-7xl mx-auto">
      <div className="text-center my-10 sm:my-14 md:my-20">
        <h1
          className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Gilded Elegance Passage
        </h1>
      </div>

      <Gallery>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 mb-10">
          {images.map((img, index) => (
            <Item
              key={index}
              original={img.src}
              thumbnail={img.src}
              width={img.width}
              height={img.height}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={img.src}
                  alt={`Hallway ${index + 1}`}
                  className="w-full h-64 sm:h-72 md:h-80 object-cover rounded-lg shadow-lg cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105"
                />
              )}
            </Item>
          ))}
        </div>
      </Gallery>

      <div className="text-center text-sm sm:text-base md:text-lg leading-relaxed max-w-4xl mx-auto px-2 sm:px-4">
        <p>
          This luxurious hallway exudes opulence with its sophisticated design
          elements. The walls are adorned with slat panels, adding a
          contemporary touch, while golden accents throughout the space create
          an air of elegance. A focal point is a stunning ceiling light that
          captures attention with its attractive design, casting a warm and
          inviting glow. A white plush chair provides a comfortable spot for
          relaxation. The floor is adorned with a lavish rug, adding texture and
          combining the design. Wall embellishments enhance the overall
          aesthetic, creating a glamorous and inviting atmosphere in this
          sumptuous hallway.
        </p>
      </div>

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link to={"/p3-collaborative-hub"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p7-garden-design-kingston" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio4;
