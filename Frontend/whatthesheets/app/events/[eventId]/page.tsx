"use client";
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { RsvpForm } from './rsvpForm';
import Image from 'next/image';

export interface EventData {
  
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
    <div className="relative w-full min-h-screen">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/purposal.jpg"
          alt="Couple"
          layout="fill"
          objectFit="cover"
          className="transition-opacity duration-2000 ease-in opacity-100"
        />
      </div>

      {/* Blue Overlay */}
      <div className="absolute inset-0 bg-blue-200 bg-opacity-30"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {eventData ? (
          <div className="text-center p-4">
            <h1 className="text-xl text-white font-bold">{eventData.title}</h1>
            {/* Additional content based on eventData */}
            <RsvpForm eventData={eventData} />
          </div>
        ) : (
          <div className="text-white">Loading event data...</div>
        )}
      </div>
    </div>
  );
};

export default Events;
