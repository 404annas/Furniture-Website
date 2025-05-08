import React from "react";

const Automation = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-28 py-10">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1
          className="text-[#b37558] text-2xl sm:text-3xl lg:text-4xl font-semibold inline-block rbs"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          Home Automation & Green Technology
        </h1>
      </div>

      {/* Content Section */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10 my-12">
        {/* Text Block */}
        <div className="flex flex-col gap-4 text-base sm:text-lg text-black rb text-justify">
          <p>
            With the help of our knowledgeable and talented team of technicians,
            you can bring your house up to date with the newest automation
            features and welcome the 21st century. We provide various options
            customised to your preferences, including voice-activated
            appliances, electric blinds, mood and strip lighting, energy-saving
            sensors, and more. For example, you can instantly change the colour
            schemes for interiors and adjust the lighting with a remote
            controller. These devices make your life easier and enhance your
            Interior design style.
          </p>
          <p className="font-semibold">
            Net-zero Emission Eco-Friendly Homes Are the Way of The Future.
          </p>
          <p>
            To install solar on your property, we work with partner companies.
            These companies offer solar kits perfect for slate rooftops,
            concrete rooftops, and newly constructed properties with integrated
            roof tile kits. These cutting-edge solar kits provide the industry’s
            best warranties and exceptional low-light performance to guarantee
            maximum generation year-round.
          </p>
          <p>
            We now present infrared technology, which is the low-emission home
            heating solution of the future. It is stylish, modern, and energy
            efficient.
          </p>
        </div>

        {/* Image */}
        <img
          className="w-full max-w-sm sm:max-w-md lg:max-w-[550px] rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          src="https://designz.dwell-rich.com/wp-content/uploads/2023/08/Home-automation-681x1024.jpg"
          alt="Home Automation"
        />
      </div>

      {/* Bottom Section */}
      <div className="my-12">
        <h2
          className="text-center text-[#b37558] text-2xl sm:text-3xl font-semibold rbs"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          The Future Is Net Zero Emission Eco-Friendly Homes.
        </h2>
        <p className="my-4 text-base sm:text-lg text-black rb text-justify">
          We collaborate with partner companies to put solar on your property,
          which include solar kits ideal for slate rooftops, concrete rooftops,
          and new build properties with integrated roof tile kits. These
          state-of-the-art solar kits come with excellent low-light performance
          to ensure optimum generation all year round and the best warranties in
          the sector.
        </p>
        <p className="my-4 text-base sm:text-lg text-black rb text-justify">
          Stylish, contemporary and energy efficient, infrared technology is the
          future of low emission home heating which we now present.
        </p>
      </div>
    </section>
  );
};

export default Automation;
