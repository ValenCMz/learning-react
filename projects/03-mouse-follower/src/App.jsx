import './App.css'
import { useEffect, useState } from 'react'

const FollowMouse = () => {
  const [enabled, setEnabled] = useState(false)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  // Se ejecuta cuando enabled cambia de valor
  useEffect(() => {
    console.log('effect', { enabled })

    const handleMove = (e) => {
      const { clientX, clientY } = e
      setPosition({ x: clientX, y: clientY })
    }
    // Voy a controllar cuando me suscribo a un evento
    if (enabled) {
      window.addEventListener('pointermove', handleMove)
    }
    // Voy a controllar cuando me desuscribo de un evento, hay q hacer una limpieza de suscripciones
    return () => {
      window.removeEventListener('pointermove', handleMove)
    }
  }, [enabled])

  return (
    <>
      <div style={{
        position: 'absolute',
        backgroundColor: '#09f',
        borderRadius: '50%',
        opacity: 0.8,
        pointerEvents: 'none',
        left: -20,
        top: -20,
        width: 40,
        height: 40,
        transform: `translate(${position.x}px, ${position.y}px)`
      }}
      />
      <button onClick={(() => setEnabled(!enabled))}>
        {enabled ? 'Desactivar' : 'Activar'} seguimiento de mouse
      </button>
    </>
  )
}

// Componente padre
function App () {
  return (
    <main>
      <FollowMouse />
    </main>
  )
}

export default App
