import { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'


export function useSearch () {
    const [search, updateSearch] = useState('')
    const [error, setError] = useState('')
    const isFirstInput = useRef(true)
  
    useEffect(()=>{
      if(isFirstInput.current){
        isFirstInput.current = search === ''
        return
      }

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