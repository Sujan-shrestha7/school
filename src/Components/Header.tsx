import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../assets/images/maxhub.png";
import {
  FaFacebook,
  FaYoutube,
  FaLinkedin,
  FaInfoCircle,
  FaBars,
  FaTimes,
} from "react-icons/fa";

type DropdownMenu = "products" | "support" | "explore" | "partner" | null;

interface MenuItem {
  label: string;
  path: string;
}

interface MenuGroup {
  name: string;
  key: Exclude<DropdownMenu, null>; 
  items: MenuItem[];
}

const Header = (): JSX.Element => {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState<DropdownMenu>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside (desktop only)
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
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const menuItems: MenuGroup[] = [
    {
      name: "Products",
      key: "products",
      items: [
        { label: "Interactive Flat Panel", path: "/about/company" },
        { label: "Studio Setup", path: "/about/team" },
        { label: "Video Conference Camera", path: "/about/team" },
        { label: "Gallery", path: "/about/team" },
      ],
    },
    {
      name: "Support",
      key: "support",
      items: [
        { label: "Docs", path: "/about/company" },
        { label: "Help Center", path: "/about/team" },
      ],
    },
    {
      name: "Explore",
      key: "explore",
      items: [
        { label: "Blog", path: "/about/company" },
        { label: "News", path: "/about/team" },
      ],
    },
    {
      name: "Our Partners",
      key: "partner",
      items: [
        { label: "Partner 1", path: "/about/company" },
        { label: "Partner 2", path: "/about/team" },
      ],
    },
  ];

  return (
    <header className="absolute top-0 left-0 w-full z-50" ref={dropdownRef}>
      {/* Top Header */}
      <div className="w-full bg-transparent">
        <div className="flex justify-between items-center pr-6 md:pr-[100px] md:pl-[30px] h-[80px]">
          {/* Logo */}
          <img
            src={logo}
            className="h-[80px] w-[160px] md:h-[200px] md:w-[300px] object-contain md:pt-[10px]"
            alt="Logo"
          />

          {/* Desktop Menu */}
          <nav className="hidden md:flex gap-[25px] items-center text-white relative">
            {menuItems.map((menu) => (
              <div
                key={menu.key}
                className="relative"
                onMouseEnter={() => setOpenDropdown(menu.key)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <p className="cursor-pointer hover:text-gray-300 select-none transition-colors">
                  {menu.name}
                </p>
                {openDropdown === menu.key && (
                  <div className="absolute top-full mt-1 bg-[#2c2c2c] rounded-lg shadow-lg w-[220px] z-20">
                    <ul className="py-2">
                      {menu.items.map((item, index) => (
                        <li
                          key={index}
                          className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 cursor-pointer transition-colors"
                          onClick={() => navigate(item.path)}
                        >
                          <FaInfoCircle /> {item.label}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="text-white text-2xl md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="bg-[#1e1e1e] text-white flex flex-col px-6 py-4 space-y-3 md:hidden">
            {menuItems.map((menu) => (
              <div key={menu.key} className="border-b border-gray-700 pb-2">
                <p
                  className="cursor-pointer flex justify-between items-center font-medium"
                  onClick={() =>
                    setOpenDropdown(openDropdown === menu.key ? null : menu.key)
                  }
                >
                  {menu.name}
                </p>
                {openDropdown === menu.key && (
                  <ul className="ml-4 mt-2 space-y-2">
                    {menu.items.map((item, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 hover:text-gray-400 cursor-pointer"
                        onClick={() => {
                          navigate(item.path);
                          setMobileMenuOpen(false);
                        }}
                      >
                        <FaInfoCircle /> {item.label}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom Bar */}
      <div className="flex flex-wrap justify-between items-center h-[40px] w-full px-6 md:px-[200px] bg-transparent">
        <div className="flex flex-wrap items-center gap-3 text-sm md:gap-[15px] text-white">
          <a
            href="mailto:mail@gmail.com"
            className="hover:text-gray-300 transition-colors"
          >
            mail@gmail.com
          </a>
          <div className="hidden md:block w-[2px] h-[20px] bg-[#2E65B8]"></div>
          <a
            href="tel:9823252414"
            className="hover:text-gray-300 transition-colors"
          >
            Contact: 9823252414
          </a>
        </div>
        <div className="flex gap-4 md:gap-[20px] text-white text-[20px] md:text-[25px]">
          <a
            href="https://facebook.com"
            target="_blank"
            aria-label="Facebook"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://youtube.com"
            target="_blank"
            aria-label="YouTube"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaYoutube />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            aria-label="LinkedIn"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
