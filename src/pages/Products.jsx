import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';




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
                                <div className="col" key={product.id}>
                                    <div className="card h-100 d-flex flex-column">
                                        <Link to={`/products/${product.id}`}>
                                            <img className="card-img-top" src={product.image} alt="" />
                                        </Link>
                                        <div className="card-body">
                                            <Link to={`/products/${product.id}`}>
                                                <h5 className="card-title">{product.title}</h5>
                                            </Link>
                                            <p className="card-text">{product.category}</p>
                                            <p className="card-text text-success">${product.price}</p>
                                        </div>

                                    </div>
                                </div>
                            )
                        }
                        )}
                    </div>
                </div>
            </main>

        </>
    )
}