import React, { useState } from 'react';
import products from '../database/products';
import Card from '../components/cards/Card';
import AboutPage from '../components/AboutPage';
import FilterBtn from '../components/FilterBtn';
import Reviews from '../components/Reviews';

const All = ({ search }) => {
  const [filter, setFilter] = useState();

  return (
    <div>
      <div className='flex flex-col items-center pb-5'>
        <AboutPage title='Our full collection' />
      </div>
      <FilterBtn setFilter={setFilter} />
      <Card filter={filter} search={search} />
      <Reviews />
    </div>
  );
};

export default All;