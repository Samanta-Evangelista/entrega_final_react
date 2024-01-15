import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemListContainer = () => {
  const [item, setItem] = useState([]);

  const { categoria } = useParams();

  useEffect(() => {
    const productosRef = collection(db, "productos");

    getDocs(productosRef).then((resp) => {
      const data = resp.docs
        .map((doc) => {
          if (doc.data().categoria == categoria || categoria == undefined) {
            const productos = { ...doc.data(), id: doc.id };
            return productos;
          }
          return null;
        })
        .filter((producto) => producto !== null);

      setItem(data);
    });
  }, [categoria]);

  return (
    <div className="container">
      <div className="row">
        <ItemList item={item} />
      </div>
    </div>
  );
};

export default ItemListContainer;
