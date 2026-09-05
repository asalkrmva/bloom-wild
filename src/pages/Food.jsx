import React, { useState } from 'react';
import AboutPage from '../components/AboutPage';
import FilterBtn from '../components/FilterBtn';
import FoodCard from '../components/cards/FoodCard';
import Reviews from '../components/Reviews';

const Food = ({ search,
  cart,
  addToCart,
  isLoggedIn,
  setIsLoginOpen }) => {
  const [filter, setFilter] = useState();

  return (
    <div>
      <div className='flex flex-col items-center pb-5'>
        <div className='w-160'>
          <AboutPage title='Food & drink gifts' text="Not sure if they're a wine person, a cake person, or a cheese-before-dessert person? Good news - you don't have to choose. Our food and drink gifts cover all three, and everything in between. From letterbox treats to indulgent deli-style hampers, we make, bake and hand-pick every morsel from British brands and small sustainable makers. Sent with free next-day delivery across the UK." />
        </div>
      </div>
      <FilterBtn setFilter={setFilter} filter={filter} />
      <FoodCard
        search={search}
        cart={cart}
        addToCart={addToCart}
        isLoggedIn={isLoggedIn}
        setIsLoginOpen={setIsLoginOpen} />
      <Reviews />
    </div>
  );
};

export default Food;