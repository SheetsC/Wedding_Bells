import { useState } from "react";
import emailjs from 'emailjs-com'

export type RSVPData = {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phoneNumber: string;
  attending: string;
  addPlusOne: string;
  plusOneName: string;
};

export const useRSVPSubmit = () => {
  const [response, setResponse] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const submitRSVP = (values: RSVPData) => {
    setLoading(true);

    const newGuestAndRSVP = {
      firstName: values.firstName,
      lastName: values.lastName,
      emailAddress: values.emailAddress,
      phoneNumber: values.phoneNumber,
      attending: values.attending === "yes" ? true : false,
      mealPrefId: 1,
      eventId: 1,
      addPlusOne: values.addPlusOne === "yes" ? true : false,
      plusOneName: values.plusOneName,
    };

    fetch(`https://weddingbells-api.onrender.com/rsvp`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newGuestAndRSVP),
    })
      .then((r) => r.json())
      .then((data) => {
        setLoading(false);
        setResponse(data);
        setError(false);
        console.log(data);
        const emailData = {
          to_name: values.firstName + ' ' + values.lastName,
          to_email: values.emailAddress,
          from_name: "Kendall and Melissa",
          event_name: "Wedding Ceremony",
          event_location: "Steamboat Springs, Colorado",
          plus_one: values.plusOneName,
          event_date: "June 22nd, 2024"
          };
          emailjs.send('service_kandmwedding', 'template_60ncaoc', emailData, '8zUT3hCrM_RlE28_E')
          .then((response) => {
              console.log('Email sent successfully!', response.status, response.text);
          }, (err) => {
              console.log('Failed to send email...', err);
          });
      })
      
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError(true);
      });
  };

  return { submitRSVP, loading, response, error };
};
