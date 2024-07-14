import React, { useState } from "react";

type MobileMenuProps = {
  selectedNav: string;
  setSelectedNav: (nav: string) => void;
};

export const MobileMenu: React.FC<MobileMenuProps> = ({
  selectedNav,
  setSelectedNav,
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = ["Home", "Travel", "Things To Do", "RSVP", "Photo Dumps"];

  return (
    <nav className="bg-white md:hidden fixed top-0 left-0 w-full z-50">
      <div className="px-4 py-4 flex justify-between items-center">
        <button
          className="text-black hover:text-gray-900 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <CloseIcon /> : <HamburgerIcon />}
        </button>
        <div className="mx-auto text-black font-lora">M & K</div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white overflow-y-auto">
          <div className="pt-20 pb-4 flex flex-col items-center justify-center">
            {navItems.map((item) => (
              <div
                key={item}
                className={`text-black font-lora cursor-pointer py-4 text-center ${
                  selectedNav === item ? "underline" : ""
                }`}
                onClick={() => {
                  setSelectedNav(item);
                  setIsMenuOpen(false);
                }}
              >
                {item}
              </div>
            ))}
            <div
              className="text-black font-lora cursor-pointer py-4 text-center"
              onClick={() => {
                setSelectedNav("Home");
                setIsMenuOpen(false);
              }}
            >
              Close
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const HamburgerIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-16 6h16"
    />
  </svg>
);

const CloseIcon = () => (
  <svg
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    />
  </svg>
);

export default MobileMenu;
