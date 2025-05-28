import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const images = [
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.29.11-PM-5.jpeg-1.jpg",
    width: 1600,
    height: 1200,
    caption: "Modern ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.29.11-PM-3.jpeg-1.jpg",
    width: 1600,
    height: 1200,
    caption: "Stylish ",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.29.11-PM-2.jpeg-1.jpg",
    width: 1600,
    height: 1200,
    caption: "Luxury ",
  },
];

const Portfolio7 = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 max-w-screen-xl mx-auto">
      <div className="text-center mb-10 sm:mb-14">
        <h1
          className="text-[#b37558] text-2xl sm:text-3xl md:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Garden Design – Kingston
        </h1>
      </div>

      <div className="flex flex-col gap-6 text-base sm:text-lg text-black text-center max-w-4xl mx-auto px-4 sm:px-6">
        <p>
          In this beautifully designed garden, we’ve created a seamless blend of
          functionality and style that turns the outdoor space into a relaxing
          retreat while offering ample space for family activities. The focal
          point is the 6×2 meter patio, elegantly covered in patterned tiles.
          These tiles, featuring geometric shapes or intricate patterns, bring a
          stylish, modern touch to the garden. The same patterned tile design
          flows throughout the entire outdoor space, creating a visual pathway
          that guides you through the garden and provides a cohesive, polished
          look.
        </p>
        <p>
          Adjacent to the patio, lush green turf is laid out, providing an
          inviting area for lounging or entertaining guests. Flanking the turf
          are designated planting areas, filled with a mix of vibrant shrubs,
          ornamental grasses, and flowering plants that add colour and texture,
          giving the garden a natural, serene atmosphere. The plants are
          carefully selected to complement the space, ensuring year-round
          interest and greenery.
        </p>
        <p>
          The kids’ play area is designed with artificial grass, ensuring safety
          and comfort while being easy to maintain. This section blends
          effortlessly with the rest of the garden, providing a soft, playful
          surface for children to enjoy.
        </p>
        <p>
          Throughout the garden, we’ve installed LED solar lights that line the
          perimeter, enhancing the space with subtle illumination in the
          evening. These lights are thoughtfully placed along walkways, around
          the patio, and nestled within the planting areas, offering a magical,
          ambient glow that makes the garden feel warm and welcoming after dark.
        </p>
        <p>
          For outdoor relaxation, a cosy metallic outdoor sofa is positioned on
          the patio. This sleek, weather-resistant sofa is adorned with plush
          cushions in soft, neutral tones, making it the perfect spot for
          lounging in style. Above the seating area, a large canopy provides
          shade and protection from the elements, creating a comfortable outdoor
          living space even on hot or rainy days. To enhance the relaxation
          area, a comfortable reclining chair is placed nearby, offering the
          perfect spot for reading, sunbathing, or simply unwinding.{" "}
        </p>
        <p>
          The combination of patterned tiles, lush planting, comfortable
          seating, and soft lighting transforms the garden into a versatile
          space. It balances a sophisticated modern aesthetic with practical
          features for family enjoyment, making it a tranquil yet functional
          outdoor oasis for both adults and children.
        </p>
      </div>

      <div className="px-2 sm:px-4 md:px-6 lg:px-10 mb-12">
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
                    className="w-full h-64 object-cover rounded-md cursor-pointer shadow-md hover:scale-105 transition-transform duration-200"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
              <Link to={"/p4-gilded-elegance-passage"} className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
                  <HiArrowLeft />
                  Previous
                </button>
              </Link>
      
              <Link className="w-full sm:w-auto">
                <button disabled className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2 cursor-not-allowed">
                  Next
                  <HiArrowRight />
                </button>
              </Link>
            </div>
    </section>
  );
};

export default Portfolio7;
