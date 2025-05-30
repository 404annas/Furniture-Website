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
              "https://img.freepik.com/premium-photo/modern-luxury-bedroom_614034-48056.jpg?ga=GA1.1.1673158750.1693654360&semt=ais_hybrid&w=1300",
              "https://img.freepik.com/free-photo/room-interior-hotel-bedroom_23-2150683419.jpg?ga=GA1.1.1673158750.1693654360&semt=ais_hybrid&w=1100",
              "https://img.freepik.com/free-photo/interior-design-neoclassical-style-with-furnishings-decor_23-2151199315.jpg?ga=GA1.1.1673158750.1693654360&semt=ais_hybrid&w=1300",
              "https://img.freepik.com/free-photo/3d-rendering-beautiful-luxury-bedroom-suite-hotel-with-tv_105762-2301.jpg?ga=GA1.1.1673158750.1693654360&semt=ais_hybrid&w=1100",
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
