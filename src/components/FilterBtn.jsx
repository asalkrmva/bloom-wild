import React from 'react';

const FilterBtn = ({ setFilter }) => {
    return (
        <form action="">
            <select name="Filter" id="" className='p-2 border-[1.5px] rounded-[5px] appearance-none text-[18px] text-center ml-15 mb-5 focus:outline-none font-serif' onChange={(e) => setFilter(e.target.value)}>
                <option value="filter" defaultValue={'Filter'}>Filter</option>
                <option value="cheap">Cheapest</option>
                <option value="expensive">Expensive</option>
            </select>
        </form>
    );
};

export default FilterBtn;