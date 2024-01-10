import Image from "next/image";

export const TravelSection: React.FC = () => {
  const onLodgeClick = () => {
    window.open(
      "https://www.vacasa.com/usa/The-Lodge-At-Steamboat-CO/?utm_source=gmb&utm_medium=organic&utm_campaign=GMB-The-Lodge-Steamboat",
      "_blank"
    );
  };

  const onWorldClick = () => {
    window.open(
      "https://worldmark.wyndhamdestinations.com/us/en/resorts/united-states-of-america/colorado/steamboat-springs/worldmark-steamboat-springs",
      "_blank"
    );
  };

  return (
    <div className="mt-24 mb-12">
      <h1 className="text-3xl font-lora text-black tracking-wider text-center mb-8 underline italic">
        Hotel Options
      </h1>
      <div className="mt-8 flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-2xl font-lora text-black tracking-wider">
            The Lodge At Steamboat
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/the-lodge.jpeg"
              alt="The Ldoge Image"
              width={400}
              height={450}
            />
          </div>
          <button
            onClick={onLodgeClick}
            className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-80 cursor-pointer w-28 font-lora mx-auto"
          >
            WEBSITE
          </button>
        </div>
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-2xl font-lora text-black tracking-wider">
            The Village at Steamboat Springs
          </div>
          <div className="w-full md:w-1/2">
            <Image
              src="/worldmark-springs.jpeg"
              alt="The Ldoge Image"
              width={400}
              height={450}
            />
          </div>
          <button
            onClick={onWorldClick}
            className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-80 cursor-pointer w-28 font-lora mx-auto"
          >
            WEBSITE
          </button>
        </div>
      </div>
    </div>
  );
};
