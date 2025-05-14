import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-06-at-01.58.32_af7ad500.jpg",
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-06-at-01.58.32_1111993c.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-06-at-01.58.32_4207f4a0.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-06-at-01.58.32_7a87dd8a.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.28.42-PM-2.jpeg.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.28.42-PM-3.jpeg.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.28.42-PM-4.jpeg.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.28.42-PM-6.jpeg.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.28.42-PM-7.jpeg.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.28.42-PM.jpeg.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.28.43-PM-1.jpeg.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.28.43-PM-2.jpeg.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.28.43-PM-3.jpeg.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.28.43-PM-4.jpeg.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.28.43-PM.jpeg.jpg",
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
          className="text-[#b37558] text-3xl sm:text-4xl md:text-5xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Kitchens
        </h1>
      </div>

      <div className="flex flex-col gap-6 text-base sm:text-lg text-black text-center max-w-4xl mx-auto px-4 sm:px-6">
        <p>
          At our company, we view kitchens as the heart of every home, where
          families gather, memories are made, and culinary adventures unfold.
          Our portfolio showcases kitchens designed to stand the test of time,
          with timeless aesthetics that transcend fleeting trends.
        </p>
        <p>
          In each kitchen, you’ll find elegant handles adorning cabinets and
          drawers, meticulously selected to complement the overall design while
          offering a touch of sophistication.
        </p>
        <p>
          Expert joinery is at the core of our designs, reflecting our
          commitment to craftsmanship and precision. Every cabinet, countertop,
          and fixture is seamlessly integrated, resulting in a space that exudes
          both beauty and functionality.
        </p>
        <p>
          In essence, our kitchens are more than just spaces for cooking;
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

      <Link to="/portfolio" className="flex items-center justify-center mb-10">
        <button className="bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 transition-all duration-300">
          Go Back
        </button>
      </Link>
    </section>
  );
};

export default Portfolio6;
