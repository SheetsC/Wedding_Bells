import Image from "next/image";

export const ThingsToDoSection: React.FC = () => {
  const onStraberryClick = () => {
    window.open("https://strawberryhotsprings.com/", "_blank");
  };

  const onSteamClick = () => {
    window.open(
      "https://www.steamboat.com/things-to-do/activity-details/scenic-gondola-rides",
      "_blank"
    );
  };

  const onOasisClick = () => {
    window.open(
      "https://www.steamboat.com/things-to-do/dining/oasis-sundeck",
      "_blank"
    );
  };
  const onRentalClick= () => {
    window.open("https://www.steamboatspringsboatrentals.com/",
    "_blank"
    );
  };
  return (
    <div className="mt-24 mb-12">
      <h1 className="text-3xl font-lora text-black tracking-wider text-center mb-8 underline italic">
        Things To Do
      </h1>
      <div className="mt-8 flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-2xl font-lora text-black tracking-wider">
            Strawberry Hotsprings
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2 ">
            <Image
              src="/hotsprings.jpeg"
              alt="Hot spring"
              width={300}
              height={350}
            />
          </div>
          <div className="text-lg font-lora text-black text-center lg:w-1/2" >
            Strawberry Park Hot Springs blends the pure natural beauty of the
            environment with the unique stone masonry of our thermal pools. We
            will undoubtedly impress you with each visit! Our facility is unique
            and unlike anything you have seen before. Overnight lodging rentals
            are popular year round. Hiking, biking, and snowshoeing trails are
            conveniently nearby in Routt National Forest. We are only a short
            drive or shuttle trip from downtown Steamboat Springs and the
            Steamboat Ski Area.
          </div>
          <button
            onClick={onStraberryClick}
            className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-80 cursor-pointer w-28 font-lora mx-auto"
          >
            WEBSITE
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-2xl font-lora text-black tracking-wider">
            Scenic Gondola ride
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2">
            <Image
              src="/gondala.jpeg"
              alt="Hot spring"
              width={300}
              height={350}
            />
          </div>
          <div className="text-lg font-lora text-black text-center lg:w-1/2">
            Take a ride up Mt. Werner and enjoy the views that can only be
            appreciated from the Steamboat Gondola or Wild Blue Gondola.Scenic
            Gondola Rides are for foot passengers only. Guests will not be
            permitted to board the gondola with skis or snowboard equipment, and
            snowshoes are only allowed on the Steamboat Gondola. With an adult
            (age 13+) Scenic Gondola Ride ticket purchase, guest will receive a
            $10 dining voucher loaded directly on to their lift ticket card.
            Ticket includes unlimited rides for the date on the ticket.
          </div>
          <button
            onClick={onSteamClick}
            className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-80 cursor-pointer w-28 font-lora mx-auto"
          >
            WEBSITE
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-2xl font-lora text-black tracking-wider">
            Oasis Sundeck
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2">
            <Image
              src="/oasis.webp"
              alt="Hot spring"
              width={300}
              height={350}
            />
          </div>
          <div className="text-lg font-lora text-black text-center lg:w-1/2">
            Located at the top of the gondola on the third floor of the
            Thunderhead building, lunch at the Oasis Sundeck comes with one of
            the best views in Steamboat Springs. Kick back and relax at 9,000
            ft. above sea level while sipping your favorite drink or ice-cold
            beer. Enjoy a number of tasty bites from the grill while you take in
            the sweeping views of the Yampa Valley.
          </div>
          <button
            onClick={onOasisClick}
            className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-80 cursor-pointer w-28 font-lora mx-auto"
          >
            WEBSITE
          </button>
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-12 items-center justify-center">
        <div className="flex flex-col gap-2 items-center justify-center">
          <div className="text-2xl text-center font-lora text-black tracking-wider">
            Steamboat Springs Boat Rentals
          </div>
          <div className="flex items-center justify-center w-full md:w-1/2">
            <Image
              src="/rentals.jpeg"
              alt="boat dock"
              width={300}
              height={350}
            />
          </div>
          <div className="text-lg font-lora text-black text-center lg:w-1/2 ">
          Steamboat Springs Boat Rentals™ at Stagecoach Marina located less 
          than 15 miles south of town in Stagecoach State Park is your closest 
          and most affordable option for boat rentals in Steamboat Springs. 
          We are a family Owned Marina and our friendly staff consists of 
          locals who know the lake and share a passion for boating and fishing. 
          Let us help make your visit to the pristine Yampa Valley complete by 
          spending a day at the lake
          </div>
          <button
            onClick={onRentalClick}
            className="bg-black text-white py-2 px-4 rounded hover:bg-opacity-80 cursor-pointer w-28 font-lora mx-auto"
          >
            WEBSITE
          </button>
        </div>
      </div>
    </div>
  );
};
