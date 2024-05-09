/* eslint-disable react/prop-types */
import { Suspense, lazy } from 'react'
import './App.css'

import { Router } from './Router'
import { Route } from './pages/Route'

const SearchPage = lazy(() => import('./pages/SearchPage.jsx')) // Hasta que no lo necesita no lo carga
const Page404 = lazy(() => import('./pages/404.jsx')) // Hasta que no lo necesita no lo carga
const HomePage = lazy(() => import('./pages/Home.jsx')) // Hasta que no lo necesita no lo carga
const AboutPage = lazy(() => import('./pages/AboutPage.jsx')) // Hasta que no lo necesita no lo carga

const routes = [
  {
    path: '/search/:query',
    Component: SearchPage
  }
]

function App () {
  return (
    <main>
      {/* Es necesario el Suspense para usar el lazy load, el el fallback podemos poner un componente que haga el Loading */}
      <Suspense fallback={<div>Loading... </div>}> 
        <Router routes={routes} DefaultComponent={Page404} >
          <Route path='/' Component={HomePage} />
          <Route path='/about' Component={AboutPage} />
        </Router> 
      </Suspense>
    </main>
  )
}

export default App
