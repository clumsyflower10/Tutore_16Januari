import React from 'react';
import EventSearchComponent from '../components/FindEvents';
import Footer from '../components/Footer';
//import Header from '../components/Header';
import '../app/globals.css';
import Eventslist from '@/components/Eventslist';

const findeventslist = () => {
  return (
    <div>
      {/* <div>
        <Header />
      </div> */}
      <div>
        <EventSearchComponent />
      </div>
      <div>
        <Eventslist />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default findeventslist;
