import React, { useState } from 'react';
import AboutPage from '../components/AboutPage';
import FilterBtn from '../components/FilterBtn';
import FlowerCard from '../components/cards/FlowerCard';
import Reviews from '../components/Reviews';

const Flowers = ({ search,
  cart,
  addToCart,
  isLoggedIn,
  setIsLoginOpen }) => {
  const [filter, setFilter] = useState();

  return (
    <div>
      <div className='flex flex-col items-center pb-5'>
        <div className='w-160'>
          <AboutPage title='Fresh flowers & bouquets' text="Don't just send flowers, care wildly. From our famous long-lasting letterbox flowers, to seasonal bunches, and luxe hand-tied bouquets. Our stems are carefully sourced from trusted growers, and sent fresh in bud so they last way longer than regular flowers." />
        </div>
      </div>
      <FilterBtn setFilter={setFilter} filter={filter} />
      <FlowerCard
        search={search}
        cart={cart}
        addToCart={addToCart}
        isLoggedIn={isLoggedIn}
        setIsLoginOpen={setIsLoginOpen} />
      <Reviews />
    </div>
  );
};

export default Flowers;