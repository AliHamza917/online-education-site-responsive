import React from 'react'
import Logo from '../../assets/images/logo.png'
import { NavLink } from 'react-router-dom'
import { IoMenu } from "react-icons/io5"
import { IoCloseSharp } from "react-icons/io5"

const Header = () => {
  return (
      <div>
          <nav className='flex justify-center py-7 lg:justify-between'>
              <div className="logo flex ">
                  <IoMenu className='h-12 w-12 flex lg:hidden' />
                  <IoCloseSharp className='h-12 w-12 flex lg:hidden'/>
                  <img src={Logo} alt="" />
              </div>
              <div className="hidden navbar lg:flex lg:justify-center ">
                  {listItem}
                  <div className="navbar-menu py-1 text-[1.3rem]">
                      <button className='px-5 py-1 bg-purple text-white font-extrabold rounded-3xl'>Sign in</button>
                  </div>
              </div>
              
          </nav>
          {/* Mobile Nav Menue */}
            <div className='text-white text-4xl bg-purple font-bold text-center lg:hidden'>
                  {listItem}
              </div> 
    
      </div>
  )
}

export default Header

const itemsNames = ['Home', 'About us', 'Courses' , 'Our Services' , 'Contact Us'];
const pathName = ['/' , 'about-us' , 'courses' , 'our-services' , 'contact-us']
const listItem = itemsNames.map((itemsName , index) => <div key={index}  className="navbar-menu px-4 py-1 text-[1.3rem] font-bold text-[18] border-b-[1px] lg:border-b-0 "><NavLink className='hover:text-orange' to={pathName[index]}>{itemsName}</NavLink></div>);
