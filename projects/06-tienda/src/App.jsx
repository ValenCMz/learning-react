import { useProducts } from "./hooks/useProducts"
import { Products } from "./componets/Products"
import { Header } from "./componets/Header"
import {  useEffect } from "react"
import { Footer } from "./componets/Footer"
import { useFilters } from "./hooks/useFilters"
import { Cart } from "./componets/Cart"
import { CartProvider } from "./context/cart"

function App() {
  const {products, getProducts} = useProducts()
  const {filterProducts} = useFilters()

  useEffect(() => {
    getProducts()
  }, [getProducts])

  const filteredProducts = filterProducts({products})

  return (
    <CartProvider>
      <Header></Header>
      <Cart></Cart>
      <Products products={filteredProducts}></Products>
      <Footer></Footer>
    </CartProvider>
  )
}
export default App
