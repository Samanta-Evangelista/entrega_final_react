import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../components/json/arrayProductos.json";
import ".ItemListContainer.css";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
