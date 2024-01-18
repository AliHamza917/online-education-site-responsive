import React from 'react'
import Img from '../../../assets/images/hero-banner.png'
import GlobalHeading from '../../../global/components/GlobalHeading'

const HeroBanner = () => {
  return (
      <div className=' grid grid-col-1 px-52 justify-center lg:grid-cols-2 lg:px-0'>
          <div className="text "><GlobalHeading txt1='The' txtOrange1='Smart' txt2='Choice For' txtOrange2='Future' linebreak />
            <p className='leading-9 w-[350px] text-gray'>Elearn is a global training provider based across the UK that specialises in accredited and bespoke training courses. We crush the...</p>
          </div>
          <div className="img"><img src={Img} alt="" /></div>
          
      </div>
      
  )
}

export default HeroBanner
