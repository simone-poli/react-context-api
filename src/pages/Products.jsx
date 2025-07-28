
import ProductsList from '../components/ProductsList'
import { useGlobalContext } from '../context/GlobalContext'


export default function Products() {
    const {products} = useGlobalContext()

  

    return (
        <>
            <main>
                <div className="container mt-5">
                    <div className="row row-cols-1 row-cols-md-5 g-3">
                        {products.map((product) => {
                            return (
                                <ProductsList product= {product} key={product.id} />
                            )
                        }
                        )}
                    </div>
                </div>
            </main>

        </>
    )
}