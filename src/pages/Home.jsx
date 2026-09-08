import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import Ad from '../components/Ad';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import AboutSection from '../components/AboutSection';

const Home = () => {
  return (
    <div>
      <div className='bg-[#da9173] px-5 md:px-10 lg:px-15'>
        <div className='flex flex-col md:flex-row gap-8 lg:gap-15'>
          <img
            src="/home/home.png"
            className='w-full md:w-1/2 lg:w-[700px] h-auto object-cover'
            alt=""
          />

          <div className='w-full md:w-1/2 lg:w-125 flex flex-col justify-center items-center gap-5 py-8 md:py-0'>
            <Title text='Send flowers that glow' />
            <p className='text-center'>
              It's your last chance to catch summer's best stems before the season ends.
              Good thing our flower deliveries are bursting with them.
            </p>
            <Button text='Shop now' />
          </div>
        </div>
      </div>

      <div className='flex justify-center p-5 md:p-10'>
        <p className='flex flex-wrap justify-center items-center gap-2 md:gap-3 text-center'>
          Our customers say <b>Excellent</b>
          <img src="/rate.png" className='w-24 md:w-[120px]' alt="" />
          <b>4.6</b> average | <b>75,117</b> reviews
        </p>
      </div>

      <Ad />

      <div className='bg-pink-900 px-5 md:px-10 lg:px-15 text-white pt-8 md:pt-10 mb-5'>
        <div className='flex flex-col md:flex-row gap-8 lg:gap-15'>
          <div className='w-full md:w-1/2 lg:w-140 flex flex-col justify-center items-center gap-5 py-8 md:py-0'>
            <Title text="Something for every 'thank you'" />
            <p className='text-center'>
              It's your last chance to catch summer's best stems before the season ends.
              Good thing our flower deliveries are bursting with them.
            </p>
            <Button text='Shop now' />
          </div>

          <img
            src="/home/home.png"
            className='w-full md:w-1/2 lg:w-[700px] h-auto object-cover'
            alt=""
          />
        </div>
      </div>

      <AboutSection />
      <Footer />
    </div>
  );
};

export default Home;