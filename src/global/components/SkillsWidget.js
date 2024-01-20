import React from 'react'
import MoniterImg1 from '../../assets/images/moniter.png'

const SkillsWidget = (props) => {
  return (
      <>
             <div className="main flex ">
              <div className="img bg-purple p-8 "><img className='p-3 rounded-2xl bg-shadow' src={MoniterImg1} alt="" /></div>
              
              <div className="text text-white py-8 w-[40vw] md:w[50vw] lg:w-[13vw] ">
                  <h1 className=' text-xl font-extrabold'>{ props.heading}</h1>
                  <p className=' text-xs leading-4 text-shadowText'>{props.text}</p>
                  
              </div>

           </div>
      
      </>
      
  )
}

export default SkillsWidget
