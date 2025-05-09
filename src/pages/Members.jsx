import React from "react";

const Members = () => {
  return (
    <section className="bg-[#a1684e] h-fit text-center py-10 px-4">
      <h1
        className="text-black text-2xl sm:text-3xl md:text-4xl font-semibold mb-10"
        style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
      >
        Proud Members
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-6 mb-4">
        <img
          className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs object-contain"
          src="src/assets/BIID_Appellation_ASSOC_2016_AW-BLACK.png"
          alt="BIID Member"
        />
        <img
          className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs object-contain"
          src="src/assets/Kingston Chamber Logo Member.jpg"
          alt="Kingston Chamber Logo"
        />
        <img
          className="w-3/4 sm:w-1/2 md:w-1/3 lg:w-1/4 max-w-xs object-contain"
          src="src/assets/Kingston Chamber Logo Member.jpg"
          alt="Kingston Chamber Logo"
        />
      </div>
    </section>
  );
};

export default Members;
