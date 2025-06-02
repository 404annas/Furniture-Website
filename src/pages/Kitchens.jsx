import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";

import KitchenMain from "../assets/KitchenMain.webp";
import Kitchen1 from "../assets/Kitchen1.webp";
import Kitchen2 from "../assets/Kitchen2.webp";
import Kitchen3 from "../assets/Kitchen3.webp";
import Kitchen4 from "../assets/Kitchen4.webp";
import Kitchen5 from "../assets/Kitchen5.webp";

import TKitchenMain from "../assets/TKitchenMain.webp";
import TKitchen1 from "../assets/TKitchen1.webp";
import TKitchen2 from "../assets/TKitchen2.webp";
import TKitchen3 from "../assets/TKitchen3.webp";
import TKitchen4 from "../assets/TKitchen4.webp";
import TKitchen5 from "../assets/TKitchen5.webp";

const imageData = [
  {
    src: KitchenMain,
    thumbnail: KitchenMain,
    alt: "Kitchen 1",
  },
  {
    src: Kitchen1,
    thumbnail: Kitchen1,
    alt: "Kitchen 2",
  },
  {
    src: Kitchen2,
    thumbnail: Kitchen2,
    alt: "Kitchen 3",
  },
  {
    src: Kitchen3,
    thumbnail: Kitchen3,
    alt: "Kitchen 4",
  },
  {
    src: Kitchen4,
    thumbnail: Kitchen4,
    alt: "Kitchen 5",
  },
  {
    src: Kitchen5,
    thumbnail: Kitchen5,
    alt: "Kitchen 6",
  },
  {
    src: TKitchenMain,
    thumbnail: TKitchenMain,
    alt: "Kitchen 7",
  },
  {
    src: TKitchen1,
    thumbnail: TKitchen1,
    alt: "Kitchen 8",
  },
  {
    src: TKitchen2,
    thumbnail: TKitchen2,
    alt: "Kitchen 9",
  },
  {
    src: TKitchen3,
    thumbnail: TKitchen3,
    alt: "Kitchen 10",
  },
  {
    src: TKitchen4,
    thumbnail: TKitchen4,
    alt: "Kitchen 10",
  },
  {
    src: TKitchen5,
    thumbnail: TKitchen5,
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
