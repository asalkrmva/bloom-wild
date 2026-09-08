import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ setSearch, cart, setIsCartOpen, username, setIsLoginOpen, logout }) => {

    return (
        <div>
            {/* TOP NAVBAR */}
            <div className='flex flex-col lg:flex-row w-full items-center justify-center gap-5 lg:gap-20 xl:gap-50 min-h-25 py-4 lg:py-0 border-b-[1px] border-gray-500'>

                <Link to='/'>
                    <img
                        src="/logo.png"
                        className='w-28 lg:w-[130px]'
                        alt=""
                    />
                </Link>

                <div className='w-[90%] sm:w-[70%] md:w-[60%] lg:w-100 xl:w-160 border rounded-3xl flex gap-1 p-2 items-center'>
                    <img
                        src="/search.png"
                        className='w-6 h-6'
                        alt=""
                    />

                    <input
                        type="text"
                        className='w-full focus:outline-none'
                        placeholder="I'm looking for..."
                        onChange={(e) => setSearch(e.target.value)}
                    />
                </div>

                <div className='flex gap-8 lg:gap-10'>
                    <div className="relative group">
                        <button
                            onClick={() => {
                                if (!username) {
                                    setIsLoginOpen(true);
                                }
                            }}
                            className="flex flex-col items-center cursor-pointer"
                        >
                            <img
                                src="/user-icon.png"
                                className='w-7 h-7'
                                alt=""
                            />
                            <p>{username || 'Log in'}</p>
                        </button>

                        {username && (
                            <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 hidden group-hover:block z-50">
                                <button
                                    onClick={logout}
                                    className="bg-white border border-gray-300 shadow-md px-4 py-2 rounded whitespace-nowrap cursor-pointer hover:bg-gray-100"
                                >
                                    Log out
                                </button>
                            </div>
                        )}
                    </div>

                    <button
                        onClick={() => setIsCartOpen(true)}
                        className='relative flex flex-col items-center cursor-pointer'
                    >
                        <img
                            src="/basket.png"
                            className='w-7 h-7'
                            alt=""
                        />

                        <p>Basket</p>

                        {cart.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-800 text-white rounded-full w-5 h-5 text-sm">
                                {cart.length}
                            </span>
                        )}
                    </button>
                </div>
            </div>

            {/* CATEGORY NAVBAR */}
            <div className='flex gap-5 sm:gap-8 md:gap-10 lg:gap-15 justify-center my-5 lg:my-7 px-2 overflow-x-auto'>

                <Link to='/send-flowers' className='flex flex-col items-center shrink-0'>
                    <img
                        src="/navbar/all.png"
                        className='w-20 lg:w-[100px]'
                        alt=""
                    />
                    <p>All</p>
                </Link>

                <Link to='/flowers' className='flex flex-col items-center shrink-0'>
                    <img
                        src="/navbar/flowers.png"
                        className='w-20 lg:w-[100px]'
                        alt=""
                    />
                    <p>Flowers</p>
                </Link>

                <Link to='/birthday' className='flex flex-col items-center shrink-0'>
                    <img
                        src="/navbar/bday.png"
                        className='w-20 lg:w-[100px]'
                        alt=""
                    />
                    <p>Birthday picks</p>
                </Link>

                <Link to='/food&drink' className='flex flex-col items-center shrink-0'>
                    <img
                        src="/navbar/food.png"
                        className='w-20 lg:w-[100px]'
                        alt=""
                    />
                    <p>Food & drink</p>
                </Link>

                <Link to='/plants' className='flex flex-col items-center shrink-0'>
                    <img
                        src="/navbar/plants.png"
                        className='w-20 lg:w-[100px]'
                        alt=""
                    />
                    <p>Plants</p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;