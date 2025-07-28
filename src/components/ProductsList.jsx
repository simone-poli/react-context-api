import { Link } from 'react-router-dom';


export default function ProductsList({product}){

    return(
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