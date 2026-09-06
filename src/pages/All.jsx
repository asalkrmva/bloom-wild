import React, { useState } from 'react';
import products from '../database/products';
import Card from '../components/cards/Card';
import AboutPage from '../components/AboutPage';
import FilterBtn from '../components/FilterBtn';
import Reviews from '../components/Reviews';
import Footer from '../components/Footer';

const All = ({ search,
  cart,
  addToCart,
  isLoggedIn,
  removeFromCart,
  setIsLoginOpen }) => {
  const [filter, setFilter] = useState();

  return (
    <div>
      <div className='flex flex-col items-center pb-5'>
        <AboutPage title='Our full collection' />
      </div>
      <FilterBtn setFilter={setFilter} />
      <Card
        filter={filter}
        search={search}
        cart={cart}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        isLoggedIn={isLoggedIn}
        setIsLoginOpen={setIsLoginOpen} />
      <Reviews />
      <Footer />
    </div>
  );
};

export default All;