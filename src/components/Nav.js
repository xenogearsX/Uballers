import { NavLink } from 'react-router-dom'

import './Nav.css'

const Nav = header => {
  return (
    <nav id='menu'>
      <ul className='nav'>
        <li>
          <NavLink
            exact
            to='/'
            className='link'
            activeClassName='selected'
            onClick={() => header.handleClick()}
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/favorites'
            className='link'
            activeClassName='selected'
            onClick={() => header.handleClick()}
          >
            Terrains favoris
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
