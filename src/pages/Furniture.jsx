import Furnituree from "../assets/furniture-1.jpg"

const Furniture = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-32 py-10">
      {/* Heading */}
      <div className="text-center mb-10">
        <h1
          className="text-[#b37558] text-3xl sm:text-4xl font-semibold inline-block rbs"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          Furniture
        </h1>
      </div>

      {/* Content */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
        {/* Text */}
        <p className="text-black text-base sm:text-lg rb leading-relaxed text-justify">
          Our design philosophy is centred on exclusivity, which permeates every
          element, including the choice of furniture. We source statement pieces
          worldwide that balance harmoniously with the environment. We value
          using locally produced goods whenever possible and are passionate
          about upcycling, giving worn-out furniture a new lease on life. Our
          passion is making unique, exquisite designer furniture customised for
          each project we work on.
        </p>

        {/* Image */}
        <img
          className="w-full max-w-md lg:max-w-lg rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.5)]"
          src={Furnituree}
          alt="Furniture Image"
        />
      </div>
    </section>
  );
};

export default Furniture;
