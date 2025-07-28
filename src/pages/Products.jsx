import { useState, useEffect } from 'react';
import ProductsList from '../components/ProductsList'




export default function Products() {

    const url = "https://fakestoreapi.com/products"
    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setProducts(data))
    }, [])

    return (
        <>
            <main>
                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-md-5 g-3">
                        {products.map((product) => {
                            return (
                                <ProductsList product= {product} />
                            )
                        }
                        )}
                    </div>
                </div>
            </main>

        </>
    )
}