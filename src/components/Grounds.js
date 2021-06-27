import { useContext, useState } from 'react'

import { Link } from 'react-router-dom'

import Select from './Select'
import UserContext from '../context/UserContext'

import './Grounds.css'

const Grounds = () => {
  const groundsData = useContext(UserContext)[0]
  const [filter, setFilter] = useState('')

  return (
    <div className='grounds'>
      <h1>Liste des terrains</h1>
      <Select filter={setFilter} />
      {groundsData.allGrounds
        .filter(ground => ground.limit.includes(filter))
        .map(ground => (
          <div className='groundLink' key={ground.groundId}>
            <Link to={`/ground/${ground.groundId}`}>{ground.groundName}</Link>
          </div>
        ))}
    </div>
  )
}

export default Grounds
