"use client";
import { HomeSection, MobileMenu, NavBar } from "@/components";
import { useState } from "react";
import Image from "next/image";

export const MainPageSection: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState("Home");

  const renderSection = () => {
    if (selectedNav === "Home") return <HomeSection />;
    if (selectedNav == "Travel") return <HomeSection />;
    if (selectedNav == "Things To Do") return <HomeSection />;
    if (selectedNav == "RSVP") return <HomeSection />;
    return <HomeSection />;
  };

  return (
    <div className="min-h-screen  bg-white flex flex-col md:justify-center md:items-center flex-start z-0">
      <MobileMenu selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      <div className=" justify-center items-center lg:w-1/6 w-1/10 hidden md:flex">
        <Image
          src="/wedding-banner.png"
          alt="Wedding Banner Image"
          height={300}
          width={500}
          layout="responsive"
        />
      </div>
      <header className="hidden md:flex text-center p-8 gap-2 flex-col">
        <h1 className="text-6xl font-lora text-black tracking-wider">
          Melissa & Kendall
        </h1>
        <p className="text-xl my-2 text-black mb-10 font-lora tracking-wider">
          JUNE 22, 2024 • STEAMBOAT SPRINGS, CO
        </p>
        <NavBar selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      </header>
      {renderSection()}
    </div>
  );
};
