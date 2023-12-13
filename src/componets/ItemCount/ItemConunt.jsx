import { useState } from "react"

const ItemCount = ({ initial = 1, stock = 10, onAdd}) => {
    const [count, setCount] = useState(1)

    const increment = () => {
        if(count < stock) {
            setCount(prev => prev + 1)
        }
    }

    const decrement = () => {
        if(count > 1) {
            setCount(prev => prev - 1)
        }
    }

    return (
        <div>
            <h3> {count} </h3>
            <button class='btn' onClick={decrement}>-</button>
            <button class='btn' onClick={() => onAdd(count)}>Agregar</button>
            <button class='btn' onClick={increment}>+</button>
        </div>
    )
}

export default ItemCount