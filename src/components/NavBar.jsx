import React, { useContext } from 'react'
import { AiFillShopping } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import CartContext from './context';

const NavBar = () => {
  const {items} = useContext((CartContext))

  return (
    <div className='navbar'>
        <Link to="/"><span>Home</span></Link>
        <Link to="/about"><span>About</span></Link>
        <Link to="/contact"><span>Contact</span></Link>
        <Link to="/userPage"><span>Users Page</span></Link>
        <Link to={"/"}><span>Iphone</span></Link>
        <Link to={"/checkout"}>
          <div className='cart'>
            <AiFillShopping/>
            <p>{items.length}</p>
          </div>
        </Link>

    </div>
  )
}

export default NavBar;