import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import ContemporaryStyle from "../assets/Contemporary-style.jpg";
import MaximalistInterior from "../assets/Maximalist-interiors.jpg";
import MinimalisticStyle from "../assets/Minimalistic-style.jpg";
import MidCenturyModern from "../assets/Mid-century-modern.jpg";
import Scandavian from "../assets/Scandavian.jpg";
import Biophyllic from "../assets/Biophyllic-style.jpg";
import Stylee from "../assets/Style.jpg";

const styleImages = [
  {
    id: "style-1",
    title: "Contemporary style",
    src: ContemporaryStyle,
  },
  {
    id: "style-2",
    title: "Minimalistic style",
    src: MinimalisticStyle,
  },
  {
    id: "style-3",
    title: "Maximalist interiors",
    src: MaximalistInterior,
  },
  {
    id: "style-4",
    title: "Mid-century modern style",
    src: MidCenturyModern,
  },
  {
    id: "style-5",
    title: "Scandinavian style",
    src: Scandavian,
  },
  {
    id: "style-6",
    title: "Biophyllic style",
    src: Biophyllic,
  },
];

const Style = () => {
  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  // Check localStorage on first load
  useEffect(() => {
    const filled = localStorage.getItem("styleFormFilled");
    if (!filled) {
      setShowModal(true);
      document.body.style.overflow = "hidden"; // Prevent scroll
    }
  }, []);

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      localStorage.setItem("styleFormFilled", "true");
      setShowModal(false);
      document.body.style.overflow = "auto"; // Re-enable scroll
    } else {
      alert("Please enter both name and email.");
    }

    const adminPhoneNumber = import.meta.env.VITE_ADMIN_PHONE;

    const whatsappMessage = `Hello Saleha,%0A%0AI am:%0A%0AName: ${name}%0AEmail: ${email}`;

    const whatsappURL = `https://wa.me/${adminPhoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    setName("");
    setEmail("");
  };

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[350px] flex flex-col items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${Stylee})`,
          }}
        />
        <div className="absolute inset-0 bg-[#a1684e] opacity-60"></div>
        <h1
          className="relative text-white text-2xl sm:text-3xl md:text-4xl font-semibold z-10 px-4"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Check Your Style
        </h1>
      </div>

      {/* Image Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mx-4 sm:mx-8 md:mx-16 lg:mx-28 my-20">
        {styleImages.map((item) => (
          <Link key={item.id} to={`/style/${item.id}`}>
            <img
              className="w-full h-auto rounded-xl shadow-[0_10px_25px_rgba(0,0,0,0.5)] cursor-pointer hover:opacity-80"
              src={item.src}
              alt={item.title}
            />
          </Link>
        ))}
      </div>

      {/* Modal Form */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <form
            onSubmit={handleSubmit}
            className="bg-[#F7E7CE] p-6 sm:p-8 rounded-xl w-[90%] max-w-md shadow-xl space-y-4 overflow-y-auto max-h-[90vh]"
          >
            <h2 className="text-xl font-semibold mb-2 text-center">
              Please Enter Your Details
            </h2>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-2 outline-none rounded"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-2 outline-none rounded"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="w-full bg-[#a1684e] text-white py-2 px-4 rounded hover:bg-[#8b523d] transition"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </section>
  );
};

export default Style;
