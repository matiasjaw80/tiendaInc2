import { useState, useEffect} from "react"
import { getProductById } from "../../asyncMock"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { productId } = useParams()

    useEffect(()=> {
        getProductById(productId)
            .then(Response => {
                setProduct(Response)
            })
            .catch(error => {
                console.log(error)
            })
    }, [productId])

    return(
        <div class='container-flex' id='Detalle'>
            <ItemDetail  {...product}/>         
        </div>
    )
}

export default ItemDetailContainer