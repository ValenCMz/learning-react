import './Products.css'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons.jsx'
import PropTypes from 'prop-types';
import { useCart } from '../hooks/useCart.js';


export function ListOfProducts ({products}){
    const {addToCart, cart, removeFromCart} = useCart()
    const checkProductInCart = product => {
        return cart.some(item => item.id === product.id)
    }

    return (
        <main className='products'>
            <ul>
                {products.map(product => {
                    const isProductInCart = checkProductInCart(product)
                    return (
                        <li key={product.id}>
                            <img src={product.image} alt={product.title}/>
                            <div>
                                <h3>{product.title} - {product.price} $</h3>
                            </div>       
                            <div>
                            <button
                                style={{ backgroundColor: isProductInCart ? 'red' : '#09f' }} onClick={() => {
                                    isProductInCart
                                    ? removeFromCart(product)
                                    : addToCart(product)
                                }}
                                >
                                {
                                    isProductInCart
                                    ? <RemoveFromCartIcon />
                                    : <AddToCartIcon />
                                }
                            </button>  
                            </div>                 

                        </li>   
                    )     
                }
                )}
            </ul>
        </main>
    )
}

export function Products ({products}) {
    const hasProducts = products.length > 0
    return(
        hasProducts ? (
            <ListOfProducts products={products}/>
        ) : (
            <p>There are no products</p>
        )
    )
}

Products.propTypes = {
    products: PropTypes.array.isRequired,
};

ListOfProducts.propTypes = {
    products: PropTypes.array.isRequired,
};
