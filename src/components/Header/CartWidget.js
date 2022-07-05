import Badge from 'react-bootstrap/Badge'
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { contextoCarrito } from '../Context/CartContext'
import { useContext } from 'react'

const CartWidget = () => {

    const contadorCarrito = useContext(contextoCarrito)

    return (
        <Link to="/cart" className="nav-link">
            <Button variant="primary">
                <i className="bi bi-cart"></i>
                <Badge pill bg="primary" text="light" className="ms-2">{contadorCarrito.contador !== 0 ? contadorCarrito.contador : null}</Badge>
            </Button>
        </Link>
    )
}

export default CartWidget