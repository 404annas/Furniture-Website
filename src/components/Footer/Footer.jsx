import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#F7E7CE] body-font text-black">
      <div className="px-6 py-4 mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <Link to="/">
          <img
            className="w-16 h-14 object-contain"
            src="https://designz.dwell-rich.com/wp-content/uploads/2023/06/DR_set-removebg-preview-e1701030039725.png"
            alt="Logo"
          />
        </Link>

        <div className="flex flex-col items-center justify-center gap-2">
          <p className="text-xs sm:text-sm font-medium text-center sm:text-left">
            Dwell-Rich Designz | —
            <a
              className="ml-1 underline hover:text-[#18110e] transition duration-200"
              href="/"
              rel="noopener noreferrer"
            >
              Exclusifdesignz.co.uk
            </a>
          </p>
          <p className="text-xs sm:text-sm font-medium text-center sm:text-left">
            Kingston Road, Kingston upon thames, Surrey, London, UK | Tel:
            07803326891
          </p>
        </div>

        <div className="flex space-x-4 justify-center">
          <a
            href="https://www.facebook.com/share/1HrwFQxPmY/?mibextid=wwXIfr"
            target="_blank"
            className="text-blue-600 hover:text-blue-800 transition duration-200"
          >
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 md:w-7 md:h-7"
              viewBox="0 0 24 24"
            >
              <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
            </svg>
          </a>
          <a className="text-teal-600 hover:text-teal-800 transition duration-200">
            <svg
              fill="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 md:w-7 md:h-7"
              viewBox="0 0 24 24"
            >
              <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
            </svg>
          </a>
          <a className="text-red-600 hover:text-red-800 transition duration-200">
            <svg
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="w-6 h-6 md:w-7 md:h-7"
              viewBox="0 0 24 24"
            >
              <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
            </svg>
          </a>
          <a className="text-blue-600 hover:text-blue-800 transition duration-200">
            <svg
              fill="currentColor"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="0"
              className="w-6 h-6 md:w-7 md:h-7"
              viewBox="0 0 24 24"
            >
              <path
                stroke="none"
                d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
              ></path>
              <circle cx="4" cy="4" r="2" stroke="none"></circle>
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
