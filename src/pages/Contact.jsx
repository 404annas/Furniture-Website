import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const adminPhoneNumber = import.meta.env.VITE_ADMIN_PHONE;

    const whatsappMessage = `Hello Saleha,%0A%0AI am:%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;

    const whatsappURL = `https://wa.me/${adminPhoneNumber}?text=${whatsappMessage}`;

    window.open(whatsappURL, "_blank");

    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="bg-white">
      {/* Heading Section */}
      <div className="relative h-[250px] flex items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://img.freepik.com/premium-photo/illustration-living-room-interior_252025-70022.jpg?ga=GA1.1.1673158750.1693654360&semt=ais_hybrid&w=1400')",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#b37558] opacity-70"></div>
        <h1
          className="relative text-white text-2xl sm:text-3xl md:text-4xl font-semibold z-10 px-4 rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Would You Like To Discuss A Project?
        </h1>
      </div>

      {/* Contact Section */}
      <div className="flex flex-col lg:flex-row gap-8 px-4 sm:px-8 lg:px-16 py-12">
        {/* Left Side Info */}
        <div className="w-full lg:w-1/2 bg-gray-100 p-6 sm:p-10 rounded-lg shadow-md">
          <div className="flex flex-col gap-4 rb text-base sm:text-lg">
            <h2 className="text-2xl sm:text-3xl font-semibold">Contact Us</h2>
            <hr />
            <div>
              <h3 className="text-xl font-semibold">General Enquiries</h3>
              <p className="mt-1 text-sm">hello@designz.dwell-rich.com</p>
              <p className="text-sm">Saleha: 07803326891</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">Registered Address</h3>
              <p className="mt-1 text-sm">416, Kingston Road, KT1 3PB</p>
            </div>
          </div>
        </div>

        {/* Right Side Form */}
        <form
          onSubmit={handleSubmit}
          className="w-full lg:w-1/2 bg-[#b37558] p-6 sm:p-10 rounded-lg shadow-md flex flex-col justify-center gap-6 rb"
        >
          <div>
            <label className="text-white block mb-2 font-semibold">
              Your Name
            </label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full p-3 rounded bg-white outline-none text-sm"
              required
            />
          </div>
          <div>
            <label className="text-white block mb-2 font-semibold">
              Your Email
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full p-3 rounded bg-white outline-none text-sm"
              required
            />
          </div>
          <div>
            <label className="text-white block mb-2 font-semibold">
              Message
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              rows="4"
              className="w-full p-3 rounded bg-white outline-none text-sm"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-white text-[#b37558] font-semibold py-3 px-6 rounded hover:bg-gray-100 transition text-sm sm:text-base"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
