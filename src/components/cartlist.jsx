
const Cartlist = (data) => {
    return (
        <div className="listado-carrito">
            {data.map( () => ( data > 0 ? <p>hola</p> : null  ))}
        </div>
    )
};

export default Cartlist;