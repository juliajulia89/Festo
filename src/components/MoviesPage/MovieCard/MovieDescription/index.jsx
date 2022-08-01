const MovieDescription = ({ movieDescription, movieYear }) => {
  return (
    <p className="movieInfoDescription">
      <span>🗓️ {movieYear}</span> <br />
      {movieDescription}
    </p>
  )
}

export default MovieDescription
