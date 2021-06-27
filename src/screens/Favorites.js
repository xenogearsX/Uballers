import { useContext, useEffect, useState } from 'react'
import UserContext from '../context/UserContext'
import './Favorites.css'
import { Link } from 'react-router-dom'

const Favorites = () => {
  const groundsData = useContext(UserContext)[0].allGrounds
  const favorite = useContext(UserContext)[1]
  const setFavorite = useContext(UserContext)[2]

  const [favoriteMatch, setFavoriteMatch] = useState([])
  const [trigger, setTrigger] = useState(true)

  useEffect(() => {
    setFavoriteMatch(
      favorite.map(
        id => groundsData.filter(ground => ground.groundId === id)[0]
      )
    )
  }, [trigger])
  const removeFavorite = id => {
    const tempFavorite = favorite
    tempFavorite.splice(
      favorite.findIndex(ground => ground === id),
      1
    )
    setFavorite(tempFavorite)
    localStorage.setItem('favorite', JSON.stringify(tempFavorite))
    setTrigger(!trigger)
  }

  return (
    <div className='favorite'>
      <h1>Vos terrains favoris</h1>
      <div>
        {favorite.length === 0
          ? "Vous n'avez pas de favori"
          : favoriteMatch.map(favorite => (
              <div className='favoriteGround' key={favorite.groundId}>
                <Link to={`/ground/${favorite.groundId}`}>
                  {favorite.groundName}
                </Link>
                <button
                  className='remove'
                  onClick={() => removeFavorite(favorite.groundId)}
                >
                  Retirer des favoris
                </button>
              </div>
            ))}
      </div>
    </div>
  )
}

export default Favorites
