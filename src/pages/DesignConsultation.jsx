import React from "react";
import { Link } from "react-router-dom";

const DesignConsultation = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-32">
      <div className="text-center my-4">
        <h1
          className="text-[#b37558] uppercase text-2xl sm:text-3xl md:text-4xl font-semibold inline-block rbs"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          Virtual Consultation
        </h1>
        <div className="mt-4 mx-auto w-24 sm:w-40 md:w-60 border-b border-2 rounded-full border-[#b37558]"></div>
      </div>

      <div className="flex flex-col gap-6 text-start mx-auto mt-8 sm:mt-12 md:mt-16 font-normal text-black text-base sm:text-lg rb">
        <p>
          Anyone in the UK who wants expert guidance for their project without
          project management can use our online interior design consultation
          service.
        </p>
        <p>
          We start the session by talking about your property and your needs. To
          better understand your objectives, we will speak with you and request
          pictures of your area. For a “virtual tour,” it is typically
          recommended to have a video call so that we can inspect your space,
          answer your questions, and make recommendations.
        </p>
        <p>
          We can offer you colour scheme advice if you need help deciding on the
          colour for your walls. Look at any colour palette; hundreds of tones
          are similar. Allow us to assist you and ensure that this is a fun
          experience. Whether you’re looking for task, ambient, or accent
          lighting, we would be pleased to help you make the best decision.
          Appropriate lighting can set the ideal tone in space and is crucial to
          getting the desired outcome.
        </p>
        <p>
          Based on the size of the job, we will then provide you with a mood
          board, plan, and 2D or 3D drawing. Our services for virtual reality
          and realistic imaging are also available to you. Lastly, based on your
          design brief, you will receive a shopping list with links to
          furniture, furnishings, artwork, and artefacts.
        </p>
      </div>

      <div className="my-10 flex items-center justify-center">
        <div className="bg-yellow-100 px-6 sm:px-8 md:px-10 py-3 uppercase rounded-full border border-rose-300">
          <Link to={"/contact"}>
            <button className="text-sm sm:text-2xl font-semibold text-[#b37558] rb">
              Book Your Consultation Now
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DesignConsultation;
