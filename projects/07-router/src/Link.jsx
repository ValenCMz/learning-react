import { EVENTS } from './assets/const'

export function navigate (href) {
  // cambiamos la url sin recargar la pagina
  window.history.pushState({}, '', href)
  // creamos un evento para avisar a los componentes que el path ha cambiado
  const navigationEvent = new Event(EVENTS.PUSHSTATE)
  window.dispatchEvent(navigationEvent)
}

// eslint-disable-next-line react/prop-types
export function Link ({ target, to, ...props }) {
  const handleClick = (event) => {
    navigate(to)

    const isMainEvent = event.button === 0 // click izquierdo
    const isModifiedEvent = event.metaKey || event.altKey || event.ctrlKey || event.shiftKey // si se presiono alguna tecla especial
    const isManageableEvent = target === undefined || target === '_self' // si el link no tiene target o si el target es _self

    if (isMainEvent && isManageableEvent && !isModifiedEvent) {
      event.preventDefault()
      navigate(to)
    }
  }

  return <a onClick={handleClick} href={to} target={target} {...props} />
}
