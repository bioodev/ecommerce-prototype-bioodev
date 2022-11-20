import { ImCart, ImFilter } from "react-icons/im";
/* import Cartlist from './cartlist' */
/* import { useState } from 'react' */

const Sidebar = () => {

/*    const [carritoLista, setCarritoLista] = useState([]);

   const manejadorCarritoLista = (e) => { setCarritoLista(e) } */

  return (
    <div className="Sidebar">
      <div className="Filtros">
        <h2>
          <ImFilter />
          Filtro
        </h2>
      </div>

      <div className="carrito">
        
        <h2>
          <ImCart />
          Carrito
        </h2>
{/*         <Cartlist /> */}
        <button></button>
      </div>
    </div>
  );
};

export default Sidebar;
