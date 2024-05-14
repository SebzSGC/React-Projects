import { useRandomFact } from './hooks//useCatFact'
import { useCatImage } from './hooks/useCatImage'
import './App.css'

export function App() {
  const { fact, refreshRandomFact } = useRandomFact()
  const { factImage } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>Cat Fact</h1>
      {fact && <p role='paragraph'>{fact}</p>}
      {factImage && <img role='img' src={factImage} alt='Cat' />}
      <button onClick={handleClick}>
        <span aria-label='Refresh'>🔄 Get New Fact</span>
      </button>
    </main>
  )
}
