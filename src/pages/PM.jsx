import PmImg from "../assets/PM.jpg"

const PM = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[300px] sm:h-[350px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              `url(${PmImg})`,
          }}
        ></div>
        <div className="absolute inset-0 bg-[#a1684e] opacity-60"></div>
        <h1
          className="relative text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold z-10 px-4"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Project Management
        </h1>
      </div>

      {/* Content Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-black text-base sm:text-lg md:text-lg lg:text-xl flex flex-col gap-5 my-10 leading-relaxed">
        <p>
          We efficiently oversee the entire lifecycle of turnkey projects,
          seamlessly navigating from conceptualisation to completion. From
          translating drawings into tangible interior designs to meticulous
          procurement processes, ensure a streamlined and successful project
          delivery.
        </p>
        <p>
          Our in-house team comprises architects, structural engineers,
          builders, and interior designers working collaboratively. This
          cohesive unit ensures seamless coordination, from conceptualising
          designs through structural planning to on-site construction,
          delivering comprehensive solutions for every project.
        </p>
        <p>
          Loft conversions, additions, and complete makeovers are just a few of
          the home project management experiences we have vastly handled. This
          has given us the knowledge to realise any interior design idea you may
          have. Regardless of their complexity, we are prepared to undertake
          various home improvement projects in South London, Surrey.
        </p>
        <p>
          Our hardworking crew of handymen and building contractors ensures
          every task is finished on schedule and within budget. To ensure that
          projects are completed to the highest standards, we source supplies,
          perform routine site visits, give client updates, and deal with
          unforeseen or continuing problems.
        </p>
        <p>
          We schedule weekly progress meetings with our clients to review
          interior design options and material selections to guarantee precise
          and efficient communication.
        </p>
      </div>
    </section>
  );
};

export default PM;
