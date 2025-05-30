import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import Biblophic from "../assets/Biblophic.webp";

const Portfolio2 = () => {
  return (
    <section>
      <div className="relative h-[350px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-bottom"
          style={{
            backgroundImage: `url(${Biblophic})`,
          }}
        />
        <div className="absolute inset-0 bg-[#a1684e] opacity-40"></div>
        <h1 className="relative text-white text-2xl sm:text-3xl md:text-4xl font-semibold z-10 px-4 text-shadow-md">
          Biophilic Oasis Conservatory.
        </h1>
      </div>

      {/* <div className="w-full px-4 sm:px-6 md:px-10 my-10">
        <video
          controls
          className="w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] rounded-lg object-cover mb-12"
        >
          <source
            src="https://designz.dwell-rich.com/wp-content/uploads/2023/11/3361b987-efef-4796-afa3-a0b10aa8a284.mp4"
            type="video/mp4"
          />
        </video>
      </div> */}

      <div className="flex flex-col gap-6 text-base sm:text-lg text-black text-center max-w-5xl mx-auto px-4 mt-4 sm:px-6 mb-10">
        <p>
          An Edwardian house in South Croydon, which is a suburban area in the
          London Borough of Croydon, with a Conservatory with large windows on
          all three sides, creating a bright and airy space, allowing an
          abundance of natural light to flood the interior and providing
          panoramic views of the surrounding environment.
        </p>
        <p>
          The Conservatory is designed to integrate natural elements and modern
          lounge furniture to create a sanctuary-like space.
        </p>
        <p>
          Stepping into this biophilic-inspired interior, your gaze is
          immediately captured by a floor-to-ceiling wardrobe adorned with
          wood-coloured slat panels. This elegant storage solution integrates
          with the biophilic design, creating a harmonious and nature-infused
          retreat. The slat panels of the cabinet mirror the organic warmth
          found in nature.
        </p>
        <p>
          Approaching the wardrobe becomes a sensory experience as the LED
          lights gently brighten upon touch or motion, providing a subtle yet
          immersive interaction. This feature not only enhances the practicality
          of the wardrobe but also adds an element of enchantment to the
          biophilic atmosphere.
        </p>
        <p>
          The lounge furniture is meticulously chosen to complement the natural
          surroundings in the heart of a biophilic conservatory, where the
          boundaries between indoors and outdoors blur. This space is a seamless
          blend of comfort, functionality, and the calming embrace of nature.
        </p>
        <p>
          A Japandi-inspired chair takes centre stage, blending the clean lines
          of Japanese design with the warmth of Scandinavian minimalism. Beneath
          the furniture, a plush jute rug sprawls across the floor, introducing
          a grounding texture reminiscent of natural landscapes.
        </p>
        <p>
          Suspended from above are intricately woven rattan pendant lights; when
          illuminated, these lights cast a warm and gentle glow, mimicking the
          filtered sunlight streaming through a forest canopy. The rattan
          material introduces a touch of nature into the lighting fixtures,
          creating a play of shadows that dance across the Conservatory.
        </p>
        <p>
          Potted plants and verdant foliage are strategically placed, their
          presence softening the lines of the furniture and infusing the space
          with life.
        </p>
        <p>
          The Conservatory’s expansive floor-to-ceiling windows allow abundant
          natural light to filter through, enhancing the biophilic experience.
          The interplay of sunlight and shadows creates a dynamic atmosphere,
          accentuating the textures of the wood, jute, and rattan throughout the
          space.
        </p>
      </div>

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link to={"/p17-wine-cellar"} className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p3-collaborative-hub" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio2;
