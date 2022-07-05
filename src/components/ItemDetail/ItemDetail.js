import ItemCount from "../ItemCount/ItemCount"
import { useContext } from "react"
import { contextoCarrito } from "../Context/CartContext"
import "./ItemDetail.css"

const ItemDetail = (props) => {

    const carrito = useContext(contextoCarrito)
    
    let {id, title, categoryId, description, price, stock, pictureUrl, cantidadComprada} = props.producto;

    const agregarAlCarrito = (cantidadAgregadaAlCarrito) => {    
        cantidadComprada = cantidadAgregadaAlCarrito
        carrito.addItem({id, title, categoryId, description, price, stock, pictureUrl, cantidadComprada}, cantidadAgregadaAlCarrito)
    }

    return (
        <div id="itemDetailDiv">
            <h1>{title}</h1>
            <hr/>
            <img className="Style-Title-Detail" src={pictureUrl} alt={title}></img>
            <p>{description}</p>
            <h3>Precio: $ {price}</h3>
            <h4>Unidades en stock: {stock}</h4>
            <ItemCount id ={id} stock={stock} initial={1} onAdd={agregarAlCarrito}/>
        </div>
    )
}

export default ItemDetail