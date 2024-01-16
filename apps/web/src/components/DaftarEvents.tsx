import React from 'react';

const events = [
  {
    id: 1,
    image: 'image1.jpg',
    title:
      'High Risk Food and Feed of Non-Animal Origin (HRFNAO) via the EU to GB',
    price: 'Free',
    location: 'Online',
    date: 'Thursday 9:00 AM EST',
  },
  {
    id: 2,
    image: 'image2.jpg',
    title: 'Motivation and Self-Worth - with Dr Lora Park',
    price: 'Free',
    location: 'Online',
    date: 'Friday 12:00 PM EST',
  },
  {
    id: 3,
    image: 'image3.jpg',
    title: 'Importing HRFNAO via the EU to GB : the new CHED Part 1 ...',
    price: 'Free',
    location: 'Online',
    date: 'Thursday 9:00 AM EST',
  },
  {
    id: 4,
    image: 'image4.jpg',
    title: 'WIC ANNUALTOUR 2024 #WICXWORLDRECORD',
    price: '$10.00',
    location: 'Online',
    date: 'VIRTUAL EVENT | 19-JAN-2024',
  },
  {
    id: 5,
    image: 'image5.jpg',
    title:
      'GUINNESS WORLD RECORDS™ TITLE ATTEMPT FOR THE MOST USERS IN A VISION BOARD VIDEO HANGOUT',
    price: '$50.00',
    location: 'Online',
    date: 'Friday 12:00 PM EST',
  },
  {
    id: 6,
    image: 'image6.jpg',
    title: 'Small Business, BIG Opportunities: Pathways to Procurement at NASA',
    price: 'Free',
    location: 'Online',
    date: 'January 25, 2024 1:00 p.m. to 2:30 p.m. ET',
  },
  {
    id: 7,
    image: 'image7.jpg',
    title: 'Prompt Engineering for Open-Source LLMs',
    price: 'Free',
    location: 'Online',
    date: 'Tuesday, January 23, 2024 10:00 AM Pacific Time',
  },
  {
    id: 8,
    image: 'image8.jpg',
    title: 'Addressing the Self-Harm Cycle with Adolescent Students',
    price: 'Free',
    location: 'Online',
    date: 'Monday, January 29, 2024 at 9:30-11:00 AM',
  },
  {
    id: 9,
    image: 'image9.jpg',
    title: 'Career Fair: Exclusive Tech Hiring Event',
    price: '$20.00',
    location: 'Online',
    date: 'Fri, Jan 26. 12:00 PM EST',
  },
  {
    id: 10,
    image: 'image10.jpg',
    title: 'ENDORSE & ENFORCE RELOADED VIRTUAL CLASS',
    price: '$50.00',
    location: 'Online',
    date: 'Saturday 12:00 PM EST',
  },
];

const DaftarEvents = () => {
  return (
    <div>
      {events.map((event) => (
        <div key={event.id}>
          <img src={event.image} alt={event.title} />
          <h2>{event.title}</h2>
          <p>Price: {event.price}</p>
          <p>Location: {event.location}</p>
          <p>Date: {event.date}</p>
        </div>
      ))}
    </div>
  );
};

export default DaftarEvents;
