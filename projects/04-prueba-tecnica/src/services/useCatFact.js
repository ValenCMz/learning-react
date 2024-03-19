import { useEffect, useState } from 'react'
import { getRandomFact } from './facts'

export function useCatFact () {
  const [fact, setFact] = useState()

  const refreshRandomFact = () => {
    getRandomFact().then(setFact)
  }

  // Cada vez que se renderiza la pagina
  useEffect(refreshRandomFact, [])

  return { fact, refreshRandomFact }
}
