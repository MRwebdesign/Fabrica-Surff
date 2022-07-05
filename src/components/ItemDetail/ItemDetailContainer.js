import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { firestore } from "../../firebase";
import Spinner from "react-bootstrap/Spinner";

const ItemDetailContainer = () => {

    const [producto, setProducto] = useState({})
    const parametros = useParams()

    useEffect(() => {
        
        const db = firestore

        const coleccion = db.collection("productos")

        const consulta = coleccion.where("id", "==", parametros.id).get()
        consulta
            .then(res => {
                setProducto(res.docs[0].data())
                document.getElementById("spinner").style.display = "none"
            })
            .catch(err => console.log(err))
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <>
            <Spinner id="spinner" animation="grow" />
            <ItemDetail producto={producto}/>
        </>
    )
}

export default ItemDetailContainer