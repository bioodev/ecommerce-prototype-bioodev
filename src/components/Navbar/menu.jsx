const Menu = () => {
    const itemsMenu = [
        {link: "Inicio", linkUrl: "/"}, 
        {link: "Productos", linkUrl: "/productos"}, 
        {link: "Acerca", linkUrl: "/acerca"}, 
        {link: "Contacto", linkUrl: "/contacto"} 
    ];
    return (
        <div className="Menu">
            {itemsMenu.map( (arr, i) => ( <a key={i} href={arr.linkUrl}>{arr.link}</a>) )}
        </div>
    )
}

export default Menu;
