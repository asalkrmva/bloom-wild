import React from 'react';

const Basket = ({ cart, setIsCartOpen, removeFromCart, clearCart }) => {
    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

            <div className="bg-white w-[550px] min-h-[500px] max-h-[90vh] overflow-y-auto rounded-lg p-8 relative flex flex-col justify-between">
                
                <button
                    onClick={() => setIsCartOpen(false)}
                    className="absolute top-4 right-5 text-2xl cursor-pointer"
                >
                    ×
                </button>

                <h2 className="text-3xl font-semibold font-serif">
                    Your Basket
                </h2>
                <div className="flex flex-col gap-5 py-1">
                    {cart.map((item) => (
                        <div
                            key={item.id}
                            className="flex gap-4 items-center border-b pb-5"
                        >
                            {/* Mini image */}
                            <img
                                src={item.img}
                                alt=""
                                className="w-24 h-24 object-cover rounded-[5px]"
                            />
                            {/* Info */}
                            <div className="flex flex-col flex-1">
                                <h3 className="text-lg font-semibold">
                                    {item.title}
                                </h3>

                                <p className="text-gray-600">
                                    {item.subtitle}
                                </p>

                                <p className="font-semibold mt-2">
                                    £{item.price}
                                </p>
                            </div>
                            {/* Delete */}
                            <button
                                onClick={() => removeFromCart(item.id)}
                                className="text-sm underline cursor-pointer"
                            >
                                Delete
                            </button>
                        </div>
                    ))}
                </div>

                {/* Bottom */}
                <div className="flex justify-between items-center mt-8">

                    <p className="text-xl font-semibold">
                        Total: £
                        {cart.reduce(
                            (total, item) => total + item.price,
                            0
                        )}
                    </p>
                    <button
                        onClick={clearCart}
                        className="border border-black px-6 py-3 rounded-[5px] cursor-pointer"
                    >
                        Clear basket
                    </button>
                    <button
                        onClick={() => setIsCartOpen(false)}
                        className="bg-black text-white px-8 py-3 rounded-[5px] cursor-pointer"
                    >
                        Continue shopping
                    </button>
                </div>


            </div>

        </div>
    );
};

export default Basket;