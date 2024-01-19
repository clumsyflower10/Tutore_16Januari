// 'use client';
// import React from 'react';
// import Image from 'next/image';
// import event1 from '../assets/event1.jpeg';

// const events = [
//   {
//     title: 'Music Festival',
//     location: 'Jakarta, Indonesia',
//     date: '2024-01-25',
//     price: 150000, // Indonesian Rupiah
//     imageUrl: (
//       <Image src="/event1.jpeg" width={200} height={250} alt="event1" />
//     ),
//   },
//   {
//     title: 'Art Exhibition',
//     location: 'Yogyakarta, Indonesia',
//     date: '2024-02-10',
//     price: 100000, // Indonesian Rupiah
//     imageUrl: '/assets/event2.png',
//   },
//   {
//     title: 'Food Carnival',
//     location: 'Bandung, Indonesia',
//     date: '2024-03-15',
//     price: 0, // Free Event
//     imageUrl: '/assets/event3.png',
//   },
//   {
//     title: 'Tech Conference',
//     location: 'Surabaya, Indonesia',
//     date: '2024-04-20',
//     price: 250000, // Indonesian Rupiah
//     imageUrl: '/images/event4.png',
//   },
//   {
//     title: 'Cultural Parade',
//     location: 'Bali, Indonesia',
//     date: '2024-05-05',
//     price: 50000, // Indonesian Rupiah
//     imageUrl: '/images/event5.png',
//   },
// ];

// const EventList: React.FC = () => {
//   const formatPrice = (price) => {
//     return new Intl.NumberFormat('id-ID', {
//       style: 'currency',
//       currency: 'IDR',
//     }).format(price);
//   };

//   return (
//     <div className="event-list">
//       {events.map((event, index) => (
//         <div key={index} className="event-card">
//           <img src={event.imageUrl} alt={event.title} className="event-image" />
//           <div className="event-info">
//             <h3 className="event-title">{event.title}</h3>
//             <p className="event-location">{event.location}</p>
//             <p className="event-date">
//               {new Date(event.date).toLocaleDateString('id-ID')}
//             </p>
//             <p className="event-price">
//               {event.price === 0 ? 'Free' : formatPrice(event.price)}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default EventList;
