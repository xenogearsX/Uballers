import { useState } from 'react'

import UserContext from './context/UserContext'

import './App.css'

const App = () => {
  const [favorite, setFavorite] = useState([])

  return (
    <div className='App'>
      <UserContext.Provider
        value={[favorite, setFavorite]}
      ></UserContext.Provider>
    </div>
  )
}

export default App
