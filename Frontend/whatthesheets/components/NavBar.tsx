import React from "react";

type NavBarProps = {
  selectedNav: string;
  setSelectedNav: (nav: string) => void;
};

export const NavBar: React.FC<NavBarProps> = ({
  selectedNav,
  setSelectedNav,
}) => {
  const navItems = ["Home", "Travel", "Things To Do", "RSVP"];

  return (
    <nav className="bg-gray-100">
      <div className="container mx-auto px-4 py-4 flex justify-center items-center font-lora">
        <div className="flex space-x-10">
          {navItems.map((item) => (
            <div
              key={item}
              className={`text-gray-600 hover:text-gray-900 cursor-pointer  font-lora ${
                selectedNav === item ? "text-gray-900 font-bold" : ""
              }`}
              onClick={() => setSelectedNav(item)}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </nav>
  );
};
