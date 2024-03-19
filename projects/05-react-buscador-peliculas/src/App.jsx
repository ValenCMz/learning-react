import './App.css'
import { Movies } from './componets/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  return (
    <>
      <header className='page'>
        <h1>Buscar de peliculas</h1>
        <div>
          <form className='form'>
            <input type="text" />
            <button type='sumbit'>Buscar</button>
          </form>
        </div>
      </header>
      
      <main>
        <Movies movies={movies}/>
      </main>
     
    </>
  )
}

export default App
