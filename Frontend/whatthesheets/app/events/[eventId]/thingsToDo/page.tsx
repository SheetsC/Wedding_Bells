"use client"
import { NextPage } from "next"
import Image from "next/image"

const ThingsToDO:NextPage = () =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <a href="https://www.steamboat.com/things-to-do/activity-details/scenic-gondola-rides" className="block border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                    src="https://www.steamboat.com/-/media/steamboat/winter2223/internal-heros/internalhero_gondolacabin.jpg?rev=748eefdfd7ee45369d1710279cec7f48?h=1308&w=2500&hash=99E5D65F8F8FC5B4B9F762CA1093F7AC"
                    alt='Gondola Rides'
                    width={200}
                    height={200}
                />
                <div className="p-4">
                    <p>Take a ride up Mt. Werner and enjoy the views that can only be appreciated from the Steamboat Gondola or Wild Blue Gondola. Scenic Gondola Rides are for foot passengers only. Guests will not be permitted to board the gondola with skis or snowboard equipment, and snowshoes are only allowed on the Steamboat Gondola. With an adult Scenic Gondola Ride ticket purchase, guest will receive a $10 dining voucher loaded directly on to their lift ticket card. Ticket includes unlimited rides for the date on the ticket.</p>
                </div>
            </a>
            <a href="https://www.steamboat.com/things-to-do/dining/oasis-sundeck" className="block border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image 
                    src="https://www.steamboat.com/-/media/steamboat/food-and-beverage/oasis/slider/2400x1350/oasis_valley_view.jpg?rev=0f92b4885aa64d94807207e2b599d9c4?h=1350&w=2400&hash=A760817FD06B25BC52CEF1A9C3AD77A3"
                    alt="Oasis Sundeck"
                    width={200}
                    height={200}
                />
                <div className="p-4">
                    <p>Located at the top of the gondola on the third floor of the Thunderhead building, lunch at the Oasis Sundeck comes with one of the best views in Steamboat Springs. Kick back and relax at 9,000 ft. above sea level while sipping your favorite drink or ice-cold beer. Enjoy a number of tasty bites from the grill while you take in the sweeping views of the Yampa Valley.</p>
                </div>
            </a>
            <a href="https://www.steamboatspringsboatrentals.com/" className="block border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image 
                    src="http://www.steamboatspringsboatrentals.com/wp-content/uploads/2020/07/IMG_4459.jpg"
                    alt="Steamboat Springs Boat Rental"
                    height={200}
                    width={200}
                />
                <div className="p-4">
                    <p>Steamboat Springs Boat Rentals™ at Stagecoach Marina located less than 15 miles south of town in Stagecoach State Park is your closest and most affordable option for boat rentals in Steamboat Springs. We are a family Owned Marina and our friendly staff consists of locals who know the lake and share a passion for boating and fishing. Let us help make your visit to the pristine Yampa Valley complete by spending a day at the lake.</p>
                </div>
            </a>
            <a href="https://www.colorado.com/oak-creek/scenic-attractions/state-parks/stagecoach-state-park" className="block border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                src="https://www.colorado.com/sites/default/files/styles/slideshow_slide_medium/public/listing_images/profile/5054/stagecoach18.jpg.webp?itok=yo6Cz_6s"
                alt="Stagecoach State Park attraction"
                width={200}
                height={200}
                />
                <div className="p-4">
                    <p>Stagecoach State Park sets the stage for great recreation in the lush Yampa Valley near Steamboat Springs.  Vistas and views are backdrops to the 820 surface acre reservoir providing renown lake and river fishing.  A year-round destination, the park makes a great base camp to explore the variety of festivals, sports, activities, and attractions of the area.</p>
                </div>
            </a>
        </div>
    )
}
export default ThingsToDO;