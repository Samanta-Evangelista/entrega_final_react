import React from "react";
import "./ItemCount.css";

const ItemCount = ({
  cantidad,
  handlerRestar,
  handlerSumar,
  handlerAgregar,
}) => {
  return (
    <div>
      <div className="item-count">
        <button onClick={handlerRestar}>-</button>
        <p>{cantidad}</p>
        <button onClick={handlerSumar}>+</button>
      </div>

      <div className="item-button">
        <button className="agregar-al-carrito" onClick={handlerAgregar}>
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
