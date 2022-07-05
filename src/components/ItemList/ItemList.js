import Item from "./Item";

const ItemList = (props) => {
    
    const {items} = props
    
    return (
        <div id="contenedorItems">
            {items.map(item => <div key={item.id}><Item item={item}/></div>)}
        </div>
    )
}

export default ItemList