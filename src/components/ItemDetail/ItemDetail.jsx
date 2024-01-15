import React, { useContext, useState } from "react";
import ItemCount from "./ItemCount";
import { CartContext } from "../CartContext";

const ItemDetail = ({ item }) => {
  const { carrito, agregarAlCarrito } = useContext(CartContext);
  console.log(carrito);

  const [cantidad, setCantidad] = useState(1);

  const handlerRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handlerSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  return (
    <div className="container">
      <div className="card border border-0">
        <img
          src={item.img}
          className="card-img-top mx-auto mt-3"
          style={{ maxWidth: "300px" }}
          alt={item.nombre}
        />
        <h3>{item.nombre}</h3>
        <h4>$ {item.precio}</h4>
        <ItemCount
          cantidad={cantidad}
          handlerRestar={handlerRestar}
          handlerSumar={handlerSumar}
          handlerAgregar={() => {
            agregarAlCarrito(item, cantidad);
          }}
        ></ItemCount>
      </div>
    </div>
  );
};

export default ItemDetail;
