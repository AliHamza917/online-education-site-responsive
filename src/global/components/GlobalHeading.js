import React from 'react'

const GlobalHeading = (props) => {
  return (
    <>
          <h1 className='text-[5vw] font-[900] lg:text-[3vw]'>{props.txt1} <span className='text-orange'>{props.txtOrange1}</span>{props.linebreak && <br/>} {props.txt2} <span className='text-orange'>{ props.txtOrange2}</span></h1> 
    </>
  )
}

export default GlobalHeading
