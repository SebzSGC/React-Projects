export function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map(movie => (
        <li key={movie.id}>
          <img src={movie.poster} alt={movie.Title} />
          <h2>{movie.title}</h2>
          <p>{movie.year}</p>
        </li>
      ))}
    </ul>
  )
}

export function NoResults() {
  return <p>No se encontraron películas</p>
}

export function Movies({ movies }) {
  const hasMovies = movies.length > 0
  return hasMovies ? <ListOfMovies movies={movies} /> : <NoResults />
}
