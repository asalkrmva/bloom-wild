import React, { useState } from 'react';
import AboutPage from '../components/AboutPage';
import FilterBtn from '../components/FilterBtn';
import BirthdayCard from '../components/cards/BirthdayCard';
import Reviews from '../components/Reviews';

const Birthday = ({ search }) => {
  const [filter, setFilter] = useState();

  return (
    <div>
      <div className='flex flex-col items-center pb-5'>
        <div className='w-160'>
          <AboutPage title='Birthday Gifts' text='Every birthday is a big birthday in our book. Send them something to mark the occasion with our letterbox birthday gifts, carefully curated for your faves to enjoy.' />
        </div>
      </div>
      <FilterBtn setFilter={setFilter} />
      <BirthdayCard filter={filter} search={search} />
      <Reviews />
    </div>
  );
};

export default Birthday;