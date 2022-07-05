import Button from "react-bootstrap/Button";
import { useState} from "react";
import { firestore } from "../../firebase";
import "./CartTiket.css"

const CartTiket = ({ carrito }) => {
  const [numOrden, setNumOrden] = useState("");

  function cargarCarrito(items) {
    if (items?.length > 0) {
      let cantidadTotal = 0;
      items.forEach((item) => {
        cantidadTotal = cantidadTotal + item.cantidadComprada;
        carrito.addItem(item, cantidadTotal);
      });
    }
  }

  const handleChange = (e) => {
    setNumOrden(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (numOrden.length > 8) {
    const db = firestore;

    const coleccion = db.collection("ordenes");

    const consulta = coleccion.doc(numOrden);
    consulta
      .get()
      .then((res) => {
        if (res.exists) {
          cargarCarrito(res.data().items);
        } else {
          console.log("No such document!");
        }
      })
      .catch((err) => console.log(err));
    }
  };

  return (
    <div className="Cart-Tiket_Container">
      <div className="cart-tiket">
        <div className="cart-tiket__title">
          <form className="form-inline" onSubmit={handleSubmit}>
            <label className="Cart-Tiket-Style" htmlFor="numOrden">Cargar compra anterior con número de orden</label>
            <input id="numOrden" className="m-2 form-control"
              type="text"
              placeholder="Ingresar tiket"
              name="numOrden"
              value={numOrden}
              onChange={handleChange}
            />
            <Button className="Button-Style-Orden m-2" type="submit">Buscar orden</Button>{" "}
          </form>
        </div>
        <span>
        </span>
      </div>
    </div>
  );
};

export default CartTiket;
