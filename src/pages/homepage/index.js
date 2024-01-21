import React from 'react'

import HeroBanner from './features/HeroBanner'
import SkillsBanner from './features/SkillsBanner'
import MiddleHeading from '../../global/components/MiddleHeading'

const HomePage = () => {
  return (
    <div>
      <HeroBanner />
      <SkillsBanner />
      <MiddleHeading heading = 'Our Track' text ='Lorem Ipsum is simply dummy text of the printing.'/>
    </div>
  )
}

export default HomePage
