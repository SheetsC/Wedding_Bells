"use client"
import { NextPage } from "next"
import Image from "next/image"

const ThingsToDO:NextPage = () =>{
    return(
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <a href="https://www.steamboat.com/things-to-do/activity-details/scenic-gondola-rides" className="block border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                    src="data:image/jpeg;base64,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"
                    alt='Gondola Rides'
                    layout="fill"
                    objectFit="cover"
                />
                <div className="p-4">
                    <p>Take a ride up Mt. Werner and enjoy the views that can only be appreciated from the Steamboat Gondola or Wild Blue Gondola. Scenic Gondola Rides are for foot passengers only. Guests will not be permitted to board the gondola with skis or snowboard equipment, and snowshoes are only allowed on the Steamboat Gondola. With an adult Scenic Gondola Ride ticket purchase, guest will receive a $10 dining voucher loaded directly on to their lift ticket card. Ticket includes unlimited rides for the date on the ticket.</p>
                </div>
            </a>
            <a href="https://www.steamboat.com/things-to-do/dining/oasis-sundeck" className="block border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image 
                    src="data:image/jpeg;base64,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"
                    alt="Oasis Sundeck"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="p-4">
                    <p>Located at the top of the gondola on the third floor of the Thunderhead building, lunch at the Oasis Sundeck comes with one of the best views in Steamboat Springs. Kick back and relax at 9,000 ft. above sea level while sipping your favorite drink or ice-cold beer. Enjoy a number of tasty bites from the grill while you take in the sweeping views of the Yampa Valley.</p>
                </div>
            </a>
            <a href="https://www.steamboatspringsboatrentals.com/" className="block border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image 
                    src="http://www.steamboatspringsboatrentals.com/wp-content/uploads/2020/07/IMG_4459.jpg"
                    alt="Steamboat Springs Boat Rental"
                    layout="fill"
                    objectFit="cover"
                    
                />
                <div className="p-4">
                    <p>Steamboat Springs Boat Rentals™ at Stagecoach Marina located less than 15 miles south of town in Stagecoach State Park is your closest and most affordable option for boat rentals in Steamboat Springs. We are a family Owned Marina and our friendly staff consists of locals who know the lake and share a passion for boating and fishing. Let us help make your visit to the pristine Yampa Valley complete by spending a day at the lake.</p>
                </div>
            </a>
            <a href="https://www.colorado.com/oak-creek/scenic-attractions/state-parks/stagecoach-state-park" className="block border border-gray-200 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <Image
                    src="https://www.colorado.com/sites/default/files/styles/slideshow_slide_medium/public/listing_images/profile/5054/stagecoach18.jpg.webp?itok=yo6Cz_6s"
                    alt="Stagecoach State Park attraction"
                    layout="fill"
                    objectFit="cover"
                />
                <div className="p-4">
                    <p>Stagecoach State Park sets the stage for great recreation in the lush Yampa Valley near Steamboat Springs.  Vistas and views are backdrops to the 820 surface acre reservoir providing renown lake and river fishing.  A year-round destination, the park makes a great base camp to explore the variety of festivals, sports, activities, and attractions of the area.</p>
                </div>
            </a>
        </div>
    )
}
export default ThingsToDO;