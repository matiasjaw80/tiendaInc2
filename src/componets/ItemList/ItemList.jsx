import Item from "../Item/Item"

const ItemList = ({products}) => {
    return (
        <container class='container-grid'>
            {
                products.map(prod => {
                    return <Item key={prod.id} {...prod}/>
                })
            }
        </container>
    )
}

export default ItemList