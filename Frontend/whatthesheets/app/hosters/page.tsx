"use client";
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

// Define the interface for params
interface HosterPageParams {
  eventId: string;
}

// Type the props of the function
const Hosters: NextPage<{ params: HosterPageParams }> = ({ params }) => {
  const MyHosterId = params.eventId;

  const [HosterData, setHosterData] = useState(null);

  useEffect(() => {
     {
      // Fetch event data
      fetch(`https://weddingbells-api.onrender.com/hoster`)
        .then(response => response.json())
        .then(data => {
          setHosterData(data);
          console.log(data);
        })
        .catch(error => console.error('Error fetching event:', error));
    }
  }, [MyHosterId]);

  return (
    <div>
      <h1>Hoster ID: {MyHosterId}</h1>
      {/* Additional content */}
      {/* <h1>Event Name: {eventData}</h1> */}
    </div>
  );
};

export default Hosters;