import './App.css'
import { useCatImage } from './services/useCatImage'
import { useCatFact } from './services/useCatFact'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const { fact, refreshRandomFact } = useCatFact()
  const { imgUrl } = useCatImage({ fact })

  const handleClick = async () => {
    refreshRandomFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {fact && <p>{fact}</p>}
      {imgUrl && <img src={`${CAT_PREFIX_IMAGE_URL}${imgUrl}`} />}
    </main>
  )
}
