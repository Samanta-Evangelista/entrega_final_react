import React from "react";
import { Link } from "react-router-dom";

const Item = ({ item }) => {
  return (
    <Link to={"/item/" + item.id} className="text-decoration-none">
      <div className="container">
        <div className="card border border-0">
          <img
            src={item.img}
            className="card-img-top mx-auto mt-3"
            style={{ maxWidth: "300px" }}
            alt={item.nombre}
          />
          <div className="card-body text-center">
            <h4>$ {item.precio} </h4>
            <p children="card-text">{item.nombre}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Item;
