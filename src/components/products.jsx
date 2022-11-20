/* import { useState } from "react"; */

const Products = (props) => {
  return (
    <div className="Products">
      <img alt="" src={props.data.thumbnail} />
      <h3>{props.data.title}</h3>
      <h4>${props.data.price}</h4>
      <button>+</button>
    </div>
  );
};
export default Products;
