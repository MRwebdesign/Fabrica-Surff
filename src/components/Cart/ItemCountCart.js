import { useState, useContext } from "react"
import { contextoCarrito } from '../Context/CartContext'

const ItemCountCart = ({cantidadAgregada, indice}) => {
    
    const [contador, setContador] = useState(cantidadAgregada)
    const carrito = useContext(contextoCarrito)

    function aumentarContador(){
        if (contador < carrito.arrayProductos[indice].stock){
            setContador(contador+1)
            carrito.setContador(carrito.contador+1)
            carrito.arrayProductos[indice].cantidadComprada = contador+1
        }
    }

    function reducirContador(){
        if (contador > 1){
            setContador(contador-1)
            carrito.setContador(carrito.contador-1)
            carrito.arrayProductos[indice].cantidadComprada = contador-1
        }
    }
    
    return (
        <div id="item" class="d-flex justify-content-evenly align-items-center">
            <button class="btn btn-primary" id="btnIncrementar" onClick={() => aumentarContador()}>
                +
            </button>
            <p id="contadorInput">{contador}</p>
            <button class="btn btn-primary" id="btnReducir" onClick={() => reducirContador()}>
                -
            </button>
        </div>
    )
}

export default ItemCountCart