"use client";
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { RsvpForm } from './rsvpForm';
// Assuming this interface matches the structure of data returned from your API
interface EventData {
  
    eventId: number;
    title: string;
    location: string;
    date: string;
    description: string;

  
  
}
interface EventPageParams{
  eventId: number;
}

const Events: NextPage<{ params: EventPageParams }> = ({ params }) => {
  const eventId = params.eventId;

  const [eventData, setEventData] = useState<EventData | null>(null);

  useEffect(() => {
    if (eventId) {
      //fetch(`http://localhost:5021/event/${eventId}`)

      fetch(`https://weddingbells-api.onrender.com/event/${eventId}`)
        .then(response => response.json())
        .then(data => {setEventData(data); console.log(data)})
        .catch(error => console.error('Error fetching event:', error));
    }
  }, [eventId]);

  return (
    <div>
      {eventData ? (
        <div>
          <h1>Event ID: {eventData.title}</h1>
          {/* Additional content based on eventData */}
          <RsvpForm eventData={undefined} {...eventData} />

        </div>
      ) : (
        <div>Loading event data...</div>
      )}
    </div>
  );
};

export default Events;
