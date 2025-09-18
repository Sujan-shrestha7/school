import { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/maxhub.png";
import { FaFacebook, FaYoutube, FaLinkedin, FaInfoCircle, FaBell, FaPhone } from "react-icons/fa";

type DropdownMenu = "about" | "notice" | "contact" | null;

const Header = (): JSX.Element => {
  const navigate = useNavigate();

  const [openDropdown, setOpenDropdown] = useState<DropdownMenu>(null);

  const toggleDropdown = (menu: DropdownMenu) => {
    if (openDropdown === menu) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(menu);
    }
  };

  return (
    <div className="absolute top-0 left-0 w-full z-50 ">
      <div className="w-full h-[80px] bg-transparent">
        <div className="flex justify-between items-center px-[100px] h-full">
          <div className="flex items-center">
            <img src={logo} className="h-[145px] w-[300px]" alt="Logo" />
          </div>

          <div className="header-info text-white flex gap-[25px] items-center mr-[40px] relative">
            {/* About Us */}
            <div className="relative">
              <p
                className="cursor-pointer hover:text-gray-400 select-none"
                onClick={() => toggleDropdown("about")}
              >
                About Us ▼
              </p>
              {openDropdown === "about" && (
                <div className="absolute top-full mt-1 bg-[#20265B] border border-gray-700 rounded shadow-lg w-[160px] z-20">
                  <ul>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/company")}
                    >
                      <FaInfoCircle /> Academic
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/team")}
                    >
                      <FaInfoCircle /> Mission & Vision
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/about/team")}
                    >
                      <FaInfoCircle /> Staffs
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

            {/* Notice */}
            <div className="relative">
              <p
                className="cursor-pointer hover:text-gray-400 select-none"
                onClick={() => toggleDropdown("notice")}
              >
                Notice ▼
              </p>
              {openDropdown === "notice" && (
                <div className="absolute top-full mt-1 bg-[#20265B] border border-gray-700 rounded shadow-lg w-[160px] z-20">
                  <ul>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/notice/latest")}
                    >
                      <FaBell /> Latest
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/notice/archive")}
                    >
                      <FaBell /> Archive
                    </li>
                  </ul>
                </div>
              )}
            </div>

            {/* Gallery */}
            <div className="relative">
              <p className="cursor-pointer hover:text-gray-400 select-none">Gallery</p>
            </div>

            {/* Contact Us */}
            <div className="relative">
              <p
                className="cursor-pointer hover:text-gray-400 select-none"
                onClick={() => toggleDropdown("contact")}
              >
                Contact Us ▼
              </p>
              {openDropdown === "contact" && (
                <div className="absolute top-full mt-1 bg-[#20265B] border border-gray-700 rounded shadow-lg w-[160px] z-20">
                  <ul>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/contact/email")}
                    >
                      <FaPhone /> Email
                    </li>
                    <li
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer"
                      onClick={() => navigate("/contact/phone")}
                    >
                      <FaPhone /> Phone
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
