import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

const navItems = [
  { path: "/", label: "Home" },
  {
    path: "/design-process",
    label: "Design Process",
    children: [
      { path: "/design-process", label: "Design Process" },
      { path: "/design-consultation", label: "Design Consultation" },
      { path: "/kitchens", label: "Kitchens" },
      { path: "/bathrooms", label: "Bathrooms" },
      { path: "/d-rendering", label: "3D Rendering" },
    ],
  },
  { path: "/about", label: "About Us" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/blogs", label: "Blog" },
];

const NavLink = ({ to, children }) => (
  <Link to={to}>
    <span
      className="px-4 py-2 relative overflow-hidden z-10 
      before:content-[''] before:absolute before:inset-0 before:bg-[#b37558]
      before:scale-x-0 before:origin-left before:transition-transform before:duration-300 
      hover:before:scale-x-100 hover:text-white before:-z-10 block"
    >
      {children}
    </span>
  </Link>
);

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [designOpen, setDesignOpen] = useState(false);
  const location = useLocation(); // Get the current route location

  // Close the menu when the route changes
  useEffect(() => {
    setMenuOpen(false);
    setDesignOpen(false); // Close the "Design Process" submenu if open
  }, [location]);

  return (
    <nav className="px-4 bg-[#F7E7CE] fixed top-0 left-0 w-full z-50">
      <div className="flex items-center justify-between md:p-2 px-2 py-4">
        <Link to="/">
          <img
            className="w-20 md:w-24 h-16 md:h-20 object-contain"
            src="https://designz.dwell-rich.com/wp-content/uploads/2023/06/DR_set-removebg-preview-e1701030039725.png"
            alt="Logo"
          />
        </Link>

        <div className="hidden lg:flex items-center font-semibold uppercase text-sm">
          {navItems.map(({ path, label, children }) => (
            <div key={label} className="relative group">
              {children ? (
                <button
                  onClick={() => setDesignOpen((prev) => !prev)}
                  className="flex items-center gap-1 px-4 py-2 relative overflow-hidden z-10 
                    before:content-[''] before:absolute before:inset-0 before:bg-[#b37558] 
                    before:scale-x-0 before:origin-left before:transition-transform before:duration-300 
                    hover:before:scale-x-100 hover:text-white before:-z-10 uppercase"
                >
                  {label} {designOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                </button>
              ) : (
                <NavLink to={path}>{label}</NavLink>
              )}
              {children && designOpen && (
                <div className="absolute top-full left-0 mt-2 bg-[#F7E7CE] shadow-md rounded-md p-2 flex flex-col transition-all duration-300 ease-in-out w-60">
                  {children.map((child) => (
                    <NavLink key={child.path} to={child.path}>
                      {child.label}
                    </NavLink>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        <Link to="/contact">
          <button className="lg:block hidden border-none outline-none bg-[#b37558] px-4 py-2 text-white font-bold rounded-xl text-xs md:text-sm">
            Design & Quote
          </button>
        </Link>

        <div className="lg:hidden">
          <button
            onClick={() => setMenuOpen((prev) => !prev)}
            className="text-lg text-[#b37558]"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Responsive menu */}
      {menuOpen && (
        <div className="bg-yellow-100 w-full absolute left-0 top-full z-40 flex flex-col gap-2 px-4 py-4 transition-all duration-500 ease-in-out font-semibold uppercase text-xs">
          {navItems.map(({ path, label, children }) => (
            <div key={label}>
              {children ? (
                <div>
                  <button
                    onClick={() => setDesignOpen((prev) => !prev)}
                    className="flex justify-between items-center w-full font-semibold uppercase text-left px-4 py-2 text-xs"
                  >
                    <span>{label}</span>
                    {designOpen ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </button>
                  {designOpen && (
                    <div className="flex flex-col pl-4 transition-all duration-300 ease-in-out font-normal bg-white rounded-xl w-60">
                      {children.map((child) => (
                        <NavLink key={child.path} to={child.path}>
                          {child.label}
                        </NavLink>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <NavLink to={path}>{label}</NavLink>
              )}
            </div>
          ))}
          <Link
            to="/project-management"
            className="px-4 py-2 hover:bg-[#f5d9b3] rounded"
          >
            Project Management
          </Link>
          <Link to="/contact" className="px-4 py-2 hover:bg-[#f5d9b3] rounded">
            Contact Us
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
