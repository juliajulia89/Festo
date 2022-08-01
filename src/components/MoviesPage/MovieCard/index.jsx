import { useState } from 'react'
import MovieDescription from './MovieDescription'
import './styles.scss'

const MovieCard = ({ movieImage, movieTitle, movieDescription, movieYear }) => {
  const [showDescription, setShowDescription] = useState(false)


  const handleDescription = () => {
    setShowDescription((prevState) => !prevState)
  }

  return (
    <article className="movieCard" onClick={handleDescription}>
      <img className="movieCardImg" src={movieImage} alt={movieTitle} />
      <div className="movieInfo">
        <h3 className="movieInfoTitle">{movieTitle}</h3>
        {showDescription && (
          <MovieDescription
            movieDescription={movieDescription}
            movieYear={movieYear}
          />
        )}
      </div>
    </article>
  )
}

export default MovieCard
