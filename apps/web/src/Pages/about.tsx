import React from 'react';
import Header from '../components/Header';
import '../app/globals.css';
import Homepage from '@/components/Homepage';
import { Benefits } from '@/components/Benefits';

const aboutpage = () => {
  return (
    <div>
      <Header />
      <Homepage />
      <Benefits />
    </div>
  );
};

export default aboutpage;
