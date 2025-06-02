import React from "react";

import SalehaImg from "../assets/Saleha.webp";
import Saleha3 from "../assets/Saleha3.jpg"

const About = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-36 py-12">
      <div className="text-center my-16">
        <h1
          className="text-black text-3xl sm:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          About Us
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-10">
        <img
          className="rounded-full w-64 sm:w-80 lg:w-[500px] shadow-[0_10px_25px_rgba(0,0,0,0.5)] object-cover"
          src={Saleha3}
          alt="About Image"
        />

        <div className="flex flex-col gap-4 text-base sm:text-lg text-black rb max-w-2xl">
          <h1 className="text-start font-bold text-[#b37558] text-2xl sm:text-3xl rb">
            Saleha Khan
          </h1>
          <div className="w-20 border-b-2 rounded-full border-[#b37558]"></div>

          <p>
            Your unique love of beauty and the arts{" "}
            <b>are Informants for designing your interiors.</b>
          </p>
          <p>
            Hello, I am Saleha. I’m passionate about creating unique, authentic,
            and personal spaces. The key to my design process is understanding
            the client’s requirements.
          </p>
          <p>
            I believe the space should be personal and functional and reflect
            your lifestyle. I keep your budget and timeline in mind throughout
            the design process. I enjoy getting to know my clients, managing
            their projects efficiently, and designing spaces that are perfect in
            every way.
          </p>
          <p>
            As everything happens for a reason, so was my journey into interior
            design. It all began when I discovered my passion for modern
            interior design while creating captivating spaces in my properties.
            Fuelling this passion, I pursued a professional qualification as an
            interior designer, and here I am, enjoying each bit of my work. My
            design mantra is <i>“fresh, natural, and relatable spaces“.</i>
          </p>
          <p>
            In my spare time, I love reading, bingeing shows on Netflix and
            shopping! The best ideas come to me when my boys are in bed. The two
            factors that boost my productivity are calmness and my love for
            beautiful spaces.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
