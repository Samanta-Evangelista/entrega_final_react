import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import arrayProductos from "../json/arrayProductos.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/config";

const ItemDetailContainer = () => {
  const [item, setItem] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef).then((resp) => {
      setItem({ ...resp.data(), id: resp.id });
    });
  }, [id]);

  // useEffect(() => {
  //   const promesa = new Promise((resolve) => {
  //     setTimeout(() => {
  //       resolve(arrayProductos.find((item) => item.id === parseInt(id)));
  //     }, 1000);
  //   });
  //   promesa.then((data) => {
  //     setItem(data);
  //   });
  // }, [id]);

  return (
    <div className="container">
      <div className="row">
        <ItemDetail item={item} />
      </div>
    </div>
  );
};

export default ItemDetailContainer;
