import React from "react";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import TwinkinMain from "../assets/TwinkinMain.webp";
import TwinkinVid from "../assets/TwinkinVid.mp4";

const Portfolio8 = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-24 py-10 max-w-screen-xl mx-auto">
      <div className="text-center my-10 sm:my-14 md:my-20">
        <h1
          className="text-[#b37558] text-3xl sm:text-4xl md:text-5xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Twickenham
        </h1>
      </div>

      <div className="flex flex-col gap-4 text-base sm:text-lg text-black text-center px-4 sm:px-6 md:px-12">
        <h2 className="rbs text-xl sm:text-3xl font-semibold text-black">
          Eclectic Interior Design: A Reflection of Unique Taste
        </h2>
        <p>
          Step into a space where creativity knows no bounds. This eclectic
          interior design project captures the client’s distinctive personality,
          seamlessly weaving a tapestry of styles, colors, and textures.
        </p>
        <p>
          The design begins with vibrant wallpaper, which sets the tone with
          bold patterns and a dynamic color palette. These colors ripple
          throughout the space, uniting elements like furniture, cabinetry, and
          decorative accents.
        </p>
        <p>
          Custom furniture pieces echo the wallpaper’s hues, combining rich
          fabrics and artistic finishes that draw the eye and invite comfort.
          Meanwhile, cabinetry is not just functional but a canvas of its own,
          adorned with complementary tones and intricate detailing that
          highlight the space’s theme.
        </p>
        <p>
          Every corner tells a story, every color carries purpose, and together
          they form an environment that feels uniquely personal yet universally
          inspiring. This is eclectic style at its finest—a design that
          celebrates individuality and creates a truly one-of-a-kind home.
        </p>
      </div>

      <div className="w-full mt-10 mb-20 px-4 sm:px-6 md:px-12">
        <video
          controls
          className="w-full aspect-video rounded-lg object-contain"
        >
          <source src={TwinkinVid} type="video/mp4" />
        </video>
      </div>

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link to={"/p15-traditional-kitchens"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p9-chessingtion-kingston" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio8;
