import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const ContactModal = ({ onSubmitSuccess }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const [isFormOpen, setIsFormOpen] = useState(true);

  const onSubmit = async (data) => {
    const { name, email, phone, message } = data;

    // Construct WhatsApp message using form inputs
    const whatsappMessage = `Hello Annas,%0A%0AYou have a new form submission:%0A%0AName: ${name}%0AEmail: ${email}%0APhone: ${phone}%0AMessage: ${message}`;

    // Add your admin's WhatsApp number here (with country code, no + sign)
    const adminPhoneNumber = "923272695806"; // example: 92 = Pakistan, 3001234567 = number

    // WhatsApp URL
    const whatsappURL = `https://wa.me/${adminPhoneNumber}?text=${whatsappMessage}`;

    // Open WhatsApp with message
    window.open(whatsappURL, "_blank");

    setIsFormOpen(false); // Close the form
    reset(); // Clear form fields
  };

  useEffect(() => {
    if (isFormOpen) {
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFormOpen]);

  if (!isFormOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 lg:pt-28 md:pt-32 sm:pt-32 pt-32">
      <div className="bg-white w-full max-w-4xl sm:max-h-[80vh] max-h-[75vh] overflow-y-auto rounded-2xl shadow-xl p-4 sm:p-8">
        <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">
          Enter Your Details
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div className="flex flex-col sm:flex-row sm:space-x-6 space-y-5 sm:space-y-0">
            {/* Left Column */}
            <div className="w-full sm:w-1/2 space-y-5">
              <div>
                <label className="block mb-1 text-sm font-medium">Name</label>
                <input
                  type="text"
                  {...register("name", { required: "Name is required" })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.name && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">Email</label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^\S+@\S+$/i,
                      message: "Invalid email address",
                    },
                  })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Right Column */}
            <div className="w-full sm:w-1/2 space-y-5">
              <div>
                <label className="block mb-1 text-sm font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: "Phone is required",
                    minLength: { value: 11, message: "Invalid phone number" },
                  })}
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                {errors.phone && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block mb-1 text-sm font-medium">
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  rows="4"
                  className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                />
                {errors.message && (
                  <p className="text-red-600 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2.5 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200 flex items-center justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
            ) : (
              "Submit"
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactModal;
