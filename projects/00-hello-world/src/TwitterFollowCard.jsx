import { useState } from 'react';

export function TwitterFollowCard({ userName, children }) {
    //Utilizamos un estado interno, es solo de este elemento, no se comparte con nadie mas
    const [isFollowing, setIsFollowing] = useState(false); // esto devuelve un array con 2 elementos, el primero es el valor, el segundo es una funcion para cambiar el valor
    const text = isFollowing ? 'Siguiendo' : 'Seguir';
    const buttonClassName = isFollowing ? 'tw-followCard-button isFollowing' : 'tw-followCard-button';

    const handleClick = () => {
        setIsFollowing(!isFollowing);
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-img' alt="El avatar de casey" src={`https://unavatar.io/${userName}`}></img>
                <div className='tw-followCard-text'>
                    {children}
                    {/* Utilizo una funcion q viene por parametro, paso la funcion para q la ejecute aqui, puedo pasarla ya ejecutado si quisiera */}
                    <span>@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>

            </aside>
        </article >
    )
}