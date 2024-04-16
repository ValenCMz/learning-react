import './App.css'
import { Movies } from './componets/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'
import { useCallback, useState } from 'react'
import debounce from 'just-debounce-it'

function App() {
  const [sort, setSort] = useState(false)
  const {search, updateSearch, error} = useSearch()
  const {movies, getMovies } = useMovies( {search, sort} )

  const debounceGetMovies = useCallback(debounce((search) => {
    console.log('Buscando: ', search);
    getMovies({search});
  }, 300), [])
  

  // Estamos recuperando el elemento del dom, de otra manera
  const handelSubmit = (event) => {
    // Evitamos q sea actualice la pagina
    event.preventDefault()
    getMovies({search})  
  }

  const handleChange = (event) => {
    const newSearch = event.target.value
    updateSearch(newSearch)
    debounceGetMovies(newSearch)
  }

  const handleSort = () => {
    setSort(!sort)
  }

  return (
    <>
      <header className='page'>
        <h1>Buscar de peliculas</h1>
        <div>
          <form className='form' onSubmit={handelSubmit}>
            <input value={search} onChange={handleChange} name='query' type="text" />
            <input type="checkbox" onChange={handleSort} checked={sort} />
            <button type='submit'>Buscar</button>
          </form>
          {error && <p style={{color:'red'}}>{error}</p>}
        </div>
      </header>
      
      <main>
        <Movies movies={movies}/>
      </main>
     
    </>
  )
}

export default App
