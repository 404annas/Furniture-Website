import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import "photoswipe/style.css";
import { Link } from "react-router-dom";

const images = [
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Modern Kitchen",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Stylish Living Room",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.43-PM-1.jpeg",
    width: 1600,
    height: 1200,
    caption: "Luxury Bathroom",
  },
  // Add more images here later
];

const Portfolio1 = () => {
  return (
    <section>
      {/* Header with background */}
      <div className="relative h-[350px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://designz.dwell-rich.com/wp-content/uploads/2023/08/WhatsApp-Image-2023-08-22-at-4.06.45-PM-1.jpeg')",
          }}
        />
        <div className="absolute inset-0 bg-[#a1684e] opacity-40"></div>
        <h1 className="relative text-white text-2xl sm:text-3xl md:text-4xl font-semibold z-10 px-4 text-shadow-md">
          Kingston Upon Thames
        </h1>
      </div>

      {/* Responsive image gallery */}
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
                    className="w-full h-64 object-cover rounded-md cursor-pointer shadow hover:scale-105 transition-transform duration-200"
                  />
                )}
              </Item>
            ))}
          </div>
        </Gallery>
      </div>

      {/* Description */}
      <div className="mx-6 md:mx-32 text-center my-10 text-base md:text-lg text-gray-800 leading-relaxed">
        <p>
          Based in the Royal Borough of Kingston, it is a Modern Home Oasis,
          renovated by Exclusif Desingz with a focus on minimalism,
          functionality, maximum usage of space and light. The carefully curated
          foyer is both inviting and practical. The minimalistic and uncluttered
          bedrooms allow free movement with subtle artwork and geometric wall
          décor. The home is layered with different types of lighting to create
          a well-balanced appearance, mood and aesthetics. The kitchen is a
          two-tone, sizeable, open-plan dining area with a modern kitchen island
          in a different shade, creating a simple yet striking contrast that is
          hard to family ignore. The two-tone kitchen remains stylishly cohesive
          with compact laminate as a worktop and splash back. The space has its
          aura, with beautiful white flowers as centre pieces. The house has a
          well-thought-of luxury His & Her full bathroom, which is versatile and
          valuable, packing many functions into a relatively small space. A
          black framed shower screen creates a spacious, open-plan walk-in
          shower at the room far end. The oval bathtub with sinuous lines
          recalls naturalistic and sensual elements. The space had double round
          chevron basins with double vanity units, allowing each one to have
          their own space. The beige wall tiles are an excellent backdrop to
          light the whole area. Clean lines and a muted colour palette define
          this modern, understated home, where simplicity meets elegance in
          every corner.
        </p>
      </div>

      {/* Back Button */}
      <Link to="/portfolio" className="flex items-center justify-center mb-10">
        <button className="bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
          Go Back
        </button>
      </Link>
    </section>
  );
};

export default Portfolio1;
