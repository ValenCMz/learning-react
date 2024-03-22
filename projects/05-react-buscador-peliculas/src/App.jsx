import './App.css'
import { Movies } from './componets/Movies'
import { useMovies } from './hooks/useMovies'
import { useSearch } from './hooks/useSearch'


function App() {
  const { movies } = useMovies()
  const {search, updateSearch, error} = useSearch()

  // Estamos recuperando el elemento del dom, de otra manera
  const handelSubmit = (event) => {
    // Evitamos q sea actualice la pagina
    event.preventDefault()
  }

  const handleChange = (event) => {
    updateSearch(event.target.value)
    console.log(search)
  }

  return (
    <>
      <header className='page'>
        <h1>Buscar de peliculas</h1>
        <div>
          <form className='form' onSubmit={handelSubmit}>
            <input value={search} onChange={handleChange} name='query' type="text" />
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
