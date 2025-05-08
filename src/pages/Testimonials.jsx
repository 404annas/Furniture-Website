import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sarah M.",
    quote:
      "Absolutely stunning designs and excellent project management. My dream space became a reality!",
    description:
      "I had the pleasure of working with this amazing team, and they truly brought my vision to life. Every detail was executed with precision and care.",
  },
  {
    name: "James K.",
    quote:
      "Professional, creative, and reliable. They understood our vision and executed it perfectly.",
    description:
      "The team understood exactly what we needed and delivered it on time. The process was smooth, and the results exceeded our expectations.",
  },
  {
    name: "Priya R.",
    quote:
      "Beautiful results and seamless process. I highly recommend their team!",
    description:
      "From start to finish, the experience was amazing. They delivered high-quality work while keeping me informed every step of the way.",
  },
  {
    name: "Sarah M.",
    quote:
      "Absolutely stunning designs and excellent project management. My dream space became a reality!",
    description:
      "I had the pleasure of working with this amazing team, and they truly brought my vision to life. Every detail was executed with precision and care.",
  },
  {
    name: "James K.",
    quote:
      "Professional, creative, and reliable. They understood our vision and executed it perfectly.",
    description:
      "The team understood exactly what we needed and delivered it on time. The process was smooth, and the results exceeded our expectations.",
  },
  {
    name: "Priya R.",
    quote:
      "Beautiful results and seamless process. I highly recommend their team!",
    description:
      "From start to finish, the experience was amazing. They delivered high-quality work while keeping me informed every step of the way.",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const goToPrevious = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="w-full py-20 bg-gradient-to-b from-[#b37558] to-white">
      <div className="text-center mb-12 px-4">
        <h2 className="text-2xl md:text-3xl uppercase tracking-[0.2em] font-semibold text-white">
          Raving Reviews
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto px-4 relative">
        {/* Arrows */}
        <button
          onClick={goToPrevious}
          className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 text-4xl text-[#b37558] hover:text-white transition z-10"
        >
          &#8592;
        </button>
        <button
          onClick={goToNext}
          className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 text-4xl text-[#b37558] hover:text-white transition z-10"
        >
          &#8594;
        </button>

        {/* Carousel container */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              width: `${testimonials.length * 100}%`,
              transform: `translateX(-${
                (100 / testimonials.length) * currentIndex
              }%)`,
            }}
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="px-4 sm:px-8"
                style={{ width: `${100 / testimonials.length}%` }}
              >
                <div className="bg-white rounded-xl p-6 sm:p-10 shadow-lg h-full flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="text-6xl sm:text-7xl text-[#b37558] leading-none">
                    “
                  </div>
                  <div>
                    <p className="text-base sm:text-lg md:text-xl text-black mb-4 font-medium">
                      {testimonial.quote}
                    </p>
                    <h4 className="text-[#b37558] font-semibold text-base sm:text-lg">
                      {testimonial.name}
                    </h4>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">
                      {testimonial.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-[#b37558]" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
