import { useCallback, useState } from "react";
import { searchProducts } from "../services/products";

export function useProducts () {
    const [products, setProducts] = useState([])

        const getProducts = useCallback( async () => {
            const newProducts = await searchProducts()
            setProducts(newProducts)
        }, [])


    return {products, getProducts}
}