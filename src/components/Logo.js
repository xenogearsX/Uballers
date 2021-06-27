import { useContext, useEffect } from 'react'

import { Link } from 'react-router-dom'

import UserContext from '../context/UserContext'

import uballers from '../data/images/uballers.png'

const Logo = () => {
  const setFavorite = useContext(UserContext)[2]

  useEffect(() => {
    localStorage.getItem('favorite')
      ? setFavorite(JSON.parse(localStorage.getItem('favorite')))
      : null
  }, [])

  return (
    <Link to='/' className='logo'>
      <img src={uballers} />
    </Link>
  )
}

export default Logo
