
// eslint-disable-next-line react/prop-types
export function ListOfMovies ({ movies }) {
    return (
        <ul className="cont_movies">
        {
          // eslint-disable-next-line react/prop-types
          movies.map(movie => (
            <li className="movie"  key={movie.id}>
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
              <img src={movie.poster} alt={movie.title} />
            </li>
          ))
        }
      </ul>
    )
}

export function NoMoviesResults () {
    return (
        <p>No se encontraron resultados</p>
    )
}

// eslint-disable-next-line react/prop-types
export function Movies ({ movies }) {
    // eslint-disable-next-line react/prop-types
    const hasMovies = movies?.length > 0
   return(
        //Si se encontraron peliculas
        hasMovies ? (
            <ListOfMovies movies={movies} />
        ) 
        // SI no se encontraron peliculas
        :(
            <NoMoviesResults />
        )
   )

}