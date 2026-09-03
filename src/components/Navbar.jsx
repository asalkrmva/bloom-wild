import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setSearch }) => {
    return (
        <div>
            <div className='flex w-full items-center justify-center gap-40 h-25 border-b-[1px] border-gray-500'>
                <Link to='/'>
                    <img src="/logo.png" width={'130px'} alt="" />
                </Link>
                <div className='w-160 border rounded-3xl flex gap-1 p-2 items-center'>
                    <img src="/search.png" width={'25px'} alt="" />
                    <input type="text" className='w-160  focus:outline-none ' placeholder="I'm looking for..." onChange={(e) => setSearch(e.target.value)} />
                </div>
                <div className='flex gap-10'>
                    <div className='flex flex-col items-center'>
                        <img src="/user-icon.png" width={'30px'} alt="" />
                        <p>Log in</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src="/like.png" width={'30px'} alt="" />
                        <p>Favourites</p>
                    </div>
                    <div className='flex flex-col items-center'>
                        <img src="/basket.png" width={'30px'} alt="" />
                        <p>Basket</p>
                    </div>
                </div>
            </div>
            <div className='flex gap-15 justify-center my-7'>
                <Link to='/send-flowers' className='flex flex-col items-center'>
                    <img src="/navbar/all.png" width={'100px'} alt="" />
                    <p>All</p>
                </Link>
                <Link to='/flowers' className='flex flex-col items-center'>
                    <img src="/navbar/flowers.png" width={'100px'} alt="" />
                    <p>Flowers</p>
                </Link>
                <Link to='/birthday' className='flex flex-col items-center'>
                    <img src="/navbar/bday.png" width={'100px'} alt="" />
                    <p>Birthday picks</p>
                </Link>
                <Link to='/food&drink' className='flex flex-col items-center'>
                    <img src="/navbar/food.png" width={'100px'} alt="" />
                    <p>Food & drink</p>
                </Link>
                <Link to='/plants' className='flex flex-col items-center'>
                    <img src="/navbar/plants.png" width={'100px'} alt="" />
                    <p>Plants</p>
                </Link>
                {/* <Link to='cardshop' className='flex flex-col items-center'>
                    <img src="/navbar/card-shop.png" width={'100px'} alt="" />
                    <p>The card shop</p>
                </Link> */}
            </div>
        </div>
    );
};

export default Navbar;