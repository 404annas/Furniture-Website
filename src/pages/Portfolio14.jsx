import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const images = [
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-33_4-Copy-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-34-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-34_1-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-34_2-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-35-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-35_1-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-35_2-Copy-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-36-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-35_2-Copy-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-36_1-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-36_2-Copy-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-36_3-Copy-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-36_4-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-33_2-Copy-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/PHOTO-2024-11-05-23-42-33_3-650x650.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
];

const Portfolio14 = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-10">
      <div className="text-center my-12 sm:my-16 md:my-20">
        <h1
          className="text-[#b37558] text-2xl sm:text-4xl md:text-5xl font-semibold"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Renovation of a 3-Bedroom Holiday Home
        </h1>
      </div>

      <div className="text-center mx-4 sm:mx-10 lg:mx-20 my-10">
        <h1 className="rbs text-xl sm:text-3xl text-black font-semibold">
          Living Room
        </h1>
        <p className="text-base sm:text-lg mb-4">
          This renovation transformed a dated 3-bedroom property into a stylish,
          welcoming holiday home designed for comfort, relaxation, and memorable
          stays. The interiors featured a harmonious blend of modern aesthetics
          and cozy touches, curated to create a home-away-from-home ambiance.
        </p>

        <h1 className="rbs text-xl sm:text-3xl text-black font-semibold">
          Key Features of the Renovation - Living Space
        </h1>
        <p className="text-base sm:text-lg mb-4">
          Before: A dark, uninspired living area with minimal functionality.
          After: The living room was reimagined with an open-plan design,
          enhancing natural light. Neutral tones on the walls were paired with
          vibrant, interchangeable accents in cushions, throws, and artwork.
        </p>

        <h1 className="rbs text-xl sm:text-3xl text-black font-semibold">
          Kitchen & Dining
        </h1>
        <p className="text-base sm:text-lg mb-4">
          Before: Outdated appliances and limited prep space. After: A fully
          equipped, modern kitchen with high-gloss cabinetry, quartz
          countertops, and energy-efficient appliances.
        </p>

        <h1 className="rbs text-xl sm:text-3xl text-black font-semibold">
          Bedrooms
        </h1>
        <p className="text-base sm:text-lg mb-4">
          Master Bedroom: A serene retreat with a king-sized bed, upholstered
          headboard, and blackout curtains. Soft blues and greys create a
          soothing palette.
        </p>

        <h1 className="rbs text-xl sm:text-3xl text-black font-semibold">
          Bathrooms
        </h1>
        <p className="text-base sm:text-lg mb-4">
          Before: Worn fixtures and poor lighting. After: Luxurious,
          spa-inspired bathrooms featuring premium fixtures and lighting.
        </p>

        <h1 className="rbs text-xl sm:text-3xl text-black font-semibold">
          Additional Touches
        </h1>
        <p className="text-base sm:text-lg mb-4">
          Wi-Fi enabled smart locks for seamless check-ins, wall-mounted art,
          and sustainable, eco-friendly furnishings.
        </p>

        <h1 className="rbs text-xl sm:text-3xl text-black font-semibold">
          Outcome
        </h1>
        <p className="text-base sm:text-lg mb-4">
          The 3-bedroom house now serves as a premium holiday rental with a
          5-star rating potential, delighting guests with its thoughtful design.
        </p>

        <h1 className="rbs text-xl sm:text-3xl text-black font-semibold">
          Photography & Styling
        </h1>
        <p className="text-base sm:text-lg mb-4">
          Professional staging and photography showcase the property’s charm,
          capturing its transformation.
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
                    className="w-full h-64 sm:h-72 md:h-96 object-cover rounded-md cursor-pointer shadow-lg hover:scale-105 transition-transform duration-200"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link to={"/p13-surbiton-project"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p18-bespoke-wardrobe" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio14;
