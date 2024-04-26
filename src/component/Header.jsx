import React from 'react'
import DesktopDark from "../assets/images/bg-desktop-dark.jpg";

const Header = () => {
  return (
    <div>
      <header>
        <img src={DesktopDark} alt="desktop dark" className='absolute w-full h-1/2 object-cover' />
        <h1 className='absolute top-1/2 left-1/2 transform'>TO DO</h1>
      </header>
    </div>
  )
}

export default Header