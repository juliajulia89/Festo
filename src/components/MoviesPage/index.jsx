import useFetchData from '../../customHooks/useFetchData'
import MovieCard from './MovieCard'
import SearchBar from './SearchBar'
import './styles.scss'

const MoviesPage = () => {
  const { movies } = useFetchData()
  return (
    <>
      <SearchBar />
      <main className="content">
        <h2 className="h3">Popular Movies</h2>
        <section className="moviesGrid">
          {movies.map(({ images, title, description, releaseYear }, i) => (
            <MovieCard
              key={i}
              movieImage={images['Poster Art'].url}
              movieTitle={title}
              movieDescription={description}
              movieYear={releaseYear}
            />
          ))}
        </section>
      </main>
    </>
  )
}

export default MoviesPage
