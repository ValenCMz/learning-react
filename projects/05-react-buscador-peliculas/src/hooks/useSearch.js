import { useState } from 'react'
import { useEffect } from 'react'

export function useSearch () {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState('')
  
    useEffect(()=>{
      if(search === ''){
        setError('No se puede buscar una pelicula sin titulo')
        return
      }
      if(!isNaN(search)){
        setError('No se puede buscar una pelicula con un numero')
        return
      }
      if(search.length< 3){
        setError('La busqueda debe tener al menos 3 caracteres')
        return
      }
      setError(null)
    },[search])
  
    return { search, updateSearch, error}
  }