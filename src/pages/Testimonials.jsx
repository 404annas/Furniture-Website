import React, { useState, useEffect } from "react";

const testimonials = [
  {
    name: "Sameera Dalvi",
    description:
      "As an architect i worked with saleha on one of the interior design project. The outcome was brilliant. Client was very pleased with the results. She is very professional!!",
  },
  {
    name: "Talib",
    description:
      "I would like to express my appreciation for the exceptional interior design services provided by Saleha. Her expertise and attention to detail ensured that my home was designed exactly as I envisioned, with every aspect carefully considered. The final result transformed my space into a beautiful and comfortable place to live. Thank you, Saleha, for your outstanding services in Dubai—your recommendations for each design element were truly valuable!",
  },
  {
    name: "HU-729207861",
    description:
      "Excellent service and wouldn’t hesitate to recommend to my family and friends. I have worked on few of their job as structural engineer and they were great in dealing with client requirements and coordinating the site works with rest of disciplines. I strong recommend them!",
  },
  {
    name: "HU-266002337",
    description:
      "Saleha and her team recently worked on creating the most beautiful wardrobes. They were extremely efficient and the quality of their craftsmanship was exceptional. I would highly recommend Dwell for any type of renovations around the house!",
  },
  {
    name: "Ashley Newman",
    description:
      "Very helpful with great ideas and concepts for our house, we would highly recommend Saleha and her team that worked with us to help design and decorate our new home. From start to finish, took the time to understand what we wanted. She made life easy by project managing and co-ordinating the works. She was always contactable and responsive taking time to answer any questions ans was professional, considerate and reliable. The finished work is great, better than I ever could have managed. I am grateful to Saleha and the team and look forward to working with them again.",
  },
  {
    name: "Moiz Siawala",
    description:
      "Thanks to Saliha and team for understanding our requirements and providing useful insights into what will work and what wont. The planning application process went smoothly and we got approval for everything we required without any issues.",
  },
  {
    name: "HU-901874817",
    description:
      "I wanted to post a review of the decoration project with Dwell Rich( SK). The execution was smooth and timely. I am happy with the final look of the room and corridor. She implemented the project with care and consideration. She managed to find great deals on the accessories and furniture.",
  },
  {
    name: "HU-661104995",
    description:
      "Hi, On a completely different note, I would like to share positive feedback about Saleha's Design Service with the group. I am one of the first in the area to try Saleha for a Reception Room upgrade project. The result has been very amazing and has a huge difference to this space in our room. Like Saleha's bold approach to trying new ideas, understanding clients tastes preferences and bringing it all to fruition. Thank you Saleha! Regards Deepa",
  },
  {
    name: "HU-906191751",
    description:
      "We are delighted that the project can finally get underway. The service provided by  Saleha, Interior designer, invaluable in terms of finding the right interior designer for our project. They were professional, friendly, knowledgable and helpful throughout and we could not recommend them highly enough. Thank you Saleha for understanding the client preferences and bringing it to all fruition.",
  },
  {
    name: "User",
    description:
      "She has been very helpful for kick starting my project with all her services with planning and designing.",
  },
  {
    name: "HU-452831006",
    description:
      "Dwell gave an alternative idea for our kitchen layout, arranged for finalised structural drawings and sent a couple of builders to quote on the work. A calm and helpful process - thank you!",
  },
  {
    name: "HU-298729913",
    description:
      "We did recently wardrobe and double bed work from this company. Suleha recommended Shinda carpenter and he did extremely good quality, strong furniture job with 100% adherance to scheduled time. Highly recommended.",
  },
  {
    name: "HU-623745579",
    description:
      "As a first time buyer, we didn’t have any idea of getting the building work done for an extension and where to start it. But Saleha helped us to understand each step in detail from the rules and regulations, to architecture requirements and the type of construction required in our budget. I would highly recommend their services for anyone in the are of Chessington, Surbiton, Kingston as they can provide a high level of knowledge and a good quality of work.",
  },
  {
    name: "HU-886398553",
    description:
      "Very good service by Saleha and team. Keep it up.",
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
          Testimonials
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
