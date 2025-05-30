import { Link } from "react-router-dom";

import KitchenMain from "../assets/KitchenMain.webp"
import Kingston7 from "../assets/Kingston7.webp";
import TKitchenMain from "../assets/TKitchenMain.webp";
import TwinkinMain from "../assets/TwinkinMain.webp"
import ReceptionCentralLondon from "../assets/ReceptionCentralLondon.webp"
import AirMain from "../assets/AirMain.webp";
import WardrobeMain from "../assets/WardrobeMain.webp";
import Wine from "../assets/Wine.webp";
import SevenBed from "../assets/SevenBedMain.webp";
import Biblophic from "../assets/Biblophic.webp";
import HallwayMain from "../assets/HallwayMain.jpg"
import Bespoke1 from "../assets/Bespoke1.webp"
import Wardrobe4 from "../assets/Wardrobe4.webp"

const allItems = [
  {
    src: Kingston7,
    title: "Kingston Upon Thames",
    route: "/p1-kingston-upon-thames",
  },
  {
    src: Bespoke1,
    title: "Bespoke joinery Projects",
    route: "/p5-bespoke-joinery-projects",
  },
  {
    src: "https://st.hzcdn.com/fimgs/07114a7f07d95ad9_6206-w312-h312-b0-p0---living-room.jpg",
    title: "Sutton, London- Contemporary Style Extension & Renovation",
    route: "/p16-sutton-style",
  },
  {
    src: KitchenMain,
    title: "Kitchens In Surrey - Modern",
    route: "/p6-modern-kitchens",
  },
  {
    src: TKitchenMain,
    title: "High-end Traditional Kitchens",
    route: "/p15-traditional-kitchens",
  },
  {
    src: TwinkinMain,
    title: "Twickenham",
    route: "/p8-twickenham",
  },
  {
    src: Wardrobe4,
    title: "Chessingtion Kingston",
    route: "/p9-chessingtion-kingston",
  },
  {
    src: ReceptionCentralLondon,
    title: "Reception Central London , Chelsea",
    route: "/p10-reception-central",
  },
  {
    src: SevenBed,
    title: "Seven bed high-end project, Sutton",
    route: "/p11-seven-bed",
  },
  // {
  //   src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/home-design-1-1536x1440.jpg",
  //   title: "Conservatory Croydon",
  //   route: "/p12-conservatory-croydon",
  // },
  {
    src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.29.11-PM.jpeg-1536x1152.jpg",
    title: "Surbiton Project Living and Hallway",
    route: "/p13-surbiton-project",
  },
  {
    src: AirMain,
    title: "Air B&B Mitcham",
    route: "/p14-air-mitcham",
  },
  {
    src: WardrobeMain,
    title: "Bespoke Wardrobe study in Wimbledon",
    route: "/p18-bespoke-wardrobe",
  },
  {
    src: Wine,
    title: "Wine cellar in Leatherhead",
    route: "/p17-wine-cellar",
  },
  {
    src: Biblophic,
    title: "Biophilic Oasis Conservatory",
    route: "/p2-biophilic-oasis-conservatory",
  },
  // {
  //   src: "https://designz.dwell-rich.com/wp-content/uploads/2023/11/Screenshot-2023-11-29-160007.png",
  //   title: "Collaborative Hub",
  //   route: "/p3-collaborative-hub",
  // },
  {
    src: HallwayMain,
    title: "Gilded Elegance Passage",
    route: "/p4-gilded-elegance-passage",
  },
  // {
  //   src: "https://designz.dwell-rich.com/wp-content/uploads/2024/12/WhatsApp-Image-2024-12-12-at-12.29.11-PM-2.jpeg-1.jpg",
  //   title: "Garden design-Kingston",
  //   route: "/p7-garden-design-kingston",
  // },
];

const Portfolio = () => {
  // const [visibleCount, setVisibleCount] = useState(6);

  // const handleLoadMore = () => {
  //   setVisibleCount((prev) => prev + 3);
  // };

  // const visibleItems = allItems.slice(0, visibleCount);

  return (
    <section className="px-4 sm:px-8 md:px-16 lg:px-28 mb-10">
      <div className="text-center my-12 sm:my-16 md:my-20">
        <h1
          className="text-black text-3xl sm:text-4xl font-semibold rbs"
          style={{ textShadow: "2px 4px 4px rgba(0, 0, 0, 0.5)" }}
        >
          Portfolio
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {allItems.map((item, index) => (
          <div key={index} className="my-4">
            <Link to={item.route}>
              <img
                className="w-full h-64 sm:h-80 md:h-96 object-cover rounded-lg shadow-md transition-opacity duration-300 hover:opacity-80"
                src={item.src}
                alt={item.title}
              />
            </Link>
            <h1 className="font-semibold text-lg sm:text-xl text-center mt-2 rbs">
              {item.title}
            </h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
