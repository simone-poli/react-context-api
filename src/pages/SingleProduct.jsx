import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductsList from '../components/ProductsList';



export default function SingleProduct() {
    const { id } = useParams();
    const url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState({});

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setProduct(data)
            })
    }, [])

    return (

        <>

            <div className="container">
                <ProductsList product={product} />
            </div>



        </>
    )
}