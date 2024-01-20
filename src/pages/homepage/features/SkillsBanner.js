import React from 'react'
import MoniterImg from '../../../assets/images/moniter.png'
import SkillsWidget from '../../../global/components/SkillsWidget'

const SkillsBanner = () => {
  return (
      <div className='bg-purple p-6 w-full rounded-[14px] grid gap-1 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3'>
        
          <SkillsWidget heading ='Learn The Latest Skills' text='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a  BC, making it over 2000 years old.' />
          <SkillsWidget heading ='Get Ready For a Career' text='Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.' />
          <SkillsWidget heading = 'Earn a Certificate' text = 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a BC, making it over 2000 years old.'/>
      </div>
      
  )
}

export default SkillsBanner
