import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";

import Bathroom1 from "../assets/Bathroom1.jpg";
import Bathroom2 from "../assets/Bathroom2.jpg";
import Bathroom3 from "../assets/Bathroom3.jpg";
import Bathroom4 from "../assets/Bathroom4.jpg";
import Bathroom5 from "../assets/Bathroom5.jpg";
import Bathroom6 from "../assets/Bathroom6.jpg";
import Bathroom7 from "../assets/Bathroom7.jpg";
import Bathroom8 from "../assets/Bathroom8.jpg";
import Bathroom9 from "../assets/Bathroom9.jpg";
import Bathroom10 from "../assets/Bathroom10.jpg";
import Bathroom11 from "../assets/Bathroom11.jpg";
import Bathroom12 from "../assets/Bathroom12.jpg";
import Bathroom13 from "../assets/Bathroom13.jpg";
import Bathroom14 from "../assets/Bathroom14.jpg";
import Bathroom15 from "../assets/Bathroom15.webp";
import Bathroom16 from "../assets/Bathroom16.webp";
import Bathroom17 from "../assets/Bathroom17.webp";
import Bathroom18 from "../assets/Bathroom18.webp";
import Bathroom19 from "../assets/Bathroom19.webp";
import Bathroom20 from "../assets/Bathroom20.webp";
import Bathroom21 from "../assets/Bathroom21.webp";
import Bathroom22 from "../assets/Bathroom22.webp";
import Bathroom23 from "../assets/Bathroom23.webp";
import Bathroom24 from "../assets/Bathroom24.webp";

const bathroomImages = [
  {
    src: Bathroom1,
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
  {
    src: Bathroom2,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom3,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom4,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom5,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom6,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom7,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom8,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom9,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom10,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom11,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom12,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom13,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom14,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom15,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom16,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom17,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom18,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom19,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom20,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom21,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom22,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom23,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: Bathroom24,
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
];

const Bathrooms = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-16 py-8">
      <div className="text-center my-8">
        <h1
          className="text-[#b37558] text-3xl sm:text-4xl font-semibold inline-block rbs"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          Bathrooms
        </h1>
      </div>

      <div className="px-4 sm:px-8 md:px-20 py-10">
        <Gallery>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {bathroomImages.map((img, index) => (
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
    </section>
  );
};

export default Bathrooms;
