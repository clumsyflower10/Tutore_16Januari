import React from 'react';
import Contact from '../components/Contactform';
import Header from '../components/Header';
import { Footer } from '../components/Footer';
import '../app/globals.css';

const contact = () => {
  return (
    <div>
      <Header />
      <Contact />
      <Footer />
    </div>
  );
};

export default contact;
