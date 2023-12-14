import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../components/Json/arrayProductos.json";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const promesa = new Promise((resolve) => {
      setTimeout(() => {
        resolve(arrayProductos.find((item) => item.id === parseInt(id)));
      }, 2000);
    });
    promesa.then((data) => {
      setItem(data);
    });
  }, [id]);

  return (
    <div className="container">
      <div className="row">
        <ItemList item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
