"use client";

// import { NextPage } from 'next';
// import { useEffect, useState } from 'react';

// // Define the interface for params
// interface EventPageParams {
//   eventId: number;
//   title: string;
//   location: string;
//   date: string;
//   description: string;

// }

// // Type the props of the function
// const Events: NextPage<{ params: EventPageParams }> = ({ params }) => {
//   const eventId = params.eventId;


//   const [eventData, setEventData] = useState(params);

//   useEffect(() => {
//     if (eventId) {
//       // Fetch event data
//       fetch(`https://weddingbells-api.onrender.com/event/${eventId}`)
//       //fetch(`http://localhost:8080/events/${eventId}`)
//         .then(response => response.json())
//         .then(data => {
//           setEventData(data);
//           console.log(data);
//         })
//         .catch(error => console.error('Error fetching event:', error));
//     }
//   }, [eventId]);

//   return (
//     <div>
//       <h1>Event ID: {eventData.title}</h1>
//       {/* Additional content */}
//       {/* <h1>Event Name: {eventData}</h1> */}
//     </div>
//   );
// };

// export default Events;
import { NextPage } from 'next';
import { useEffect, useState } from 'react';

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
      fetch(`https://weddingbells-api.onrender.com/event/${eventId}`)
        .then(response => response.json())
        .then(data => setEventData(data))
        .catch(error => console.error('Error fetching event:', error));
    }
  }, [eventId]);

  return (
    <div>
      {eventData ? (
        <div>
          <h1>Event ID: {eventData.title}</h1>
          {/* Additional content based on eventData */}
        </div>
      ) : (
        <div>Loading event data...</div>
      )}
    </div>
  );
};

export default Events;
