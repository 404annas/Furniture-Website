import React, { useState } from "react";

const Blog = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const cards = [
    {
      title: "Elegant Interior",
      description:
        "Explore our beautifully designed modern interiors crafted for comfort and style.",
      fullContent:
        "Explore our beautifully designed modern interiors crafted for comfort and style. Every piece is selected to enhance your lifestyle with a touch of sophistication and practicality. From neutral tones to luxurious textures, our interiors are built to impress.",
      image:
        "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=800&q=60",
    },
    {
      title: "Creative Workspace",
      description:
        "Inspire productivity with thoughtfully designed workspaces built for innovation.",
      fullContent:
        "Inspire productivity with thoughtfully designed workspaces built for innovation. We focus on ergonomic designs, natural lighting, and aesthetic elements to create a motivating and efficient environment tailored to your workflow.",
      image:
        "https://images.unsplash.com/photo-1496664444929-8c75efb9546f?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8d29ya3NwYWNlfGVufDB8fDB8fHww",
    },
    {
      title: "Cozy Living Room",
      description:
        "Experience warmth and relaxation in our cozy living room concepts.",
      fullContent:
        "Experience warmth and relaxation in our cozy living room concepts. Designed to bring families together, our layouts promote comfort, functionality, and timeless aesthetics that make any house feel like home.",
      image:
        "https://images.unsplash.com/photo-1600121848594-d8644e57abab?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D",
    },
  ];

  const openModal = (card) => {
    setSelectedCard(card);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCard(null);
  };

  return (
    <section className="px-4 md:px-16">
      {/* Header */}
      <div className="text-center my-12 md:my-24">
        <h1
          className="text-black text-3xl md:text-4xl uppercase font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Blogs
        </h1>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {cards.map((card, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden group shadow-lg min-h-[400px] sm:min-h-[450px] cursor-pointer"
            style={{
              backgroundImage: `url(${card.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="absolute bottom-0 left-0 right-0 bg-[#b37558] text-white px-4 py-3 sm:px-6 sm:py-4 transition-all duration-500 ease-in-out group-hover:translate-y-[-100px] sm:group-hover:translate-y-[-120px]">
              <h2 className="text-xl sm:text-2xl font-semibold rbs uppercase">
                {card.title}
              </h2>
            </div>

            <div className="absolute bottom-[-150px] left-0 right-0 px-4 py-3 sm:px-6 sm:py-4 bg-[#b37558] text-white transition-all duration-500 ease-in-out group-hover:bottom-0">
              <p className="mb-4 rb text-sm sm:text-base">{card.description}</p>
              <button
                onClick={() => openModal(card)}
                className="bg-white text-[#b37558] font-semibold px-4 py-2 rounded hover:bg-gray-100 text-sm sm:text-base"
              >
                Read More
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {isModalOpen && selectedCard && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 px-4">
          <div className="bg-white rounded-lg w-full max-w-2xl p-4 sm:p-6 relative shadow-xl max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-2xl font-bold"
            >
              ×
            </button>
            <h2 className="text-2xl sm:text-3xl font-semibold mb-4 uppercase rbs">
              {selectedCard.title}
            </h2>
            <img
              src={selectedCard.image}
              alt={selectedCard.title}
              className="w-full h-48 sm:h-64 object-cover rounded mb-4"
            />
            <p className="text-gray-700 rb text-sm sm:text-base">
              {selectedCard.fullContent}
            </p>
          </div>
        </div>
      )}

      {/* Newsletter placeholder */}
      <div className="bg-yellow-100 text-center px-4 py-10 mt-12">
        <h3 className="text-xl sm:text-2xl font-semibold mb-2">Stay Updated</h3>
        <p className="text-gray-600 mb-4 text-sm sm:text-base">
          Subscribe to our newsletter to get the latest blog updates.
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 rounded border border-gray-300 w-full sm:w-64 text-sm sm:text-base"
          />
          <button className="bg-[#b37558] text-white px-6 py-2 rounded hover:bg-[#a3644a] text-sm sm:text-base">
            Subscribe
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;
