import React from 'react'
import bulbImg from '../../assets/images/hint-bulb.png'
import arrowImg from '../../assets/images/arrow.svg'

const MiddleHeading = (props) => {
  return (
      <div className='flex justify-between '>
          <img className='w-28 h-28 -rotate-6 mt-2 ml-5' src={bulbImg} alt="" />
          <div className=' text-center '>
              <h1 className=' mt-12 text-4xl font-extrabold'>{props.heading}</h1>
              <p className='mt-2' >{props.text }</p>
          </div>
          <img className='w-28 h-28 mr-5 -rotate-6 mt-2 text-shadowText' src={arrowImg} alt="" />
          
      
      </div>
      
  )
}

export default MiddleHeading
