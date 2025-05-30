import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import ReceptionCentralLondon from "../assets/ReceptionCentralLondon.webp";

const Portfolio10 = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-10">
      <div className="text-center my-8 sm:my-12 md:my-16">
        <h1
          className="text-[#b37558] text-2xl sm:text-3xl md:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Reception Central London, Chelsea
        </h1>
      </div>

      <div className="flex flex-col gap-4 items-center rb text-base sm:text-lg text-black text-center max-w-4xl mx-auto my-6 sm:my-10">
        <h2 className="rbs text-xl sm:text-2xl md:text-3xl text-black font-semibold">
          Contemporary Reception in Central London: Thoughtful Design Meets
          Modern Elegance
        </h2>
        <p>
          In the heart of Central London, this reception area showcases the
          perfect balance between style and functionality. Set within a
          rectangular room, the design demonstrates meticulous planning to make
          every element purposeful and visually engaging.
        </p>
        <p>
          The contemporary theme shines through in the carefully chosen neutral
          base palette, creating a sense of openness and sophistication. Clean
          lines and understated finishes define the room, offering a timeless
          backdrop that embodies modern elegance.
        </p>
        <p>
          To add depth and personality, accent chairs in bold, contrasting
          colors break the neutrality, serving as eye-catching focal points.
          These pops of color not only enhance the room’s energy but also
          provide a welcoming touch that resonates with visitors.
        </p>
        <p>
          This reception’s cohesive design speaks to the power of thoughtful
          details, where every choice—from layout to color—is made with
          intention, transforming a simple rectangular space into a stylish,
          inviting haven in the heart of the city.
        </p>
      </div>

      <div className="flex justify-center items-center mb-10 px-4">
        <img
          src={ReceptionCentralLondon}
          alt="Reception"
          className="max-w-5xl rounded-lg object-cover shadow-md"
        />
      </div>

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link to={"/p9-chessingtion-kingston"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p11-seven-bed" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio10;
