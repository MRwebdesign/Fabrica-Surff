import { useState } from "react"
import Button from "react-bootstrap/Button"

const ItemCount = ({stock, initial, onAdd}) => {
    
    const [contador, setContador] = useState(initial)

    function aumentarContador(){
        if (contador < stock){
            setContador(contador+1)
        }
    }

    function reducirContador(){
        if (contador > 0){
            setContador(contador-1)
        }
    }
    
    return (
        <div id="item" className="d-flex justify-content-evenly align-items-center">
            <button className="btn btn-primary" id="incrementar" onClick={() => aumentarContador()}>
                +
            </button>
            <p id="contadorPlace">{contador}</p>
            <button className="btn btn-primary" id="decrementar" onClick={() => reducirContador()}>
                -
            </button>
            <Button variant="primary" id="botonItemDetail" onClick={() => onAdd(contador)}>
                Agregar al carrito
            </Button>
        </div>
    )
}

export default ItemCount