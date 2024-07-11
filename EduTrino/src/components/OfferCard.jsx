import React from 'react'
import Button from './Button'
import "../App.css"

const OfferCard = (props) => {
  return (
    <div className='offerCard relative p-8 md:w-auto w-full h-auto border-2 border-white rounded-xl getShadow flex flex-col gap-11'>
    <div className='flex flex-col md:gap-24 gap-10'>
        <p className='cardHeading font-semibold'>{props.title}</p>
        <p className='cardContent mb-10'>{props.content}</p>
        
    </div>
    <Button title ='Go to'/>
    </div>
  )
}

export default OfferCard
