import React from 'react'
import Logo from '../../assets/images/logo.png'

const Header = () => {
  return (
      <div>
          <nav className='flex justify-center py-7 lg:justify-between'>
              <div className="logo  "><img src={Logo} alt="" /></div>
              <div className="hidden navbar lg:flex lg:justify-center ">
                  {listItem}
                  <div className="navbar-menu py-1 text-[1.3rem]">
                      <button className='px-5 py-1 bg-purple text-white font-extrabold rounded-3xl'>Sign in</button>
                  </div>
              </div>
         </nav>
    
      </div>
  )
}

export default Header

const itemsNames = ['Home', 'About us', 'Courses' , 'Our Services' , 'Contact Us'];
const listItem = itemsNames.map((itemsName) => <div className="navbar-menu px-4 py-1 text-[1.3rem] font-bold text-[18]">{itemsName}</div>);
