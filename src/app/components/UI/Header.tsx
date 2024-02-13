import React from 'react'
import Navbar from './Navbar';
import CartButton from './CartButton';

const Header = () => {
  return (
    <div className='flex flex-row justify-between'>
        <div>Logo</div>
        <div className='flex flex-row'>
        <Navbar />
        <CartButton />
        </div>
    </div>
  )
}

export default Header;