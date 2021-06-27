import { useState } from 'react'

import { Route, Switch } from 'react-router'

import Favorites from './screens/Favorites'
import GroundDetails from './screens/GroundDetails'
import Header from './components/Header'
import Home from './screens/Home'
import UserContext from './context/UserContext'

import groundsData from './data/json/groundsData.json'

import './App.css'

const App = () => {
  const [favorite, setFavorite] = useState([])

  return (
    <div className='App'>
      <UserContext.Provider value={[groundsData, favorite, setFavorite]}>
        <Header />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/ground/:id' component={GroundDetails} />
          <Route path='/favorites' component={Favorites} />
        </Switch>
      </UserContext.Provider>
    </div>
  )
}

export default App
