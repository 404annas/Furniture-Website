import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const images = [
  {
    src: "https://st.hzcdn.com/fimgs/eef1ac5a06ab9e45_3260-w312-h312-b0-p0---wine-cellar.jpg",
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
];

const Portfolio17 = () => {
  return (
    <section className="px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      <div className="text-center my-8 sm:my-12 md:my-16">
        <h1
          className="text-[#b37558] text-3xl sm:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Wine cellar in Leatherhead
        </h1>
      </div>

      <div className="flex flex-col gap-6 text-base sm:text-lg text-black text-center max-w-4xl mx-auto px-4 sm:px-6">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste
          aperiam autem quia molestiae tempora recusandae, doloribus magnam ex
          expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in
          voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error
          quae repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste
          aperiam autem quia molestiae tempora recusandae, doloribus magnam ex
          expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in
          voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error
          quae repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste
          aperiam autem quia molestiae tempora recusandae, doloribus magnam ex
          expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in
          voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error
          quae repellat.
        </p>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae,
          esse voluptatum. Nesciunt dolorum unde, earum vel, architecto iste
          aperiam autem quia molestiae tempora recusandae, doloribus magnam ex
          expedita ullam quis. Ipsa aliquam saepe nulla maxime magni dolor in
          voluptas illo vitae explicabo fuga dignissimos cumque, rerum rem error
          quae repellat.
        </p>
      </div>

      <div className="px-4 sm:px-8 md:px-20 py-10">
        <Gallery>
          <div className="grid grid-cols-1">
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
                    className="w-full h-[500px] object-fit rounded-md cursor-pointer shadow hover:scale-105 transition-transform duration-200"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link to={"/p18-bespoke-wardrobe"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link
          to="/p2-biophilic-oasis-conservatory"
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio17;
