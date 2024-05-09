import { Link } from '../Link'

export default function AboutPage () {
  return (
    <>
      <h1>About</h1>
      <div>
        <img src='https://pbs.twimg.com/profile_images/1740078131229163520/atuk3oCM_400x400.jpg' alt='foto de valentin' />
        <p>Hola, me llamo Valentin Caminos Martinez y estoy creando un clon de React Router</p>
      </div>
      <Link to='/'>Ir a la home</Link>
    </>
  )
}
