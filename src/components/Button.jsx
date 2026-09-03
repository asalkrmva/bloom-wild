import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ text }) => {
  return (
    <Link to='/send-flowers'>
      <button className="flex justify-center w-30 p-3 text-white bg-black rounded-[5px] cursor-pointer">
        {text}
      </button>
    </Link>
  );
};

export default Button;