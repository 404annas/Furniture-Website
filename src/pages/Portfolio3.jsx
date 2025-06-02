import { Link } from "react-router-dom";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
import CollaborativeHubImg from "../assets/CollborativeHub.jpg";

const Portfolio3 = () => {
  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-24 py-10">
      <div className="text-center my-10 sm:my-14 md:my-20 flex flex-col items-center">
        <h1
          className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Collaborative Hub
        </h1>
        <img
          className="my-8 w-full max-w-4xl h-auto rounded-md shadow-md object-cover"
          src={CollaborativeHubImg}
          alt="Collaborative Hub"
        />
      </div>

      <div className="text-base sm:text-lg text-center leading-relaxed rb mx-auto max-w-4xl space-y-6 mb-16">
        <p>
          In the heart of a dynamic workplace, a community office space is
          meticulously designed to foster collaboration, creativity, and a sense
          of trust among the 12 staff members.
        </p>
        <p>
          This versatile and welcoming environment embraces the principles of
          modern work culture while providing dedicated areas for focused tasks,
          relaxation, and team collaboration.
        </p>
        <p>
          The central workspace is an open floor plan with six paired desks,
          accommodating 12 staff members. Each desk has ergonomic chairs, ample
          space, and personal storage units to promote a comfortable and
          organised work environment. The paired desk arrangement encourages
          communication and teamwork, allowing colleagues to collaborate on
          projects quickly.
        </p>
        <p>
          Adjacent to the work area is a dedicated printer pod strategically
          placed to ensure accessibility without disrupting the workflow.
        </p>
        <p>
          A cosy lounge seating area at the entrance provides a relaxed space
          for informal discussions with plush sofas and vibrant cushions,
          creating an inviting atmosphere for casual collaboration and social
          interactions.
        </p>
        <p>
          A dedicated meeting room for up to 8 people has a large conference
          table and ergonomic chairs. The room features state-of-the-art
          audiovisual equipment, including a teleconferencing system, ensuring
          seamless communication with remote team members or clients. The room
          is adorned with inspiring artwork and visual displays that reflect the
          company’s values and achievements.
        </p>
        <p>
          Prominent within the community office space is a carefully curated
          wall displaying tele and pictures showcasing themes of trust,
          collaboration, and the team’s work.
        </p>
        <p>
          The office space’s touches of greenery and natural elements contribute
          to a refreshing and biophilic atmosphere.
        </p>
        <p>
          The lighting solutions are integrated, combining natural light from
          large windows with artificial lighting to create a well-lit and
          comfortable workspace. Pendant lights above the desks, floor lamps in
          the lounge area, and adjustable lighting in the meeting room cater to
          various daily needs and moods.
        </p>
        <p>
          This community office space is a harmonious blend of functionality,
          aesthetics, and a collaborative spirit.
        </p>
      </div>

      <div className="flex sm:flex-row items-center justify-between gap-4 mb-10 mt-6 md:px-40 w-full">
        <Link
          to={"/p2-biophilic-oasis-conservatory"}
          className="w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            <HiArrowLeft />
            Previous
          </button>
        </Link>

        <Link to="/p4-gilded-elegance-passage" className="w-full sm:w-auto">
          <button className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#b37558] hover:bg-[#a0654d] rounded-md text-white font-semibold px-6 py-2">
            Next
            <HiArrowRight />
          </button>
        </Link>
      </div>
    </section>
  );
};

export default Portfolio3;
