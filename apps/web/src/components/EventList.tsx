import React from 'react';

interface EventListProps {
  title: string;
  date: string;
  price: number;
  location: string;
  imageUrl: string;
}

const EventList: React.FC<EventListProps> = ({
  title,
  date,
  price,
  location,
  imageUrl,
}) => {
  const formatPrice = (price: number): string => {
    return price === 0
      ? 'Gratis'
      : new Intl.NumberFormat('id-ID', {
          style: 'currency',
          currency: 'IDR',
        }).format(price);
  };

  return (
    <div className="event-card">
      <img src={imageUrl} alt={title} className="event-image" />
      <div className="event-info">
        <h2 className="event-title">{title}</h2>
        <p className="event-date">{date}</p>
        <p className="event-price">{formatPrice(price)}</p>
        <p className="event-location">{location}</p>
      </div>
    </div>
  );
};

export default EventList;
