import { useEffect, useState } from 'react'

// Custom hook, siempre empiezan con use. En un custom hook podemos llamar hooks de react
export function useCatImage ({ fact }) {
  const [urlImg, setUrlImg] = useState()

  // Cada vez que tenemos un fact nuevo
  useEffect(() => {
    if (!fact) return
    const threeFirstWords = fact.split(' ', 3).join(' ')
    console.log(threeFirstWords)
    fetch(`https://cataas.com/cat/says/${threeFirstWords}?fontSize=50&fontColor=red&json=true`)
      .then(res => res.json())
      .then(response => {
        const { img } = response
        setUrlImg(img)
      })
  }, [fact])

  return { urlImg }
}
