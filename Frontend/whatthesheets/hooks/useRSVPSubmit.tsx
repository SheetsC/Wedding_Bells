import { useState } from "react";

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
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
        setError(true);
      });
  };

  return { submitRSVP, loading, response, error };
};
