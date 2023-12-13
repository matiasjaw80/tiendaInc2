import { Link } from 'react-router-dom'

const Item = ({ id, name, price, img }) => {
    return (
        <div class='card'>
            <h3>{name}</h3>
            <img class='imgCard' src={img} />
            <h4>$ {price} </h4>
            <Link class='btn' to={`/detail/${id}`}>Detalle</Link>
        </div>
    )
}

export default Item


