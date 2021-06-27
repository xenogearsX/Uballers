import { useContext, useState } from 'react'

import UserContext from '../context/UserContext'

import './GroundDetails.css'

const GroundDetails = id => {
  const ground = useContext(UserContext)[0].allGrounds.filter(
    ground => ground.groundId === id.match.params.id
  )[0]
  const favorite = useContext(UserContext)[1]
  const setFavorite = useContext(UserContext)[2]

  const [message, setMessage] = useState(null)

  const addToFavorite = () => {
    if (!favorite.includes(id.match.params.id)) {
      setFavorite([...favorite, id.match.params.id])
      localStorage.setItem(
        'favorite',
        JSON.stringify([...favorite, id.match.params.id])
      )
      setMessage('Terrain ajouté à vos favoris')
    } else {
      setMessage('Terrain déjà présent dans vos favoris')
    }
  }

  return (
    <div className='groundDetails'>
      <h1>{ground.groundName}</h1>
      <h2>Localisation</h2>
      <div>{ground.address}</div>
      <h2>Détails du terrain</h2>
      <div>
        Accessibilité :{' '}
        {ground.limit === ''
          ? 'Non communiqué'
          : ground.limit === 'public'
          ? 'Terrain public, accès libre'
          : 'Terrain privé'}
      </div>
      <div>
        Nombre de paniers (demi-terrains) :{' '}
        {ground.basketNumber <= 1
          ? ground.basketNumber + ' panier'
          : ground.basketNumber + ' paniers'}
      </div>
      <div>
        Accès en transport :{' '}
        {ground.transport === '' ? (
          'Non communiqué'
        ) : (
          <ul>
            {ground.transport.split(', ').map(transport => (
              <li key={transport}>{transport}</li>
            ))}
          </ul>
        )}
      </div>
      <button onClick={addToFavorite}>Ajouter à vos favoris</button>
      {message ? <p>{message}</p> : null}
    </div>
  )
}

export default GroundDetails
