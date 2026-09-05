import React from 'react';
import products from '../../database/products';
import Button from '../Button';

const FoodCard = ({ filter,
    search,
    cart = [],
    addToCart,
    isLoggedIn,
    setIsLoginOpen }) => {

    let foods = products.filter((e) => e.category === 'food&drink');

    foods = foods.filter((item) =>
        item.title.toLowerCase().includes((search || '').toLowerCase())
    );

    if (filter === 'cheap') {
        foods.sort((a, b) => a.price - b.price);
    }

    if (filter === 'expensive') {
        foods.sort((a, b) => b.price - a.price);
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
                                        if (isAdded) return;

                                        if (!isLoggedIn) {
                                            setIsLoginOpen(true);
                                            return;
                                        }

                                        addToCart(item);
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

export default FoodCard;