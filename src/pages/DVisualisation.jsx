import React from "react";

const DVisualisation = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-12">
      <div className="text-center my-10 sm:my-14">
        <h1
          className="text-[#b37558] uppercase text-2xl sm:text-3xl md:text-4xl font-semibold inline-block rbs"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          3D Visualization
        </h1>
        <p className="text-[#b37558] rb text-left mt-6 sm:mt-10 text-base sm:text-lg max-w-4xl mx-auto">
          With advanced 3D modelling capabilities at EXCLUSIF Designz, you can
          now visualise the proposed interior design in stunning detail. This
          interactive experience allows you to actively participate in the
          creative process by suggesting modifications, ensuring that the final
          result perfectly aligns with your unique preferences. The software
          allows you to explore flooring options and adjust lighting fixtures
          and design. You can experience how your space will look with different
          paint colours and wall finishes. Once selected, you can select the
          furniture and decor ideas based on what seems to match your
          requirements.
        </p>
      </div>

      <div className="overflow-hidden my-10">
        <div className="flex w-max animate-scroll gap-4">
          {[...Array(2)].flatMap(() =>
            [
              "https://designz.dwell-rich.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-17-at-9.42.48-AM.jpeg",
              "https://designz.dwell-rich.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-17-at-9.43.01-AM.jpeg",
              "https://designz.dwell-rich.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-17-at-9.42.18-AM.jpeg",
              "https://designz.dwell-rich.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-17-at-9.42.26-AM.jpeg",
            ].map((src, idx) => (
              <img
                key={idx + Math.random()}
                src={src}
                alt=""
                className="w-64 sm:w-72 md:w-80 h-48 sm:h-56 md:h-64 object-cover rounded"
              />
            ))
          )}
        </div>
      </div>
    </section>
  );
};

export default DVisualisation;
