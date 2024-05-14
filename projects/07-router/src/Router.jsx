import { useEffect, useState, Children } from 'react'
import { EVENTS } from './assets/const'
import { match } from 'path-to-regexp'
import { getCurrentPath } from './utils/getCurrentPath'

// eslint-disable-next-line react/prop-types
export function Router ({children, routes = [], DefaultComponent = () => <h1>404</h1> }) {
  const [currentPath, setCurrentPath] = useState(getCurrentPath())

  useEffect(() => {
    const onLocationChange = () => {
      setCurrentPath(getCurrentPath())
    }

    // Escuchamos la navegacion cuando vamos hacia adelante
    window.addEventListener(EVENTS.PUSHSTATE, onLocationChange)
    // Escuchamos la navegacion cuando vamos hacia atras
    window.addEventListener(EVENTS.POPSTATE, onLocationChange)
    // limpiamos el evento cuando el componente se desmonta
    return () => {
      window.removeEventListener(EVENTS.PUSHSTATE, onLocationChange)
      window.removeEventListener(EVENTS.POPSTATE, onLocationChange)
    }
  }, [])

  // a routes from chilren <Route /> components
  const routeForChildren =  Children.map(children, ({ props, type }) => {
    const { name } = type
    console.log({ name, props })
    const isRoute = name === 'Route'
    return isRoute ? props : null
  })

  const routeToUse = routes.concat(routeForChildren).filter(Boolean)

  let routeParams = {}

  // Buscamos la ruta actual en el array de rutas
  const Page = routeToUse.find(({ path }) => {
    if(path === currentPath) return true

    // hemos usado path-to-regexp
    // para poder detectar ls url que son dinamicas
    // Por ejemplo /search/:query
    // y la url /search/react
    // matched.params.query === 'react'
    const matcherUrl = match(path, { decode: decodeURIComponent })
    const matched = matcherUrl(currentPath)

    if(!matched) return false

    routeParams = matched.params
    return true
  })?.Component

  return Page ? <Page routeParams={routeParams}/> : <DefaultComponent routeParams={routeParams} />
}
