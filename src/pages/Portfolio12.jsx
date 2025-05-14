import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/home-design-3-1280x1300.jpg",
    width: 1600,
    height: 1200,
    caption: "Modern",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/1fe1b6bd06c90d4a_0499-w378-h378-b0-p0-contemporary-spaces.webp",
    width: 1600,
    height: 1200,
    caption: "Stylish",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/home-design-2-1280x1300.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish",
  },
];

const Portfolio12 = () => {
  return (
    <section className="px-4 sm:px-8 md:px-12 lg:px-24 py-10">
      <div className="text-center my-10 sm:my-14 md:my-20">
        <h1
          className="text-[#b37558] text-2xl sm:text-3xl md:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Conservatory Croydon
        </h1>
      </div>

      <div className="flex flex-col gap-5 items-center rb text-base sm:text-lg text-black text-center px-4 sm:px-6 md:px-12 lg:px-32">
        <h2 className="rbs text-xl sm:text-2xl md:text-3xl text-black font-semibold">
          Biophilic Conservatory Design: A Harmony of Relaxation and Functionality
        </h2>
        <p>
          This biophilic conservatory design brings the outdoors in, creating a serene retreat
          that balances relaxation with functionality. Inspired by nature, the space is crafted
          to reflect the client’s desire for harmony and versatility.
        </p>
        <p>
          Lush greenery plays a central role, with indoor plants thoughtfully positioned to create
          a natural ambiance. Natural materials like wood, stone, and rattan enhance the organic feel.
        </p>
        <p>
          The conservatory is designed to cater to both relaxation and practical needs. Comfortable
          seating invites leisure, while functional zones like a reading nook or workstation offer
          productivity within calm surroundings.
        </p>
        <p>
          Ample natural light floods the space through large glass panels, highlighting the connection
          between indoor and outdoor living. Earthy tones and textures complete the theme, making the
          conservatory both inviting and versatile.
        </p>
      </div>

      <div className="px-2 sm:px-6 md:px-12 lg:px-28 py-10">
        <Gallery>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
                    className="w-full h-64 sm:h-72 md:h-80 lg:h-96 object-cover rounded-lg cursor-pointer shadow hover:scale-105 transition-transform duration-200"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      <div className="flex justify-center mt-8">
        <Link to="/portfolio">
          <button className="bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold text-sm sm:text-base px-6 py-2 sm:px-8 sm:py-3 transition-all duration-300">
            Go Back
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio12;
