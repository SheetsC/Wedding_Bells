"use client";
import { NavBar } from "@/components/NavBar";
import Image from "next/image";
import { useState } from "react";

export const MainPageSection: React.FC = () => {
  const [selectedNav, setSelectedNav] = useState("Home");

  return (
    <div className="min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="flex justify-center items-center lg:w-1/6 w-1/10">
        <Image
          src="/wedding-banner.png"
          alt="Wedding Banner Image"
          height={300}
          width={500}
          layout="responsive"
        />
      </div>
      <header className=" flex text-center p-8 gap-2 flex-col">
        <h1 className="text-6xl font-lora text-black">Melissa & Kendall</h1>
        <p className="text-xl my-2 text-black mb-10 font-lora">
          JUNE 22, 2024 • STEAMBOAT SPRINGS, CO
        </p>
        <NavBar selectedNav={selectedNav} setSelectedNav={setSelectedNav} />
      </header>
      <div className="flex justify-center items-center w-3/5 ">
        <Image
          src="/proposal.jpg"
          alt="Proposal Image"
          height={300}
          width={500}
          layout="responsive"
        />
      </div>
      <main className="px-4 py-8 text-black">
        <section className=" flex flex-col items-center">
          <h3 className="text-3xl  text-black font-lora">WEDDING DAY</h3>
          <p className="text-xl  mt-4 text-black">June 22, 2024</p>
          <div className="my-4">
            <h4 className=" text-black">Ceremony</h4>
            <p className="text-xl  text-black">10:00AM-11:00AM</p>
            <p className="text-xl  text-black">Holy Name Catholic Church</p>
            <p className="text-xl  text-black">
              524 Oak St, Steamboat Springs, CO 80487
            </p>
          </div>
          <div className="my-4 text-black">
            <h4 className="">Photos (Optional for Guests)</h4>
            <p>11:00AM-12:00PM</p>
            <p className="text-xl  text-black">Holy Name Catholic Church</p>
            <p className="text-xl  text-black">
              524 Oak St, Steamboat Springs, CO 80487
            </p>
          </div>
          <div className="my-4">
            <h4 className="">Lunch</h4>
            <p>11:30AM-4:30PM</p>
            <p>Location TBD</p>
          </div>
          <div className="my-4 text-black">
            <h4 className="">Cocktail Hour</h4>
            <p>8PM</p>
            <p className="text-xl  text-black">Schmiggity’s</p>
            <p className="text-xl  text-black">
              821 Lincoln Ave, Steamboat Springs, CO 80487
            </p>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-sm my-8">
          <p>E&T 11.17.2023</p>
          <p>Created on The Knot</p>
          <p>Getting married? Create your wedding website for free.</p>
        </footer>
      </main>
    </div>
  );
};
