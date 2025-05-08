import React from "react";

const Lightning = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10">
      {/* Heading */}
      <div className="text-center mb-16">
        <h1
          className="text-[#b37558] text-3xl sm:text-4xl font-semibold inline-block rbs"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          Lightning
        </h1>
        <div className="mt-4 mx-auto w-40 sm:w-60 border-b border rounded-full border-[#b37558]"></div>
        <p className="uppercase tracking-[0.3em] text-[#b37558] mt-4 text-sm sm:text-lg font-semibold">
          Illuminate your space with captivating lighting design
        </p>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 text-black text-base sm:text-lg rb">
        {/* Text */}
        <p className="leading-relaxed text-justify">
          Your space can be perfectly lit to create a perfect mood and
          captivating drama. We work with specialised lighting and automation
          specialists to realise your interior design vision. We have the
          know-how to achieve any ambience or breathtaking light effects you’re
          looking for.
        </p>

        {/* Image */}
        <img
          className="w-full max-w-sm sm:max-w-md lg:max-w-[550px] rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          src="https://designz.dwell-rich.com/wp-content/uploads/2023/09/imageedit_57_7453123947-683x1024.jpg"
          alt="Lightning Design"
        />
      </div>
    </section>
  );
};

export default Lightning;
