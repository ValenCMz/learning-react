import { useEffect, useState } from 'react'
import './App.css'
const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/hello?fontSize=50&fontColor=red&json=true'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function App () {
  const [fact, setFact] = useState()
  const [urlImg, setUrlImg] = useState()

  // Cada vez que se renderiza la pagina
  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        const { fact } = data
        setFact(fact)
      })
  }, [])

  // Cada vez que tenemos un fact nuevo
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        console.log(response)
        const { img } = response
        console.log(img)
        setUrlImg(img)
      })
  }, [fact])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
      {urlImg && <img src={`${CAT_PREFIX_IMAGE_URL}${urlImg}`} />}
    </main>
  )
}
