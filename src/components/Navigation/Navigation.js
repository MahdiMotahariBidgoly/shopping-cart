/** @format */

import { NavLink } from 'react-router-dom'
import './navigation.css'
import { useCart } from '../../Providers/CartProviders'
const Navigation = () => {
  const { cart } = useCart()
  return (
    <header className='mainNavigation'>
      <nav>
        <ul>
          <li>
            <NavLink to='/' exact activeClassName='activeLink '>
              Home
            </NavLink>
          </li>
          <li className='cartLink'>
            <NavLink to='/cart' activeClassName='activeLink '>
              Cart
            </NavLink>
            <span>{cart.length}</span>
          </li>
        </ul>
        <div>Mahdi Shopping</div>
      </nav>
    </header>
  )
}

export default Navigation
