import React from 'react';
import cityImage from '@/assets/city.jpeg';
import Image from 'next/image'; // Adjust the path if necessary

export const Homepage = () => {
  return (
    <div className="homepage-container">
      <div className="text-container">
        <h1 className="h1home">Buy or sell your tickets here</h1>
        <p className="para1home">
          eventLive is an all-in-one ticketing and marketing platform with
          everything you need.
        </p>
      </div>
      <Image
        src={cityImage}
        width={450}
        height={300}
        alt="City"
        className="city-image"
      />
    </div>
  );
};
