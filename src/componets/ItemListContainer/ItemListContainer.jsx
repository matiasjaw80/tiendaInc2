import { useState, useEffect} from "react"
import { getProducts, getProductsByCategory } from "../../asyncMock"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"

const ItemListContainer = ({ greeting }) => {
    const [loading, setLoading] = useState(true)
    const [products, setProducts] = useState([])

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)
        
        const asyncFunction = categoryId ? getProductsByCategory : getProducts

        asyncFunction(categoryId)
            .then(response => {
                setProducts(response)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(() => {
                setLoading(false)
            })

    }, [categoryId])
    console.log(products)

    if(loading) {
        return <h1>Loading...</h1>
    }

    return (
        <div id='Categorias'>
        <h1>{greeting}: {categoryId}</h1>
                <ItemList products={products}/>
        </div>

    )
}

export default ItemListContainer