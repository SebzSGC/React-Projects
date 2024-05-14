import { useEffect, useState } from 'react'
import { getFact } from '../services/facts'

export function useRandomFact() {
  const [fact, setFact] = useState()

  const refreshRandomFact = () => {
    getFact().then((fact) => setFact(fact))
  }

  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}
