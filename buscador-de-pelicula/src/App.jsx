import './App.css'
import { Movies } from './components/Movies'
import { useMovie } from './hooks/useMovie'

function App() {
  const { movies: mappedMovies } = useMovie()
  return (
    <>
      <div className="page">
        <header>
          <h1>Buscador de películas</h1>
          <div>
            <form className="form">
              <input type="text" placeholder="Busca tu película..." />
              <button type="submit">Buscar</button>
            </form>
          </div>
        </header>
        <main>
          <Movies movies={mappedMovies} />
        </main>
      </div>
    </>
  )
}

export default App
