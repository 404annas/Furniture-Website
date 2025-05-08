import React from "react";
import { FaHome, FaBuilding, FaBriefcase, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import Testimonials from "./Testimonials";

const Home = () => {
  const baseItems = [
    {
      icon: <FaHome className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      label: "Project Management",
    },
    {
      icon: <FaBuilding className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      label: "Residential Project",
    },
    {
      icon: <FaBriefcase className="w-6 h-6 sm:w-8 sm:h-8 text-white" />,
      label: "Commercial Project",
    },
  ];

  const items = [...baseItems, ...baseItems, ...baseItems];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://designz.dwell-rich.com/wp-content/uploads/2023/08/home.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-[#b37558] bg-opacity-30"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-[90vh] text-white text-center px-4">
          <h1
            className="text-3xl sm:text-4xl md:text-5xl font-semibold mb-6"
            style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Shaping your Signature Look
          </h1>
          <Link to="/style">
            <button className="bg-[#b37558] text-white text-sm sm:text-base md:text-lg hover:scale-95 font-semibold px-6 sm:px-10 py-2 sm:py-3 rounded-full hover:bg-white hover:text-black transition uppercase tracking-widest">
              Check Your Style
            </button>
          </Link>
        </div>
      </div>

      {/* Scrolling Icons Section */}
      <div className="relative bg-[#b37558] py-8 sm:py-10 overflow-hidden">
        <div className="animate-scroll flex w-max">
          {items.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 pr-6 sm:pr-10 border-r border-white/40 min-w-[250px] sm:min-w-[300px] px-4 sm:px-6"
            >
              {item.icon}
              <p className="text-white text-base sm:text-lg font-semibold whitespace-nowrap">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Welcome Section with Cards */}
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-16">
        <h1 className="uppercase tracking-[0.2em] text-center rb text-lg sm:text-xl font-semibold">
          Welcome to our Website
        </h1>
        <p className="rbs text-[#b37558] text-center text-xl sm:text-2xl py-8 sm:py-10">
          Fusing groundbreaking design with cutting-edge tech solutions
        </p>

        <div className="shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Card 1 */}
            <div className="flex flex-col">
              <div className="p-4 bg-white text-black h-72 border-2 border-[#b37558] text-center hover:bg-[#b37558]/90 transition">
                <h2 className="text-lg sm:text-xl font-bold mb-2 rbs py-2">
                  Trade Discounts
                </h2>
                <p className="rb text-md sm:text-lg font-medium text-black">
                  Revolutionize your savings! Trade discounts that redefine
                  convenience—more time, more money, all for you!
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1567016432779-094069958ea5?w=500&auto=format&fit=crop&q=60"
                alt="Furniture 1"
                className="w-full h-60 sm:h-72 object-cover"
              />
            </div>

            {/* Card 2 */}
            <div className="flex flex-col-reverse">
              <div className="p-4 bg-white text-black h-72 border-2 border-[#b37558] text-center hover:bg-[#b37558]/90 transition">
                <h2 className="text-lg sm:text-xl font-bold mb-2 rbs py-2">
                  Client-Centric Approach
                </h2>
                <p className="rb text-md sm:text-lg font-medium text-black">
                  Experience design with a personal touch! Your dreams, our
                  blueprint—unleashing home décor excellence just for you!
                </p>
              </div>
              <img
                src="https://plus.unsplash.com/premium_photo-1683133939183-edd5476e6200?w=500&auto=format&fit=crop&q=60"
                alt="Furniture 2"
                className="w-full h-60 sm:h-72 object-cover"
              />
            </div>

            {/* Card 3 */}
            <div className="flex flex-col">
              <div className="p-4 bg-white text-black h-72 border-2 border-[#b37558] text-center hover:bg-[#b37558]/90 transition">
                <h2 className="text-lg sm:text-xl font-bold mb-2 rbs py-2">
                  Environmental Responsibility
                </h2>
                <p className="rb text-md sm:text-lg font-medium text-black">
                  Eco-chic transformations await! Dive into sustainable style
                  with our budget-friendly, energy-smart designs!
                </p>
              </div>
              <img
                src="https://plus.unsplash.com/premium_photo-1672166939372-5b16118eee45?w=500&auto=format&fit=crop&q=60"
                alt="Furniture 3"
                className="w-full h-60 sm:h-72 object-cover"
              />
            </div>

            {/* Card 4 */}
            <div className="flex flex-col-reverse">
              <div className="p-4 bg-white text-black h-72 border-2 border-[#b37558] text-center hover:bg-[#b37558]/90 transition">
                <h2 className="text-lg sm:text-xl font-bold mb-2 rbs py-2">
                  Attention to detail
                </h2>
                <p className="rb text-md sm:text-lg font-medium text-black">
                  Crafting perfection in every detail! From space wizardry to
                  color mastery and texture symphonies—immerse yourself in
                  spaces where harmony meets sophistication!
                </p>
              </div>
              <img
                src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format&fit=crop&q=60"
                alt="Furniture 4"
                className="w-full h-60 sm:h-72 object-cover"
              />
            </div>
          </div>
        </div>

        {/* Free Consultation Button */}
        <div className="flex items-center justify-center pt-12 sm:pt-16">
          <Link to={"/contact"}>
            <button className="bg-[#b37558] px-8 py-3 text-white text-md sm:text-lg font-semibold rounded-full hover:bg-black transition-all uppercase tracking-widest">
              Free Consultation
            </button>
          </Link>
        </div>
      </div>

      {/* New Section: Transparent Cards on Background Image */}
      <div
        className="relative bg-cover bg-center py-20"
        style={{
          backgroundImage:
            "url('https://designz.dwell-rich.com/wp-content/uploads/2023/07/9_Contact_Hotel-Hero.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-white/20"></div>
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Card 1 */}
          <div className="bg-white border-2 border-[#b37558] p-6 shadow-lg text-center transition hover:scale-105 duration-300 rounded-xl">
            <h2 className="text-2xl font-bold rbs text-black mb-4 uppercase">
              Design process
            </h2>
            <p className="rb text-black text-base sm:text-lg">
              We will take your design brief and deliver excellence by combining
              functionality, style, and aesthetics with our professional
              expertise. We are honoured to work with such a talented group of
              architects, structural engineers, contractors, and skilled
              tradespeople.
            </p>
            <div className="pt-10 flex items-center justify-center">
              <Link to={"/design-process"}>
                <button className="px-6 sm:px-10 py-3 bg-white rounded-full border-2 border-black hover:bg-yellow-100 rb hover:-translate-y-2 sm:hover:-translate-y-5 transition-all duration-300 flex items-center gap-2 text-sm sm:text-base">
                  View More <FaArrowRight className="inline-block" />
                </button>
              </Link>
            </div>
          </div>

          {/* Card 2 */}
          <img
            className="w-full h-auto object-cover rounded-xl"
            src="https://designz.dwell-rich.com/wp-content/uploads/2023/08/design-process-1-768x378.jpg"
            alt="Design process"
          />
        </div>

        <div className="flex items-center justify-center pt-8 w-full px-4">
          <Link to={"/contact"}>
            <button className="bg-[#b37558] px-6 sm:px-10 py-3 uppercase hover:bg-yellow-100 hover:-translate-y-2 sm:hover:-translate-y-5 transition-all duration-300 rounded-full rb text-base sm:text-xl text-white hover:text-black tracking-widest cursor-pointer text-center">
              Book Free Design & Consultation
            </button>
          </Link>
        </div>
      </div>

      {/* Background Image with Cards at Bottom */}
      <div
        className="relative bg-cover bg-center min-h-screen flex flex-col items-center justify-start px-4 py-10"
        style={{
          backgroundImage:
            "url('https://designz.dwell-rich.com/wp-content/uploads/2023/08/Mid-century-modern.jpg')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-20"></div>

        <div className="relative z-10 w-full max-w-screen-xl flex flex-col gap-10">
          {/* Card 1 */}
          <div className="bg-[#b37558] flex flex-col md:flex-row items-center justify-between text-white px-4 sm:px-6 py-8 rounded-xl shadow-2xl mx-0 sm:mx-4 md:mx-10">
            <div className="flex flex-col gap-4 w-full md:w-1/2 ml-0 md:ml-10">
              <h3 className="text-3xl sm:text-4xl font-bold rbs">Joinery</h3>
              <div className="border-2 border-white rounded-full w-10 sm:w-12"></div>
              <p className="rb text-base sm:text-lg leading-relaxed">
                We take great satisfaction in offering outstanding joinery
                services to go along with our excellent interior design
                solutions. With a committed team of talented artisans and
                craftsmen, we specialise in making custom furniture and fixtures
                that improve the appearance and usability of your living or work
                areas. Because we customise each piece to your vision and
                preferences, our joinery services go above and beyond the
                standard. Custom doors, unique shelving units, or bespoke
                cabinets—all are expertly crafted with an eye towards detail to
                ensure they blend seamlessly with your interior design concept.
              </p>
            </div>
            <img
              className="w-full max-w-xs sm:max-w-sm md:w-[300px] mt-6 md:mt-0 md:ml-6 rounded-lg mr-0 md:mr-10 shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:scale-95 transition-all duration-300"
              src="https://designz.dwell-rich.com/wp-content/uploads/2023/08/Joinery-708x1024.jpg"
              alt="Joinery"
            />
          </div>

          {/* Card 2 */}
          <div className="bg-white flex flex-col md:flex-row-reverse items-center justify-between text-black px-4 sm:px-6 py-8 rounded-xl shadow-2xl mx-0 sm:mx-4 md:mx-10">
            <div className="flex flex-col gap-4 w-full md:w-1/2 ml-0 md:ml-10">
              <h3 className="text-3xl sm:text-4xl font-bold rbs">Bathroom</h3>
              <div className="border-2 border-black rounded-full w-10 sm:w-12"></div>
              <p className="rb text-base sm:text-lg leading-relaxed">
                You can enter the realm of opulent relaxation with our custom
                bathroom interior solutions. Our team of professionals will
                collaborate closely with you to comprehend your needs and
                preferences, regardless of whether you’re looking for a sleek,
                contemporary design or a tranquil, spa-like ambiance...
              </p>
            </div>
            <img
              className="w-full max-w-xs sm:max-w-sm md:w-[500px] mt-6 md:mt-0 md:mr-10 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:scale-95 transition-all duration-300"
              src="https://designz.dwell-rich.com/wp-content/uploads/2023/08/Bathroom-768x512.jpg"
              alt="Bathroom"
            />
          </div>

          {/* Card 3 */}
          {/* Kitchens Section */}
          <div className="bg-[#b37558] flex flex-col md:flex-row items-center justify-between text-white px-4 sm:px-6 py-8 rounded-xl shadow-2xl mx-0 sm:mx-4 md:mx-10">
            <div className="flex flex-col gap-4 w-full md:w-1/2 md:ml-10">
              <h3 className="text-2xl sm:text-3xl font-bold rbs">Kitchens</h3>
              <div className="border-2 border-white rounded-full w-8 sm:w-12"></div>
              <p className="rb text-base sm:text-lg leading-relaxed">
                Your culinary adventures will be enhanced by our finely designed
                kitchen interiors. Every home’s kitchen is its heart, and our
                designs are no different. We combine style and functionality to
                create visually stunning and useful kitchens. Our team creates
                custom cabinets, countertops, and appliances based on your
                unique lifestyle and culinary requirements by utilising the
                newest trends and state-of-the-art innovations.
              </p>
              <Link to={"/kitchens"}>
                <button className="uppercase rb text-sm sm:text-lg tracking-widest font-semibold bg-white px-6 sm:px-10 py-3 rounded-full text-black hover:bg-yellow-100 hover:-translate-y-2 transition-all duration-300 mt-4 sm:mt-6 w-fit">
                  Show More
                </button>
              </Link>
            </div>
            <img
              className="w-full max-w-xs sm:max-w-sm md:w-[400px] mt-6 md:mt-0 md:ml-6 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:scale-95 transition-all duration-300"
              src="https://designz.dwell-rich.com/wp-content/uploads/2023/11/WhatsApp-Image-2023-11-29-at-12.16.52-AM-768x961.jpeg"
              alt="Kitchens"
            />
          </div>

          {/* 3D Visualisation Section */}
          <Link
            to={"/d-visualisation"}
            className="relative block bg-white px-4 sm:px-6 py-8 rounded-xl shadow-2xl mx-4 md:mx-10 mt-10"
          >
            <div className="relative">
              <img
                className="w-full h-[300px] sm:h-[400px] md:h-[500px] object-cover rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)] hover:scale-95 transition-all duration-300"
                src="https://designz.dwell-rich.com/wp-content/uploads/2023/09/WhatsApp-Image-2023-09-17-at-9.42.18-AM.jpeg"
                alt="3D Visualisation"
              />
              <div className="absolute bottom-6 sm:bottom-10 left-6 sm:left-10 border-2 border-white text-white font-bold px-4 py-2 rounded shadow rbs text-sm sm:text-lg bg-black/40 backdrop-blur-sm">
                3D Visualisation
              </div>
            </div>
          </Link>
        </div>
      </div>

      <Testimonials />
    </div>
  );
};

export default Home;
