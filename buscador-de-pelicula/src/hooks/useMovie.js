import results from '../mocks/results.json'
import noResults from '../mocks/noResults.json'

export function useMovie() {
  const movies = results.Search

  const mappedMovies = movies?.map(movie => ({
    id: movie.imdbID,
    title: movie.Title,
    year: movie.Year,
    poster: movie.Poster,
  }))

  return { movies: mappedMovies }
}
