import {ClearCartIcon, CartIcon} from './Icons'
import { useId } from 'react'
import './Cart.css'
import { useCart } from '../hooks/useCart'

// eslint-disable-next-line react/prop-types
function CartItem({image, title, price, quantity, addToCart}) {
    return( 
        <li>
            <img src={image} alt={title} />
            <div>
                <strong>{title}</strong> - {price}$
            </div>

            <footer>
                <small>
                    Qty: {quantity}
                </small>
                <button onClick={addToCart}>+</button>
            </footer>
        </li>
    )
   
}

export function Cart (){
    const cartCheckboxId = useId()
    const {cart, addToCart, clearCart } = useCart()
    console.log("en cart jsx", cart)
    return (
        <>
            <label className='cart-button' htmlFor={cartCheckboxId}>
                <CartIcon/>
            </label>
            <input type="checkbox" hidden id={cartCheckboxId} />

            <aside className='cart'>
                <ul>
                    {cart.map(product => (
                        <CartItem
                            key={product.id}
                            addToCart={() => addToCart(product)}
                            {...product}
                        />
                    ))}
                </ul>
                <button onClick={clearCart} className='button-clear'>
                    <ClearCartIcon/>
                </button>
            </aside>

        </>
    )

}