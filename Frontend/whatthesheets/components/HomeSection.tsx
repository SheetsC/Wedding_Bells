import Image from "next/image";
import React from "react";

type SectionProps = {
  setSelectedNav: (nav: string) => void;
};
export const HomeSection: React.FC<SectionProps> = ({ setSelectedNav }) => {
  return (
    <>
      <div className="flex justify-center items-center w-full md:w-3/5 ">
        <Image
          src="/proposal.jpg"
          alt="Proposal Image"
          height={300}
          width={500}
          layout="responsive"
        />
      </div>
      <div className="flex md:hidden text-center p-8 gap-2 flex-col">
        <h1 className="text-3xl font-lora text-black tracking-wider">
          Melissa & Kendall
        </h1>
        <p className="text-md my-2 text-black mb-2 font-lora tracking-wider">
          JUNE 22, 2024 • STEAMBOAT SPRINGS, CO
        </p>
      </div>
      <div className="flex justify-center items-center w-full md:hidden">
        <Image
          src="/wedding-banner.png"
          alt="Wedding Banner Image"
          height={250}
          width={250}
        />
      </div>
      <div className="py-8 flex-grow gap-8 items-start justify-center hidden md:flex">
        <div className="text-3xl font-lora flex-grow  text-black w-1/2 text-center">
          JUNE 22, <br />
          2024
        </div>
        <div className="w-px h-32 bg-black" />
        <div className="text-3xl font-lora flex-grow text-black w-1/2 text-center ˝">
          STEAMBOAT SPRINGS,
          <br />
          COLORADO
        </div>
      </div>

      <button
        onClick={() => setSelectedNav("RSVP")}
        className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-80 cursor-pointer w-28 font-lora mx-auto"
      >
        RSVP
      </button>
      <br/>
      <button
      onClick={() => window.location.href = 'https://www.amazon.com/wedding/registry/3W1ROL8IK2P4C'}
      className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-80 cursor-pointer w-28 font-lora mx-auto"
      >
        Gift Registry
      </button>
      <button
        onClick={() => setSelectedNav("Photo Dump")}
        className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-80 cursor-pointer w-28 font-lora mx-auto"
      >
        Photo Dump
      </button>


      <main className="flex w-full py-8 text-black items-center justify-center">
        <section className=" flex flex-col md:items-center gap-2">
          <div className="flex flex-col items-center gap-2">
            <h3 className="md:text-4xl text-2xl  text-black font-lora mt-12 tracking-wider">
              WEDDING DAY
            </h3>
            <p className="md:text-2xl text-lg font-lora  tracking-wider text-black">
              June 22, 2024
            </p>
            <p className="md:text-2xl text-lg font-lora tracking-wider  text-black">
              10:00AM - 11:00PM
            </p>
          </div>
          <div className="h-px bg-gray-200 w-[90%] md:w-1/2"></div>
          <div className="my-4 flex flex-col md:flex-row gap-4 md:gap-8 p-4">
            <div className="text-lg md:text-2xl font-lora text-black tracking-widest	 w-full md:w-1/2">
              10:00AM - 11:00AM
            </div>
            <div className="text-lg md:text-2xl font-bold font-lora text-black tracking-wider w-full md:w-1/2">
              CEREMONY
              <p className="text-md md:text-xl font-lora font-normal text-black tracking-wide mt-2">
                Holy Name Catholic Church
              </p>
              <p className="text-md md:text-xl font-lora font-normal  text-black tracking-wide">
                524 Oak St, Steamboat Springs, CO 80487
              </p>
            </div>
          </div>
          <div className="h-px bg-gray-200 w-[90%] md:w-1/2"></div>{" "}
          <div className="my-4 flex flex-col md:flex-row gap-4 md:gap-8 p-4">
            <div className="text-lg md:text-2xl font-lora text-black tracking-widest w-full md:w-1/2">
              11:00AM - 12:00PM
            </div>
            <div className="text-lg md:text-2xl font-lora font-bold text-black tracking-wider w-full md:w-1/2 ">
              PHOTOS
              <p className="text-md md:text-xl font-lora font-normal  text-black tracking-wide mt-2">
                Holy Name Catholic Church
              </p>
              <p className="text-md md:text-xl font-lora font-normal text-black tracking-wide">
                524 Oak St, Steamboat Springs, CO 80487
              </p>
            </div>
          </div>
          <div className="h-px bg-gray-200 w-[90%] md:w-1/2"></div>{" "}
          <div className="my-4 flex flex-col md:flex-row gap-4 md:gap-8 p-4">
            <div className="text-lg md:text-2xl font-lora text-black tracking-widest w-full md:w-1/2">
              11:30AM - 4:30PM
            </div>
            <div className="text-lg md:text-2xl font-lora font-bold text-black tracking-wider w-full md:w-1/2">
              LUNCH
              <p className="text-md md:text-xl font-lora font-normal  text-black tracking-wide">
                Yampa River Icehouse
              </p>
              <p className="text-md md:text-xl font-lora font-normal text-black tracking-wide">
                  751 Yampa St. Steamboard Springs, CO 80487
              </p>
            </div>
          </div>
          <div className="h-px bg-gray-200 w-[90%] md:w-1/2"></div>{" "}
          <div className="my-4 flex flex-col md:flex-row gap-4 md:gap-8 p-4">
            <div className="text-lg md:text-2xl font-lora text-black tracking-widest w-1/2">
              8:00PM - 11:00PM
            </div>
            <div className="md:text-2xl text-lg font-lora font-bold text-black tracking-wider w-1/2">
              OPTIONAL AFTER PARTY
              <p className="text-md md:text-xl font-lora font-normal text-black tracking-wide mt-2">
                Schmiggitys
              </p>
              <p className="text-md md:text-xl font-lora font-normal text-black tracking-wide">
                821 Lincoln Ave, Steamboat Springs, CO 80487
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
