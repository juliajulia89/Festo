import { Link } from 'react-router-dom'
import movies from "../../../assets/movies.png"

const Movies = () => {
  return (
    <Link to="/movies">
      <section className="section">
        <img
          src={movies}
          alt="movies"
          className="sectionImg"
        />
        <h2 className="sectionTittle">Movies</h2>
      </section>
    </Link>
  )
}

export default Movies
