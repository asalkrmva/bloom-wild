import React from 'react'

const AboutPage = ({title, text}) => {
  return (
    <div className='text-center'>
        <h1 className='text-3xl font-semibold font-serif'>{title}</h1>
        <p className='text-gray-800'>{text}</p>
    </div>
  )
}

export default AboutPage;