import React, { useState } from 'react';
import AboutPage from '../components/AboutPage';
import FilterBtn from '../components/FilterBtn';
import FlowerCard from '../components/cards/FlowerCard';
import Reviews from '../components/Reviews';

const Plants = ({ search,
  cart,
  addToCart,
  isLoggedIn,
  setIsLoginOpen }) => {
  const [filter, setFilter] = useState();

  return (
    <div>
      <div className='flex flex-col items-center pb-5'>
        <div className='w-160'>
          <AboutPage title='Plant gifts' text="Brighten their day with plant delivery made easy. Explore plant gifts and plants by post for new homes, thank yous, get well wishes and more." />
        </div>
      </div>
      <FilterBtn setFilter={setFilter} />
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

export default Plants;