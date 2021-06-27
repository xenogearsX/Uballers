import { useState } from 'react'

import Burger from './Burger'
import Logo from './Logo'

import './Header.css'

const Header = () => {
  const [clicked, setCliked] = useState(false)

  const handleClick = () => setCliked(!clicked)

  return (
    <header id='header'>
      <Logo />
      <Burger clicked={clicked} handleClick={handleClick} />
    </header>
  )
}

export default Header
