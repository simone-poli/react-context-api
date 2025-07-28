export default function ProductsList({product}){

    return(


        <div className="card col-6 mx-auto">

                    <img className="card-img-top" src={product.image} alt="" />

                    <div className="card-body">

                        <h5 className="card-title">{product.title}</h5>

                        <p className="card-text">{product.category}</p>
                        <p className="card-text text-success">${product.price}</p>
                    </div>


                </div>
    )
}