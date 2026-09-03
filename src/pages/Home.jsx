import React from 'react';
import Button from '../components/Button';
import Title from '../components/Title';
import Ad from '../components/Ad';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <div className='bg-[#da9173] px-15'>
        <div className='flex gap-15'>
          <img src="/home/home.png" width={'700px'} alt="" />
          <div className='w-125 flex flex-col justify-center items-center gap-5'>
            <Title text='Send flowers that glow' />
            <p className='text-center'>It's your last chance to catch summer's best stems before the season ends. Good thing our flower deliveries are bursting with them.</p>
            <Button text='Shop now' />
          </div>
        </div>
      </div>
      <div className='flex justify-center p-10'>
        <p className='flex gap-3'>Our customers say <b>Excellent</b> <img src="/rate.png" width={'120px'} alt="" /> <b>4.6</b>average | <b>75,117</b> reviews </p>
      </div>
      <Ad />
      <div>
        <div className='flex justify-between items-center mx-15 mt-15'>
          <div className='flex flex-col items-start'>
            <Title text='In bloom. And in demand.' />
            <p className='text-2xl'>These are the gifts you all can't get enough of. (And neither can we.)</p>
          </div>
          <Link to='/send-flowers' className='font-bold underline text-2xl'>Shop all.</Link>
        </div>

      </div>
    </div>
  );
};

export default Home;