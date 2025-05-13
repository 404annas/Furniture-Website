import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FaDesktop, FaUtensils, FaBed, FaBath } from "react-icons/fa";

const styleMaterial = {
  "style-1": {
    title: "Your Style Is Contemporary",
    image:
      "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Contemporary-style.jpg",
  },
  "style-2": {
    title: "Your Style Is Minimalistic",
    image:
      "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Minimalistic-style.jpg",
  },
  "style-3": {
    title: "Your Style Is Maximalist",
    image:
      "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Maximalist-interiors-scaled.jpg",
  },
  "style-4": {
    title: "Your Style Is Mid-Century",
    image:
      "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Mid-century-modern.jpg",
  },
  "style-5": {
    title: "Your Style Is Scandinavian",
    image:
      "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Scandavian.jpg",
  },
  "style-6": {
    title: "Your Style Is Biophilic",
    image:
      "https://designz.dwell-rich.com/wp-content/uploads/2023/08/Biophyllic-style.jpg",
  },
};

const modalContent = {
  "style-1": [
    {
      heading: "Living Room",
      title: "Your Style Is Contemporary",
      description1:
        "Contemporary interior design style is characterized by its clean lines, minimalism, and focus on functionality. It embraces a sleek, uncluttered aesthetic with neutral color palettes and pops of bold colors or patterns. The design often incorporates a mix of materials like glass, metal, and wood to create a sense of depth and texture. Contemporary spaces showcase open layouts, ample natural light, and a seamless integration of technology. This style emphasizes simplicity, sophistication, and a timeless appeal that adapts well to evolving trends.",
      description2:
        "Contemporary living rooms are known for their sleek and sophisticated design, blending comfort and style seamlessly. Contemporary room include have characteristics  like sleek lines, neutral colors, minimalism, mixed materials, comfort-focused seating, open layout, ample natural light, technology integration, art and accessories.",
    },
    {
      heading: "Kitchen",
      title: "Your Style Is Contemporary",
      description1:
        "Contemporary interior design style is characterized by its clean lines, minimalism, and focus on functionality. It embraces a sleek, uncluttered aesthetic with neutral color palettes and pops of bold colors or patterns. The design often incorporates a mix of materials like glass, metal, and wood to create a sense of depth and texture. Contemporary spaces showcase open layouts, ample natural light, and a seamless integration of technology. This style emphasizes simplicity, sophistication, and a timeless appeal that adapts well to evolving trends.",
      description2:
        "A contemporary kitchen embodies a modern and functional design, blending aesthetics with practicality. Some of the key features are sleek lines, minimalist cabinetry, neutral colors, mixed materials, functional island, integrated appliances, ample storage, task lighting, and modern technology.",
    },
    {
      heading: "Bedroom",
      title: "Your Style Is Contemporary",
      description1:
        "Contemporary interior design style is characterized by its clean lines, minimalism, and focus on functionality. It embraces a sleek, uncluttered aesthetic with neutral color palettes and pops of bold colors or patterns. The design often incorporates a mix of materials like glass, metal, and wood to create a sense of depth and texture. Contemporary spaces showcase open layouts, ample natural light, and a seamless integration of technology. This style emphasizes simplicity, sophistication, and a timeless appeal that adapts well to evolving trends. A contemporary bedroom is a stylish and sophisticated space designed with modern aesthetics in mind. It features clean lines, minimalist furniture, and a neutral color scheme that creates a serene and calming ambiance. The furniture is functional yet sleek, often including a platform bed with a low-profile design. Textured fabrics like plush rugs and cozy throws add comfort and warmth to the room.",
      description2:
        "Statement lighting fixtures serve as focal points and contribute to the room’s modern feel. The space is kept uncluttered and organized, emphasizing the importance of open space and smart storage solutions. Artistic accents, such as abstract artwork and unique decorative pieces, infuse the room with personality and visual interest. Technology integration may be present, offering convenient features like charging stations and smart home capabilities. Overall, a contemporary bedroom is a harmonious blend of comfort, style, and functionality, providing a tranquil and inviting retreat within the modern home.",
    },
    {
      heading: "Bathroom",
      title: "Your Style Is Contemporary",
      description1:
        "Contemporary interior design style is characterized by its clean lines, minimalism, and focus on functionality. It embraces a sleek, uncluttered aesthetic with neutral color palettes and pops of bold colors or patterns. The design often incorporates a mix of materials like glass, metal, and wood to create a sense of depth and texture. Contemporary spaces showcase open layouts, ample natural light, and a seamless integration of technology. This style emphasizes simplicity, sophistication, and a timeless appeal that adapts well to evolving trends.",
      description2:
        "Contemporary bathrooms exude a modern and stylish design, combining functionality with a sense of luxury. Some of the key elements are clean lines, neutral colors, minimalist fixtures, modern materials, freestanding bathtub, walk-in shower, floating vanities, ample storage, well-designed lighting, high-tech features.",
    },
  ],
  "style-2": [
    {
      heading: "Living Room",
      title: "Your Style Is Minimalistic",
      description1:
        "Simplicity, clean lines, and a focus on essential elements characterise minimalistic design. It emphasises open space, neutral colours, and the absence of extraneous ornamentation. Minimalism promotes a sense of tranquillity and mindfulness by promoting a calm, organised, and functional environment.",
      description2:
        "A minimalistic living room is a simple, uncluttered, and serene space that embodies the essence of minimalism. It features clean lines, a neutral color palette, and a focus on essential elements. The room typically has open space, with functional furniture arranged in a balanced and thoughtful manner. It is a space that promotes mindful living and fosters a sense of peace and relaxation for its inhabitants and guests.",
    },
    {
      heading: "Kitchen",
      title: "Your Style Is Minimalistic",
      description1:
        "Simplicity, clean lines, and a focus on essential elements characterise minimalistic design. It emphasises open space, neutral colours, and the absence of extraneous ornamentation. Minimalism promotes a sense of tranquillity and mindfulness by promoting a calm, organised, and functional environment.",
      description2:
        "A minimalistic kitchen is a clean, uncluttered, and functional space that embodies the principles of minimalism. In a minimalistic kitchen, the emphasis is on quality over quantity, where every element serves a purpose and contributes to the overall clean and harmonious aesthetic. The result is a serene and inviting space that encourages mindful cooking and a clutter-free environment.",
    },
    {
      heading: "Bedroom",
      title: "Your Style Is Minimalistic",
      description1:
        "Simplicity, clean lines, and a focus on essential elements characterise minimalistic design. It emphasises open space, neutral colours, and the absence of extraneous ornamentation. Minimalism promotes a sense of tranquillity and mindfulness by promoting a calm, organised, and functional environment.",
      description2:
        " A minimalistic bedroom is a simple and uncluttered space with clean lines, neutral colours, and functional furniture. It promotes a calm and serene atmosphere with minimal decor, ample open space, and soft lighting. The design prioritizes essentials, creating a peaceful and restful environment for relaxation.",
    },
    {
      heading: "Bathroom",
      title: "Your Style Is Minimalistic",
      description1:
        "Simplicity, clean lines, and a focus on essential elements characterise minimalistic design. It emphasises open space, neutral colours, and the absence of extraneous ornamentation. Minimalism promotes a sense of tranquillity and mindfulness by promoting a calm, organised, and functional environment.",
      description2:
        "In a minimalistic bathroom, the emphasis is on simplicity, elegance, and functionality. By eliminating excess and focusing on essential elements, the bathroom becomes a peaceful retreat for relaxation and rejuvenation.",
    },
  ],
  "style-3": [
    {
      heading: "Living Room",
      title: "Your Style Is Maximalist",
      description1:
        "The maximalist style of interior design is distinguished by its bold, eclectic, and vibrant nature. Maximalism, as opposed to minimalist design, embraces an abundance of colours, patterns, textures, and decorative elements to create a visually rich and opulent atmosphere. This design style is all about breaking design rules and pushing the boundaries of traditional decor to create a space that is highly expressive, one-of-a-kind, and full of personality.",
      description2:
        "Maximalist living rooms are a kaleidoscope of colors. Rich jewel tones, vibrant hues, and daring contrasts are often used on walls, furniture, and decor pieces to create an atmosphere that feels lively and exuberant. Walls in a maximalist living room are adorned with an extensive collection of art, creating a gallery-like atmosphere. Framed paintings, photographs, and artworks are harmoniously arranged, filling the space with creativity and inspiration.",
    },
    {
      heading: "Kitchen",
      title: "Your Style Is Maximalist",
      description1:
        "The maximalist style of interior design is distinguished by its bold, eclectic, and vibrant nature. Maximalism, as opposed to minimalist design, embraces an abundance of colours, patterns, textures, and decorative elements to create a visually rich and opulent atmosphere. This design style is all about breaking design rules and pushing the boundaries of traditional decor to create a space that is highly expressive, one-of-a-kind, and full of personality.",
      description2:
        "Maximalist kitchens feature a wide range of bold and vibrant colors. Rich jewel tones, vivid hues, and contrasting color combinations are commonly used on cabinetry, walls, and decor. Multiple patterns are layered together in a maximalist kitchen. From backsplash tiles to patterned fabrics on seating and curtains, the kitchen becomes a canvas of diverse and captivating designs.",
    },
    {
      heading: "Bedroom",
      title: "Your Style Is Maximalist",
      description1:
        "The maximalist style of interior design is distinguished by its bold, eclectic, and vibrant nature. Maximalism, as opposed to minimalist design, embraces an abundance of colours, patterns, textures, and decorative elements to create a visually rich and opulent atmosphere. This design style is all about breaking design rules and pushing the boundaries of traditional decor to create a space that is highly expressive, one-of-a-kind, and full of personality.",
      description2:
        "A successful maximalist bedroom design harmoniously balances the abundance of elements, creating a captivating and visually stimulating environment that exudes individuality and creativity. The result is a luxurious and immersive sanctuary that sparks joy and showcases the homeowner’s unique taste and style.",
    },
    {
      heading: "Bathroom",
      title: "Your Style Is Maximalist",
      description1:
        "The maximalist style of interior design is distinguished by its bold, eclectic, and vibrant nature. Maximalism, as opposed to minimalist design, embraces an abundance of colours, patterns, textures, and decorative elements to create a visually rich and opulent atmosphere. This design style is all about breaking design rules and pushing the boundaries of traditional decor to create a space that is highly expressive, one-of-a-kind, and full of personality.",
      description2:
        "Maximalist bathrooms are characterized by a wide array of colors. Rich jewel tones, vibrant hues, and contrasting color combinations are often used to create a lively and energetic atmosphere. Multiple patterns are mixed and layered throughout the bathroom. From intricate tiles on floors and walls to patterned fabrics on towels and curtains, the space is filled with visual interest.",
    },
  ],
  "style-4": [
    {
      heading: "Living Room",
      title: "Your Style Is Mid-Century",
      description1:
        "Midcentury design emphasizes clean and sleek lines, creating a sense of simplicity and minimalism in furniture and architectural elements. Alongside straight lines, midcentury design incorporates organic and curvilinear shapes in furniture and decor, adding a touch of fluidity and visual interest. Midcentury interiors often feature iconic furniture pieces designed by famous designers of the era, such as Eames, Saarinen, and Wegner.",
      description2:
        "A midcentury living room embodies a timeless and elegant design with a mix of modernist and retro elements. The combination of clean lines, organic shapes, iconic furniture, and bold colors creates a harmonious and inviting space that celebrates the beauty of simplicity and functional design.",
    },
    {
      heading: "Kitchen",
      title: "Your Style Is Mid-Century",
      description1:
        "Midcentury design emphasizes clean and sleek lines, creating a sense of simplicity and minimalism in furniture and architectural elements. Alongside straight lines, midcentury design incorporates organic and curvilinear shapes in furniture and decor, adding a touch of fluidity and visual interest. Midcentury interiors often feature iconic furniture pieces designed by famous designers of the era, such as Eames, Saarinen, and Wegner.",
      description2:
        "Midcentury kitchens prioritize functionality and practicality in the layout, with efficient work zones and ample storage to make cooking and meal preparation convenient.Vintage-inspired appliances, such as retro-style refrigerators and range ovens in pastel colors, are popular choices to evoke the spirit of the midcentury era. Midcentury kitchens often incorporate open shelving to display colorful dishware and glassware, adding a decorative and accessible touch.",
    },
    {
      heading: "Bedroom",
      title: "Your Style Is Mid-Century",
      description1:
        "Midcentury design emphasizes clean and sleek lines, creating a sense of simplicity and minimalism in furniture and architectural elements. Alongside straight lines, midcentury design incorporates organic and curvilinear shapes in furniture and decor, adding a touch of fluidity and visual interest. Midcentury interiors often feature iconic furniture pieces designed by famous designers of the era, such as Eames, Saarinen, and Wegner. Midcentury bedrooms feature clean, straight lines in furniture and architectural elements. The design emphasizes simplicity and minimal ornamentation.",
      description2:
        "Alongside straight lines, midcentury design incorporates organic and curvilinear shapes in furniture, such as rounded headboards, circular mirrors, and sculptural bedside tables.Midcentury bedrooms often showcase iconic furniture pieces, such as platform beds, midcentury dressers, and iconic lounge chairs. The use of natural materials is prevalent in midcentury interiors. Wood, particularly teak, walnut, and rosewood, is commonly used for furniture, while stone and glass accents add sophistication.",
    },
    {
      heading: "Bathroom",
      title: "Your Style Is Mid-Century",
      description1:
        "Midcentury design emphasizes clean and sleek lines, creating a sense of simplicity and minimalism in furniture and architectural elements. Alongside straight lines, midcentury design incorporates organic and curvilinear shapes in furniture and decor, adding a touch of fluidity and visual interest. Midcentury interiors often feature iconic furniture pieces designed by famous designers of the era, such as Eames, Saarinen, and Wegner.",
      description2:
        "Midcentury bathrooms are known for their use of bold and vibrant colors, such as pastel blues, greens, pinks, and sunny yellows. These colors add a playful and nostalgic touch to the space.Geometric and abstract patterns in tiles are commonly seen on walls and floors, adding visual interest and texture to the bathro.  Vintage-inspired accessories, such as wall-mounted soap dishes, towel bars, and retro-style lighting fixtures, are often used to evoke the spirit of the midcentury era. Midcentury bathrooms prioritize functionality and practicality in the layout, with well-designed storage and efficient use of space.",
    },
  ],
  "style-5": [
    {
      heading: "Living Room",
      title: "Your Style Is Scandinavian",
      description1:
        "Scandinavian style is an interior design approach that originates from the Nordic countries, such as Sweden, Norway, Denmark, and Finland. It is known for its simplicity, functionality, and minimalism, creating spaces that are cozy, welcoming, and filled with natural light. Scandinavian living rooms typically have a neutral color palette, with a focus on white, light gray, and muted earth tones. These colors create a sense of brightness and openness in the space.",
      description2:
        "The use of natural materials is a hallmark of Scandinavian design. Light woods, such as pine and birch, are commonly used for furniture and flooring, adding warmth and a connection to nature.Scandinavian style emphasizes clean, straight lines in furniture and decor, creating a sense of simplicity and minimalism.",
    },
    {
      heading: "Kitchen",
      title: "Your Style Is Scandinavian",
      description1:
        "Scandinavian style is an interior design approach that originates from the Nordic countries, such as Sweden, Norway, Denmark, and Finland. It is known for its simplicity, functionality, and minimalism, creating spaces that are cozy, welcoming, and filled with natural light.",
      description2:
        "Scandinavian kitchens typically have a neutral color palette, with a focus on white, light gray, and soft pastel hues. These colors create a sense of brightness and openness in the space.The use of natural materials is a prominent feature of Scandinavian design. Light woods, such as pine and birch, are commonly used for cabinets and flooring, adding warmth and a connection to nature. Scandinavian kitchens have a minimalist approach to decor, with a focus on uncluttered surfaces. Decorative elements are kept to a minimum, promoting a tidy and organized space.Natural light is highly valued in Scandinavian style. Large windows and light-colored walls help maximize daylight, creating a bright and airy atmosphere.",
    },
    {
      heading: "Bedroom",
      title: "Your Style Is Scandinavian",
      description1:
        "Scandinavian style is an interior design approach that originates from the Nordic countries, such as Sweden, Norway, Denmark, and Finland. It is known for its simplicity, functionality, and minimalism, creating spaces that are cozy, welcoming, and filled with natural light.",
      description2:
        "Scandinavian bedrooms typically have a neutral color palette, with a focus on white, light gray, and soft pastel hues. These colors create a sense of tranquility and brightness in the space.The use of natural materials is a prominent feature of Scandinavian design. Light woods, such as pine and birch, are commonly used for furniture and flooring, adding warmth and a connection to nature. Scandinavian bedrooms are known for their cozy and inviting textiles. Knit throws, sheepskin rugs, and soft cushions add comfort and warmth to the space. Scandinavian design prioritizes functionality and practicality in furniture. Pieces are often sleek and designed to serve multiple purposes, optimizing space.",
    },
    {
      heading: "Bathroom",
      title: "Your Style Is Scandinavian",
      description1:
        "Scandinavian style is an interior design approach that originates from the Nordic countries, such as Sweden, Norway, Denmark, and Finland. It is known for its simplicity, functionality, and minimalism, creating spaces that are cozy, welcoming, and filled with natural light.",
      description2:
        "A Scandinavian bathroom embodies a tranquil, simple, and inviting design with a focus on creating a serene and spa-like retreat. The combination of neutral colors, natural materials, clean lines, and minimalistic decor creates a harmonious and calming space that promotes relaxation and a sense of well-being during daily self-care routines.",
    },
  ],
  "style-6": [
    {
      heading: "Living Room",
      title: "Your Style Is Biophilic",
      description1:
        "Biophilic style focuses on bringing nature indoors and creating environments that promote well-being, comfort, and a strong connection with the natural world. By blending natural materials, greenery, natural light, and sustainable practices, biophilic interiors provide a sense of tranquility and harmony that enhances the overall living experience. Biophilic living rooms prioritize ample natural light, using large windows or skylights to bring the outdoors inside and create a bright and airy atmosphere.",
      description2:
        "The use of natural materials is prevalent in biophilic design. Wood, stone, bamboo, and other natural materials are used for furniture, flooring, and decor. Indoor plants play a central role in biophilic living rooms. Large potted plants, hanging planters, and living walls add a refreshing and organic touch. Biophilic design incorporates organic and curvilinear shapes in furniture and decor, mimicking natural forms found in the environment. Biophilic living rooms often have a color palette inspired by nature, featuring earthy tones, greens, blues, and other hues found in the outdoors.",
    },
    {
      heading: "Kitchen",
      title: "Your Style Is Biophilic",
      description1:
        "Biophilic style focuses on bringing nature indoors and creating environments that promote well-being, comfort, and a strong connection with the natural world. By blending natural materials, greenery, natural light, and sustainable practices, biophilic interiors provide a sense of tranquility and harmony that enhances the overall living experience. Biophilic kitchens prioritize ample natural light, using large windows, skylights, or glass doors to bring the outdoors inside and create a bright and airy atmosphere.",
      description2:
        "Indoor plants play a central role in biophilic kitchens. Hanging planters, potted herbs, and living walls are used to add a refreshing and organic touch to the kitchen.  The use of natural materials is prevalent in biophilic design. Wood, stone, bamboo, and other natural materials are used for kitchen cabinets, countertops, and flooring. Biophilic kitchens often have a color palette inspired by nature, featuring earthy tones, greens, blues, and other hues found in the outdoors. If possible, biophilic kitchens are designed to provide views of natural elements, such as gardens or scenic landscapes, to create a strong connection to the outside world.",
    },
    {
      heading: "Bedroom",
      title: "Your Style Is Biophilic",
      description1:
        "Biophilic style focuses on bringing nature indoors and creating environments that promote well-being, comfort, and a strong connection with the natural world. By blending natural materials, greenery, natural light, and sustainable practices, biophilic interiors provide a sense of tranquility and harmony that enhances the overall living experience.",
      description2:
        "Biophilic bedrooms prioritize comfort with the use of soft and cozy textiles, such as plush throw blankets, pillows, and area rugs. Biophilic bedrooms often incorporate natural ventilation strategies, such as operable windows and ceiling fans, to improve air quality and create a comfortable sleep environment. Incorporating soothing sounds of nature, such as gentle rain or flowing water, can enhance the biophilic experience in the bedroom. To promote restful sleep, biophilic bedrooms also provide options for privacy and darkness, such as blackout curtains or blinds.",
    },
    {
      heading: "Bathroom",
      title: "Your Style Is Biophilic",
      description1:
        "Biophilic style focuses on bringing nature indoors and creating environments that promote well-being, comfort, and a strong connection with the natural world. By blending natural materials, greenery, natural light, and sustainable practices, biophilic interiors provide a sense of tranquility and harmony that enhances the overall living experience. Biophilic bathrooms prioritize ample natural light, using large windows, skylights, or glass doors to bring the outdoors inside and create a bright and airy atmosphere.",
      description2:
        "Indoor plants play a central role in biophilic bathrooms. Hanging planters, potted plants, and living walls are used to add a refreshing and organic touch to the bathroom. The use of natural materials is prevalent in biophilic design. Wood, stone, bamboo, and other natural materials are used for bathroom cabinets, countertops, and flooring. Biophilic bathrooms often have a color palette inspired by nature, featuring earthy tones, greens, blues, and other hues found in the outdoors.",
    },
  ],
};

const icons = [FaDesktop, FaUtensils, FaBed, FaBath];
const titles = ["Living Room", "Kitchen", "Bedroom", "Bathroom"];

const StyleContent = () => {
  const { id } = useParams();
  const style = styleMaterial[id];

  const [showModal, setShowModal] = useState(false);
  const [activeCardIndex, setActiveCardIndex] = useState(null);
  const [isClosing, setIsClosing] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup on component unmount
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  if (!style) {
    return (
      <div className="text-center mt-20 text-red-500">Style not found.</div>
    );
  }

  return (
    <section className="flex flex-col items-center">
      {/* Hero background */}
      <div className="relative h-[350px] w-full flex flex-col items-center justify-center text-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${style.image})`,
          }}
        />
        <div className="absolute inset-0 bg-[#a1684e] opacity-40"></div>
        <h1
          className="relative text-white text-2xl sm:text-3xl md:text-4xl font-semibold z-10 px-4 rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          {style.title}
        </h1>
      </div>

      {/* Cards Section */}
      <div className="flex flex-col md:flex-row md:flex-wrap items-center justify-center gap-6 my-12 w-full">
        {[0, 1, 2, 3].map((i) => {
          const Icon = icons[i];
          return (
            <div
              key={i}
              className="group relative bg-[#a1684e] text-white flex flex-col items-center transition-all duration-500 ease-in-out w-[90%] sm:w-[80%] md:w-60 hover:md:w-80 h-64 md:h-72 cursor-pointer"
              style={{
                boxShadow: i !== 0 ? "-4px 0 10px rgba(0,0,0,0.5)" : "none",
              }}
            >
              {/* Icon */}
              <div className="bg-black p-4 rounded-full z-10 my-8 shadow-[0_10px_25px_rgba(0,0,0,0.5)]">
                <Icon className="text-white text-2xl sm:text-3xl md:text-4xl" />
              </div>

              {/* Content on hover */}
              <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 absolute top-[60%] text-center px-4 w-full">
                <h3 className="text-base sm:text-lg md:text-xl font-semibold mb-2">
                  {titles[i]}
                </h3>
                <button
                  className="bg-[#F7E7CE] text-black py-2 px-4 text-sm sm:text-base rounded"
                  onClick={() => {
                    setActiveCardIndex(i);
                    setShowModal(true);
                    setIsModalOpen(true);
                  }}
                >
                  Explore More
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4 sm:p-6">
          <div
            className={`bg-[#a1684e] w-full max-w-2xl max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-10 rounded relative shadow-[0_10px_25px_rgba(0,0,0,0.5)] transform transition-all duration-500 ease-in-out ${
              isClosing
                ? "translate-y-full opacity-0"
                : "translate-y-0 opacity-100"
            }`}
          >
            {/* Close Button */}
            <button
              className="absolute top-2 right-3 text-white text-2xl font-bold"
              onClick={() => {
                setIsClosing(true);
                setTimeout(() => {
                  setShowModal(false);
                  setIsClosing(false);
                  setIsModalOpen(false);
                }, 500);
              }}
            >
              &times;
            </button>

            {/* Modal Content */}
            <h1 className="text-center text-xl sm:text-2xl md:text-3xl text-white font-bold mb-2 rbs">
              {modalContent[id]?.[activeCardIndex]?.heading}
            </h1>

            <h2 className="text-center text-sm sm:text-base md:text-lg font-semibold text-white rbs">
              {modalContent[id]?.[activeCardIndex]?.title}
            </h2>

            <div className="border-b-2 border-black my-4" />

            <p className="text-white mt-4 text-sm sm:text-base leading-relaxed rb">
              {modalContent[id]?.[activeCardIndex]?.description1}
            </p>

            <p className="text-white mt-4 text-sm sm:text-base leading-relaxed rb">
              {modalContent[id]?.[activeCardIndex]?.description2}
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default StyleContent;
