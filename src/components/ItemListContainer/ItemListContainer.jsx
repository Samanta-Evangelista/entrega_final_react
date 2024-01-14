import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList.jsx";
// import arrayProductos from "../json/arrayProductos.json";
import "./ItemListContainer.css";
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

  // Anterior
  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const data = await new Promise((resolve) => {
  //         setTimeout(() => {
  //           resolve(
  //             id
  //               ? arrayProductos.filter((item) => item.categoria === id)
  //               : arrayProductos
  //           );
  //         }, 2000);
  //       });
  //       setItem(data);
  //     } catch (error) {
  //       console.log("Error:", error);
  //     }
  //   };
  //   fetchData();
  // }, [id]);

  return (
    <div className="container">
      <div className="row">
        <ItemList item={item} />
      </div>
    </div>
  );
};

export default ItemListContainer;
