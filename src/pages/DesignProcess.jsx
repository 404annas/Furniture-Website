import React from "react";
import { Link } from "react-router-dom";

const DesignProcess = () => {
  return (
    <section>
      <div className="text-center my-6">
        <div className="my-24">
          <h1
            className="text-black text-3xl sm:text-4xl md:text-5xl font-semibold rbs"
            style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            Design Process
          </h1>
          <p
            className="uppercase px-2 text-sm sm:text-xl font-medium my-4 tracking-[0.2em] rb"
            style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
          >
            A place where creativity meets cutting-edge technology
          </p>
        </div>
        <div className="flex flex-col gap-4 text-start px-4 sm:px-8 lg:px-16 mt-12 font-normal text-black text-base sm:text-lg">
          <p>
            We take great satisfaction in offering clients a customised strategy
            that blends their individuality with our knowledge. From conception
            to completion, we effectively manage turnkey projects throughout
            their lifecycle.
          </p>
          <p>
            Using our professional skills and a combination of style,
            practicality, and aesthetics, we will take your design brief and
            produce unique results. Working with such a competent group of
            structural engineers, architects, contractors, and experienced
            tradespeople is an honour. Our teams put in a lot of effort to
            guarantee that every project gets outstanding artistry backed by
            UK-approved warranties and unparalleled design quality. Our
            extensive experience in house project management includes loft
            conversions, additions, and total makeovers.
          </p>
          <p>
            After obtaining your interior design brief, we will provide two
            thorough proposals, including mood boards, layouts, sample boards,
            complete drawings, 2D and 3D representations, and more.
          </p>
          <p>
            We can manage every part of your project, from architectural and
            structural design to construction or renovations, from interior
            design to the selection of soft furnishings and antiquities.
          </p>
          <p>
            From conceptualising designs to structural planning and on-site
            building, this unified team guarantees flawless coordination,
            providing complete solutions for each project. We source supplies,
            visit the site frequently, provide information to the customer, and
            address unforeseen or persistent issues to guarantee that projects
            are finished to the highest standards.
          </p>
          <p>
            To ensure accurate and effective communication, we arrange weekly
            progress meetings with our clients to review interior design ideas
            and material selections.
          </p>
          <p>
            We are ready to take on various home improvement projects in South
            London and Surrey, regardless of their complexity.
          </p>
        </div>
      </div>

      {/* Furniture Section */}
      <div className="bg-[#b37558] h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] px-2 sm:px-0 w-full flex items-center justify-center relative">
        <Link
          to={"/furniture"}
          className="relative shadow-2xl rounded-xl overflow-hidden w-full sm:w-[80%] md:w-[60%] lg:w-[50%]"
        >
          <img
            className="h-[250px] sm:h-[350px] md:h-[400px] w-full object-cover transition-transform duration-300 hover:scale-95 cursor-pointer"
            src="https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?w=700&auto=format&fit=crop&q=120&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZnVybml0dXJlfGVufDB8fDB8fHww"
            alt="Furniture"
          />
          <button className="absolute bottom-4 left-4 bg-white text-[#b37558] font-bold px-4 py-2 rounded shadow rb text-sm">
            Furniture
          </button>
        </Link>
      </div>

      {/* Lighting Section */}
      <div className="bg-white h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] px-2 sm:px-0 w-full flex items-center justify-center relative">
        <Link
          to={"/lightning"}
          className="relative shadow-2xl rounded-xl overflow-hidden w-full sm:w-[80%] md:w-[60%] lg:w-[50%]"
        >
          <img
            className="h-[250px] sm:h-[350px] md:h-[400px] w-full object-cover transition-transform duration-300 hover:scale-95 cursor-pointer"
            src="https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?w=700&auto=format&fit=crop&q=120&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bGFtcHN8ZW58MHx8MHx8fDA%3D"
            alt="Lighting"
          />
          <button className="absolute bottom-4 left-4 bg-white text-[#b37558] font-bold px-4 py-2 rounded shadow rb text-sm">
            Lighting
          </button>
        </Link>
      </div>

      {/* Automation Section */}
      <div className="bg-[#b37558] h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] px-2 sm:px-0 w-full flex items-center justify-center relative">
        <Link
          to={"/automation"}
          className="relative shadow-2xl rounded-xl overflow-hidden w-full sm:w-[80%] md:w-[60%] lg:w-[50%]"
        >
          <img
            className="h-[250px] sm:h-[340px] md:h-[400px] w-full object-cover transition-transform duration-300 hover:scale-95 cursor-pointer"
            src="https://plus.unsplash.com/premium_photo-1677094310899-02303289cadf?w=700&auto=format&fit=crop&q=120&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YXV0b21hdGlvbnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Automation"
          />
          <button className="absolute bottom-4 left-4 bg-white text-[#b37558] font-bold px-4 py-2 rounded shadow rb text-sm">
            Automation
          </button>
        </Link>
      </div>
    </section>
  );
};

export default DesignProcess;
