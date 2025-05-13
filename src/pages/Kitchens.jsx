import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";

const imageData = [
  {
    src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=500",
    alt: "Kitchen 1",
  },
  {
    src: "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?w=500",
    alt: "Kitchen 2",
  },
  {
    src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?w=500",
    alt: "Kitchen 3",
  },
  {
    src: "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1622372738946-62e02505feb3?w=500",
    alt: "Kitchen 4",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661962720375-ce9097fb4d69?w=1200",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661962720375-ce9097fb4d69?w=500",
    alt: "Kitchen 5",
  },
  {
    src: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=500",
    alt: "Kitchen 6",
  },
  {
    src: "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1556910096-6f5e72db6803?w=500",
    alt: "Kitchen 7",
  },
  {
    src: "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1588854337236-6889d631faa8?w=500",
    alt: "Kitchen 8",
  },
  {
    src: "https://plus.unsplash.com/premium_photo-1661317296820-16fd638ee06f?w=1200",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661317296820-16fd638ee06f?w=500",
    alt: "Kitchen 9",
  },
  {
    src: "https://images.unsplash.com/photo-1600684388091-627109f3cd60?w=1200",
    thumbnail:
      "https://images.unsplash.com/photo-1600684388091-627109f3cd60?w=500",
    alt: "Kitchen 10",
  },
];

const Kitchens = () => {
  return (
    <section>
      <div className="text-center my-24">
        <h1
          className="text-[#b37558] text-3xl md:text-4xl font-semibold inline-block rbs"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          Kitchens
        </h1>
      </div>

      <div className="flex flex-col gap-4 text-start mx-4 sm:mx-12 md:mx-36 mt-12 font-normal text-black text-base sm:text-lg rb">
        <p>
          At our company, we view kitchens as the heart of every home, where
          families gather, memories are made, and culinary adventures unfold.
          Our portfolio showcases kitchens designed to stand the test of time,
          with timeless aesthetics that transcend fleeting trends.
        </p>
        <p>
          In each kitchen, you’ll find elegant handles adorning cabinets and
          drawers, meticulously selected to complement the overall design while
          offering a touch of sophistication. Crafted from high-quality
          materials, these handles not only add visual appeal but also ensure
          durability and functionality for years to come.
        </p>
        <p>
          Expert joinery is at the core of our designs, reflecting our
          commitment to craftsmanship and precision. Every cabinet, countertop,
          and fixture is seamlessly integrated, resulting in a space that exudes
          both beauty and functionality. As for color, we believe in the power
          of versatility and personalization. Whether it’s a classic white
          kitchen that exudes freshness and purity, a warm and inviting shade of
          beige that creates a cozy ambiance, or a bold statement color like
          deep navy blue for a touch of modern elegance, our portfolio offers a
          spectrum of options to suit every taste and style.
        </p>
        <p>
          In essence, our kitchens are more than just spaces for cooking;
          they’re sanctuaries where families come together, where design meets
          functionality, and where every detail is thoughtfully considered to
          create a truly exceptional living experience.
        </p>
      </div>

      <Gallery>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-16 my-12 cursor-pointer">
          {imageData.map((img, index) => (
            <Item
              key={index}
              original={img.src}
              thumbnail={img.thumbnail}
              width="1200"
              height="800"
              title={img.alt}
            >
              {({ ref, open }) => (
                <img
                  ref={ref}
                  onClick={open}
                  src={img.thumbnail}
                  alt={img.alt}
                  className="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg transition-opacity duration-300 hover:opacity-80"
                />
              )}
            </Item>
          ))}
        </div>
      </Gallery>
    </section>
  );
};

export default Kitchens;
