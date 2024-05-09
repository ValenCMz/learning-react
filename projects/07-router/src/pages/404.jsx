import { Link } from '../Link'

export default function Page404 () {
  return (
    <>
      <h1>This is NOT fine</h1>
      <img src='https://i.pinimg.com/originals/0e/c0/db/0ec0dbf1e9a008acb9955d3246970e15.gif' alt='404' />
      <Link to='/'>Volver a la home</Link>
    </>
  )
}
