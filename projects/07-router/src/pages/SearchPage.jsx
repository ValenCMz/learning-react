import { useEffect } from "react"
import { Link } from "../Link"

/* eslint-disable react/prop-types */
export default function SearchPage ({ routeParams }) {
    useEffect(() => {
        document.title = `Buscaste ${routeParams.query}`
    }, [])
    
    return (
        <>
            <h1>Has buscado {routeParams.query}</h1>
            <Link to="/">Volver al home</Link>
        </>
        
    )
}