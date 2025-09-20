import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/maxhub.png";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInfoCircle,
} from "react-icons/fa";

type DropdownMenu = "products" | "support" | "explore" | "partner" | null;

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<DropdownMenu>(null);

  // ref for the dropdown wrapper
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="absolute top-0 left-0 w-full z-50" ref={dropdownRef}>
      <div className="w-full h-[80px] bg-transparent">
        <div className="flex justify-between items-center px-[100px] h-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src={logo} className="h-[145px] w-[300px]" alt="Logo" />
          </div>

          {/* Navigation */}
          <div className="header-info text-white flex gap-[25px] items-center mr-[40px] relative">
            {/** Products */}
            <div className="relative">
              <p
                className="cursor-pointer hover:text-gray-400 select-none"
                onClick={() =>
                  setOpenDropdown(openDropdown === "products" ? null : "products")
                }
              >
                Products
              </p>
              {openDropdown === "products" && (
                <div className="absolute top-full mt-1 bg-[#a7aba8] rounded shadow-lg md:w-[200px] z-20">
                  <ul>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/company")}
                    >
                      <FaInfoCircle /> Interactive Flat Panel
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/team")}
                    >
                      <FaInfoCircle /> Studio Setup
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/team")}
                    >
                      <FaInfoCircle /> Video Conference Camera
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/team")}
                    >
                      <FaInfoCircle /> Gallery
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/** Support */}
            <div className="relative">
              <p
                className="cursor-pointer hover:text-gray-400 select-none"
                onClick={() =>
                  setOpenDropdown(openDropdown === "support" ? null : "support")
                }
              >
                Support
              </p>
              {openDropdown === "support" && (
                <div className="absolute top-full mt-1 bg-[#a7aba8] rounded shadow-lg md:w-[200px] z-20">
                  <ul>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/company")}
                    >
                      <FaInfoCircle /> Docs
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/team")}
                    >
                      <FaInfoCircle /> Help Center
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/** Explore */}
            <div className="relative">
              <p
                className="cursor-pointer hover:text-gray-400 select-none"
                onClick={() =>
                  setOpenDropdown(openDropdown === "explore" ? null : "explore")
                }
              >
                Explore
              </p>
              {openDropdown === "explore" && (
                <div className="absolute top-full mt-1 bg-[#a7aba8] rounded shadow-lg md:w-[200px] z-20">
                  <ul>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/company")}
                    >
                      <FaInfoCircle /> Blog
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/team")}
                    >
                      <FaInfoCircle /> News
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/** Partners */}
            <div className="relative">
              <p
                className="cursor-pointer hover:text-gray-400 select-none"
                onClick={() =>
                  setOpenDropdown(openDropdown === "partner" ? null : "partner")
                }
              >
                Our Partners
              </p>
              {openDropdown === "partner" && (
                <div className="absolute top-full mt-1 bg-[#a7aba8] rounded shadow-lg md:w-[200px] z-20">
                  <ul>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/company")}
                    >
                      <FaInfoCircle /> Partner 1
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/team")}
                    >
                      <FaInfoCircle /> Partner 2
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="flex flex-wrap justify-between items-center h-[35px] w-full px-[200px]">
        <div className="flex flex-wrap justify-center items-center gap-[15px]">
          <a
            href="mailto:mail@gmail.com"
            className="text-white hover:text-gray-400 no-underline"
          >
            mail@gmail.com
          </a>
          <div className="w-[2px] h-[20px] bg-[#2E65B8]"></div>
          <a
            href="tel:9823252414"
            className="no-underline text-white hover:text-gray-400"
          >
            Contact: 9823252414
          </a>
        </div>
        <div className="flex gap-[20px] text-white text-[25px]">
          <a
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            rel="noopener noreferrer"
          >
            <FaFacebook className="text-white" />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            aria-label="YouTube"
            rel="noopener noreferrer"
          >
            <FaYoutube className="text-white" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="text-white" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
