import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';




export default function SingleProduct() {
    const { id } = useParams();
    const url = `https://fakestoreapi.com/products/${id}`;
    const [product, setProduct] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error){
                    console.log('NOT FOUND')
                    navigate ('/notfound')


                }
                setProduct(data)
            })
    }, [])

    return (

        <>

            <div className="container">
                 <div className="card col-6 mx-auto">

                    <img className="card-img-top" src={product.image} alt="" />

                    <div className="card-body">

                        <h5 className="card-title">{product.title}</h5>

                        <p className="card-text">{product.category}</p>
                        <p className="card-text text-success">${product.price}</p>
                    </div>

                <button onClick={() => navigate(-1)}>Back</button>

                </div>
            </div>



        </>
    )
}