

export const searchProducts = async () => {
    try{
        const response = await fetch('https://fakestoreapi.com/products')
        const json = await response.json()
        console.log(json)
        return json.map(product => ({
            id: product.id,
            title: product.title,
            price: product.price,
            description: product.description,
            category: product.category,
            image: product.image,
            rating: product
        }))
    }catch(error){
        throw new Error('Error fetching products')
    }

}