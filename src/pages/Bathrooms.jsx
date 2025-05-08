import React from "react";

const Bathrooms = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-16 py-8">
      <div className="text-center my-8">
        <h1
          className="text-[#b37558] text-3xl sm:text-4xl font-semibold inline-block rbs"
          style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)" }}
        >
          Bathrooms
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img
          src="https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=500&auto=format&fit=crop&q=120"
          alt="Bathroom 1"
          className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-lg transition-opacity duration-300 hover:opacity-80"
        />
        <img
          src="https://images.unsplash.com/photo-1603825491103-bd638b1873b0?w=500&auto=format&fit=crop&q=120"
          alt="Bathroom 2"
          className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-lg transition-opacity duration-300 hover:opacity-80"
        />
        <img
          src="https://plus.unsplash.com/premium_photo-1676320514136-5a15d9f97dfa?w=500&auto=format&fit=crop&q=120"
          alt="Bathroom 3"
          className="w-full h-72 sm:h-80 md:h-96 object-cover rounded-lg transition-opacity duration-300 hover:opacity-80"
        />
      </div>
    </section>
  );
};

export default Bathrooms;
