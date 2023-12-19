"use client";
//change for git
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

// Define the interface for params
interface EventPageParams {
  eventId: string;
  title: string;
  location: string;
  date: string;
  description: string;
}

// Type the props of the function
const Events: NextPage<{ params: EventPageParams }> = ({ params }) => {
  const eventId = parseInt(params.eventId);


  const [eventData, setEventData] = useState(params);

  useEffect(() => {
    if (eventId) {
      // Fetch event data
      fetch(`https://weddingbells-api.onrender.com/event/${eventId}`)
      //fetch(`http://localhost:8080/events/${eventId}`)
        .then(response => response.json())
        .then(data => {
          setEventData(data);
          console.log(data);
        })
        .catch(error => console.error('Error fetching event:', error));
    }
  }, [eventId]);

  return (
    <div>
      <h1>Event ID: {eventData.title}</h1>
      {/* Additional content */}
      {/* <h1>Event Name: {eventData}</h1> */}
    </div>
  );
};

export default Events;

  