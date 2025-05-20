import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://st.hzcdn.com/fimgs/07114a7f07d95ad9_6206-w312-h312-b0-p0---living-room.jpg",
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/8551bcb507d95ae1_7861-w312-h312-b0-p0---living-room.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/7fe17fe707d95ae9_6089-w312-h312-b0-p0---living-room.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/eea1a21807d95af8_5698-w312-h312-b0-p0---utility-room.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/f9018ef807d95b00_6089-w312-h312-b0-p0---utility-room.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/4aa11eb407d95b06_7879-w312-h312-b0-p0---garage.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
];

const Portfolio16 = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      <div className="text-center my-8 sm:my-12 md:my-16">
        <h1
          className="text-[#b37558] text-3xl sm:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Sutton, London- Contemporary Style Extension & Renovation
        </h1>
      </div>

      <div className="flex flex-col gap-6 text-base sm:text-lg text-black text-center max-w-4xl mx-auto px-4 sm:px-6">
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas, sunt a. Nulla fuga quia odio eligendi dignissimos quos architecto voluptatum labore quasi? Consequuntur, modi blanditiis? At cupiditate nihil laborum tenetur enim. Possimus velit totam at voluptatibus cumque quasi ipsam voluptatem enim assumenda animi sint, vero culpa fuga veniam vitae dolores!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minus ex consequuntur odio quia quo totam provident assumenda deleniti porro ipsam voluptates, blanditiis maiores eius qui voluptatum, et amet ea soluta laudantium. Culpa, velit! Expedita nostrum sit tempore necessitatibus repellendus corrupti dolor quae illum omnis amet dolores quidem veniam, quo voluptas.
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nostrum consequatur asperiores magnam. Voluptates, eligendi quis corrupti voluptatum officia quia! Adipisci quod dolore omnis beatae exercitationem distinctio sit dicta quas, saepe nisi quos quasi sunt, officiis illo expedita, totam harum mollitia? Laborum doloribus ipsum expedita cupiditate architecto, reiciendis perspiciatis earum repudiandae?
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste aperiam autem quia molestiae tempora recusandae, doloribus magnam ex expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error quae repellat.
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

export default Portfolio16;
