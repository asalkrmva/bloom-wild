import React from 'react';
import AboutPage from './AboutPage';
import ReviewCard from './ReviewCard';

const Reviews = () => {
    return (
        <div className='flex flex-col items-center py-25 gap-10'>
            <AboutPage title="We're the UK's most-loved online florist*" text="But don't just take our word for it. Here's what everyone's been saying about us..." />
            <ReviewCard />
            <div className='text-center'>
                <a href="https://uk.trustpilot.com/review/www.bloomandwild.com" target='_blank' className='font-semibold underline'>Read more reviews</a>
                <p>*Based on all UK online florists rated on Trustpilot or Reviews.co.uk</p>
            </div>
        </div>
    );
};

export default Reviews;