import React from "react";

const ItemDetail = ({ item }) => {
  return (
    <div className="row">
      <div className="col-md-4 iifset-md-4">
        <img src={item.image} className="card-img-top" alt={item.nombre} />
        <h3>{item.nombre}</h3>
        <p>$ {item.precio}</p>
        <p>Cantidad: {item.stock}</p>
      </div>
    </div>
  );
};

export default ItemDetail;
