import React, { useState } from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [cantidad, setCantidad] = useState(1);

  const handlerRestar = () => {
    cantidad > 1 && setCantidad(cantidad - 1);
  };

  const handlerSumar = () => {
    cantidad < item.stock && setCantidad(cantidad + 1);
  };

  const handlerAgregar = () => {
    console.log({ ...item, cantidad });
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
        <p>
          <strong>Stock: {item.stock}</strong>{" "}
        </p>
        <ItemCount
          cantidad={cantidad}
          handlerRestar={handlerRestar}
          handlerSumar={handlerSumar}
          handlerAgregar={handlerAgregar}
        ></ItemCount>
      </div>
    </div>
  );
};

export default ItemDetail;
