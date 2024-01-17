import React from 'react';

// Renaming the interface to avoid conflicts with the global Event type
export interface EventDetails {
  id: number;
  image: string;
  title: string;
  date: string;
  location: string;
  cost: string;
}

// The props for the Inievent component now expects an array of EventDetails
interface Props {
  events: EventDetails[];
}

// The Inievent component definition
const Inievent: React.FC<Props> = ({ events }) => {
  // Check if events is not undefined or null
  if (!events) {
    // Handle the case where events is not provided
    return <div>No events to show.</div>;
  }

  return (
    <ul>
      {events.map((event) => (
        <li key={event.id}>
          <img src={event.image} alt={event.title} />
          <h2>{event.title}</h2>
          <p>
            <strong>Date:</strong> {event.date}
          </p>
          <p>
            <strong>Location:</strong> {event.location}
          </p>
          <p>
            <strong>Cost:</strong> {event.cost}
          </p>
          {/* You can include other details you wish to display here */}
          bash Copy code
        </li>
      ))}
    </ul>
  );
};

export default Inievent;
