import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

import KingstonBg from "../assets/KingstonBg.jpg";
import Kingston1 from "../assets/Kingston1.webp";
import Kingston2 from "../assets/Kingston2.webp";
import Kingston3 from "../assets/Kingston3.webp";
import Kingston4 from "../assets/Kingston4.webp";
import Kingston5 from "../assets/Kingston5.webp";
import Kingston6 from "../assets/Kingston6.webp";
import Kingston7 from "../assets/Kingston7.webp";
import Kingston8 from "../assets/Kingston8.webp";
import Kingston9 from "../assets/Kingston9.webp";
import Kingston10 from "../assets/Kingston10.webp";

const images = [
  {
    src: Kingston1,
    width: 1600,
    height: 1200,
    caption: "Modern Kitchen",
  },
  {
    src: Kingston2,
    width: 1600,
    height: 1200,
    caption: "Stylish Living Room",
  },
  {
    src: Kingston3,
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: Kingston4,
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: Kingston5,
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: Kingston6,
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: Kingston7,
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: Kingston8,
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: Kingston9,
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: Kingston10,
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: Kingston1,
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: Kingston4,
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
];

const Portfolio1 = () => {
  return (
    <section>
      <div className="relative h-[350px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${KingstonBg})`,
          }}
        />
        <div className="absolute inset-0 bg-[#a1684e] opacity-40"></div>
        <h1 className="relative text-white text-2xl sm:text-3xl md:text-4xl font-semibold z-10 px-4 text-shadow-md">
          Kingston Upon Thames
        </h1>
      </div>

      {/* Responsive image gallery */}
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
                    className="w-full h-64 object-cover rounded-md cursor-pointer shadow hover:scale-105 transition-transform duration-200"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      {/* Description */}
      <div className="mx-6 md:mx-32 text-center my-10 text-base md:text-lg text-black rb leading-relaxed">
        <p>
          Based in the Royal Borough of Kingston, it is a Modern Home Oasis,
          renovated by Exclusif Desingz with a focus on minimalism,
          functionality, maximum usage of space and light. The carefully curated
          foyer is both inviting and practical. The minimalistic and uncluttered
          bedrooms allow free movement with subtle artwork and geometric wall
          décor. The home is layered with different types of lighting to create
          a well-balanced appearance, mood and aesthetics. The kitchen is a
          two-tone, sizeable, open-plan dining area with a modern kitchen island
          in a different shade, creating a simple yet striking contrast that is
          hard to family ignore. The two-tone kitchen remains stylishly cohesive
          with compact laminate as a worktop and splash back. The space has its
          aura, with beautiful white flowers as centre pieces. The house has a
          well-thought-of luxury His & Her full bathroom, which is versatile and
          valuable, packing many functions into a relatively small space. A
          black framed shower screen creates a spacious, open-plan walk-in
          shower at the room far end. The oval bathtub with sinuous lines
          recalls naturalistic and sensual elements. The space had double round
          chevron basins with double vanity units, allowing each one to have
          their own space. The beige wall tiles are an excellent backdrop to
          light the whole area. Clean lines and a muted colour palette define
          this modern, understated home, where simplicity meets elegance in
          every corner.
        </p>
      </div>

      {/* Back Button */}
      <div className="flex m:flex-row items-center justify-between gap-4 mb-10 px-6 md:px-40 w-full">
        <Link className="w-full sm:w-auto">
          <button
            disabled
            className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2 cursor-not-allowed"
          >
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p5-bespoke-joinery-projects" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio1;
