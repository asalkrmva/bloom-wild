import React from 'react';
import products from '../../database/products';
import Button from '../Button';

const Card = ({
    filter,
    search,
    cart = [],
    addToCart,
    removeFromCart,
    isLoggedIn,
    setIsLoginOpen }) => {

    let filteredProducts = products.filter((item) =>
        item.title.toLowerCase().includes((search || '').toLowerCase())
    );

    let sortedProducts = [...filteredProducts];

    if (filter === 'cheap') {
        sortedProducts.sort((a, b) => a.price - b.price);
    }

    if (filter === 'expensive') {
        sortedProducts.sort((a, b) => b.price - a.price);
    }

    return (
        <div className='flex justify-center items-center'>
            <div className='grid grid-cols-3 gap-8'>
                {sortedProducts.map((item) => {
                    const isAdded = cart.some((cartItem) => cartItem.id === item.id);

                    return (
                        <div key={item.id} className='w-105'>
                            <img src={item.img} width={'650px'} alt="" />
                            <div className='flex flex-col gap-1 py-3'>
                                <h1 className='text-2xl font-semibold'>{item.title}</h1>
                                <p>{item.subtitle}</p>
                                <div className='flex items-center gap-2'>
                                    <div className='flex'>
                                        <img src="/star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                        <img src="/star.png" alt="" />
                                    </div>
                                    <p className='text-[14px]'>{item.review}</p>
                                </div>
                            </div>
                            <div className='flex justify-between items-center pb-10'>
                                <p className='text-2xl font-semibold'>£{item.price}</p>
                                <button
                                    onClick={() => {
                                        if (!isLoggedIn) {
                                            setIsLoginOpen(true);
                                            return;
                                        }

                                        if (isAdded) {
                                            removeFromCart(item.id);
                                        } else {
                                            addToCart(item);
                                        }
                                    }}
                                    className={`px-10 py-4 rounded-[5px] cursor-pointer ${isAdded
                                        ? "bg-mauve-300 text-black"
                                        : "bg-black text-white"
                                        }`}
                                >
                                    {isAdded ? "Added" : "Add"}
                                </button>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Card;