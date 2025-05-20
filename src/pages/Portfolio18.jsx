import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://st.hzcdn.com/fimgs/2f8106c306b38c4a_7565-w312-h312-b0-p0---bedroom.jpg",
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/8891992f06b38c4c_2899-w312-h312-b0-p0---wardrobe.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/9c41e65f06b38c4e_2900-w312-h312-b0-p0---bedroom.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/b311f96d06b38c50_7847-w312-h312-b0-p0---home-office.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/7431ef0c06b38c52_2901-w312-h312-b0-p0---garage.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/6e91e40406b38c58_2905-w312-h312-b0-p0---wardrobe.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/f801974e06b38c57_2905-w312-h312-b0-p0---bedroom.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/e501f08f06b38c59_8036-w312-h312-b0-p0---wardrobe.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
  {
    src: "https://st.hzcdn.com/fimgs/9221ec9306b38c55_7565-w312-h312-b0-p0---garage.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
];

const Portfolio18 = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      <div className="text-center my-8 sm:my-12 md:my-16">
        <h1
          className="text-[#b37558] text-3xl sm:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Bespoke Wardrobe study in Wimbledon
        </h1>
      </div>

      <div className="flex flex-col gap-6 text-base sm:text-lg text-black text-center max-w-4xl mx-auto px-4 sm:px-6">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste aperiam autem quia molestiae tempora recusandae, doloribus magnam ex expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error quae repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste aperiam autem quia molestiae tempora recusandae, doloribus magnam ex expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error quae repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae, esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste aperiam autem quia molestiae tempora recusandae, doloribus magnam ex expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error quae repellat.
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

export default Portfolio18;
