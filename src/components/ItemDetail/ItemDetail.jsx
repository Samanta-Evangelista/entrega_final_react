import React from "react";

const ItemDetail = ({ item }) => {
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
          <strong>Cantidad: {item.stock}</strong>{" "}
        </p>
      </div>
    </div>
  );
};

export default ItemDetail;
