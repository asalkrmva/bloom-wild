import React from 'react';

const ReviewCard = () => {
    const reviews = [
        {
            id: 1,
            username: 'Jill',
            review: 'Always beautiful x',
            date: '3 days ago'
        },
        {
            id: 2,
            username: 'Margaret',
            review: 'Ive used bloom and wild four times 3 for beautiful flowers and 2 cake boxes everything has always been delivered on time...',
            date: '3 days ago'
        },
        {
            id: 3,
            username: 'custdDomer',
            review: 'I ordered flowers to send to my relative who has been unwell on the 17th August, which were delivered to me on the 18th August...',
            date: '3 days ago'
        }
    ];

    return (
        <div>
            <div className='grid grid-cols-3 gap-5'>
                {reviews.map((item) => (
                    <div key={item.id} className='w-105 px-20 py-10 flex flex-col gap-3 bg-gray-100 justify-between items-center'>
                        <p className='text-green-500 text-2xl'>★★★★★</p>
                        <p>{item.review}x</p>
                        <p><b>{item.username}</b> {item.date}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReviewCard;