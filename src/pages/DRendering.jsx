import TwinkinVid from "../assets/TwinkinVid.mp4";

const DRendering = () => {
  return (
    <section className="px-4 sm:px-8 lg:px-16">
      {/* Heading */}
      <div className="text-center my-10 sm:my-16">
        <h1
          className="text-[#b37558] text-3xl sm:text-4xl font-semibold inline-block rbs"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          3D Rendering To Project Delivery
        </h1>
      </div>

      {/* Text and Image */}
      <div className="flex flex-col-reverse lg:flex-row gap-6 my-10">
        <div className="flex-1 text-base sm:text-lg text-black space-y-4">
          <p>
            Our interior design company recently undertook a client reception
            project that exemplified our commitment to integrating client ideas
            and selections into the design process, utilizing 3D rendering to
            visualize the space, and executing the project with meticulous
            attention to detail.
          </p>
          <p>
            • <b>Initial Consultation and Concept Development:</b> We began by
            meeting with the client to discuss their vision for the reception
            area. They expressed a desire for an eclectic space with a touch of
            Indian heritage.
          </p>
          <p>
            • <b>Material Selection and Procurement:</b> With the concept
            approved, we assisted the client in selecting materials, finishes,
            furniture, and decor items that aligned with the design concept and
            budget.
          </p>
          <p>
            • <b>3D Rendering and Visualization:</b> Our design team created
            detailed 3D renderings of the reception area, helping the client
            visualize their space with layout, display units, furniture, and
            décor.
          </p>
          <p>
            • <b>Execution and Project Management:</b> Once approved, we
            executed the work with our skilled team and project management.
          </p>
          <p>
            • <b>Regular Communication and Collaboration:</b> We kept the client
            updated, seeking feedback to ensure their satisfaction.
          </p>
          <p>
            • <b>Quality Assurance and Final Touches:</b> Final adjustments and
            details ensured a space that exceeded expectations.
          </p>
          <p>
            The final result was an eclectic, welcoming space reflecting the
            client’s heritage and giving a positive first impression.
          </p>
        </div>

        <div className="flex-1">
          <img
            className="w-full h-auto rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
            src="https://img.freepik.com/free-photo/high-angle-measuring-tools-desk-still-life_23-2150440927.jpg?ga=GA1.1.1673158750.1693654360&semt=ais_hybrid&w=1100"
            alt="Project"
          />
        </div>
      </div>

      {/* Videos */}
      <div className="flex flex-col md:flex-row gap-6 justify-between items-center my-10">
        <video
          controls
          className="w-full md:w-1/2 lg:w-1/3 h-auto rounded-lg object-cover"
        >
          <source src={TwinkinVid} type="video/mp4" />
        </video>

        <video
          controls
          className="w-full md:w-1/2 lg:w-2/3 h-auto rounded-lg object-cover"
        >
          <source src={TwinkinVid} type="video/mp4" />
        </video>
      </div>
    </section>
  );
};

export default DRendering;
