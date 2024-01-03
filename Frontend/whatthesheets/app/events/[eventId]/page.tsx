"use client";
import { NextPage } from 'next';
import { useEffect, useState } from 'react';
import { RsvpForm } from './rsvpForm';
import Image from 'next/image';
import { JoinUs } from './joinUs';

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
    <div className="relative">
      {/* Fixed Background Image */}
      <div className="fixed inset-0 z-0">
        <Image
          src="/purposal.jpg"
          alt="Couple"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-blue-300 bg-opacity-40"></div>
      </div>

      {/* Scrollable Content */}
      
      <div className="relative z-10 pt-32 pb-8 min-h-screen">
        <div className="max-w-4xl mx-auto overflow-auto">
          <JoinUs/>
          <a href='https://wedding-bells.vercel.app/events/1/thingsToDo'></a>
          {eventData ? (
            <div className="text-center p-4 rounded-lg shadow-lg">
              <h1 className="text-xl font-bold">{eventData.title}</h1>
              {/* Additional content based on eventData */}
              <RsvpForm eventData={eventData} />
            </div>
          ) : (
            <div className="text-center text-white">Loading event data...</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Events;
