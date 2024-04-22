import { useCallback, useState } from 'react'
import { searchMovies } from '../services/movies'
import { useRef } from 'react'
import { useMemo } from 'react'


export function useMovies ( {search, sort} ) {
  const [movies, setMovies] = useState([])
  const previousSearch = useRef(search)

  const getMovies = useCallback ( async ({search}) => {
  
    if(previousSearch.current === search) return

    console.log('Buscando: ', search)
    previousSearch.current = search
    const newMovies = await searchMovies({search})
    setMovies(newMovies)
    
  }, [])
  
  const sortedMovies = useMemo(()=>{
    return sort 
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [movies, sort])

  return { movies: sortedMovies, getMovies }
}

  