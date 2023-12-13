import ItemCount from "../ItemCount/ItemConunt"
import { Link } from 'react-router-dom'

const ItemDetail = ({ name, category, img, stock, price, description }) => {
    return (
            <div class='card'>
                <h1>{name}</h1>
                <p>categoria: {category}</p>
                <img class='imgCard' src={img} />
                <h3>${price}</h3>
                <p>Descripcion: {description}</p>
                <ItemCount stock={stock} />
                <p>Stock Disponible: {stock} </p>
                <Link class='btn' to='/'>Volver</Link>
            </div>

    )
}

export default ItemDetail