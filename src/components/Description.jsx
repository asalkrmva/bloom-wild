import React from 'react';

const Description = ({title, text}) => {
    return (
        <div>
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    );
};

export default Description;