import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Layout = ({children}) => {
  return (
      <div className='px-[60px]'>
          <Header />
          {children}
          <Footer/>
      
    </div>
  )
}

export default Layout
