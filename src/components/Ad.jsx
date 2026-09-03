import React from 'react'
import Button from './Button';

const Ad = () => {
  return (
    <div className='bg-yellow-200 mx-15 my-10 py-5 flex justify-center items-center gap-100'>
        <div className='flex flex-col gap-5'>
            <p>Seen our TV advert?</p>
            <h1 className='text-3xl font-semibold'>Take £10 off your first order*</h1>
            <p>Order must be over £18</p>
        </div>
        <Button text='Claim offer' />
    </div>
  )
}

export default Ad