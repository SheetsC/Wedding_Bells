"use client";
import { useState } from "react";
import Image from "next/image";
import {
  ThingsToDoSection,
  TravelSection,
  RSVPSection,
  HomeSection,
  MobileMenu,
  NavBar,
} from "@/components";

export const MainPageSection: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState("Home");

  const renderSection = () => {
    if (selectedNav === "Home")
      return <HomeSection setSelectedNav={setSelectedNav} />;
    if (selectedNav == "Travel") return <TravelSection />;
    if (selectedNav == "Things To Do") return <ThingsToDoSection />;
    if (selectedNav == "RSVP") return <RSVPSection />;
    return <HomeSection setSelectedNav={setSelectedNav} />;
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
