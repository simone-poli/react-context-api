import ProductCard from "./ProductCard";



export default function ProductsList({ product }) {

    return (
        <div className="col" key={product.id}>
            <ProductCard product={product}/>
        </div>
    )
}