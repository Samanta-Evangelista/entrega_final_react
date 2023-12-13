import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import arrayProductos from "../components/json/arrayProductos.json";
import ".ItemListContainer.css";

const ItemListContainer = () => {
  const [item, setItem] = useState([])
  const {id} = useParams();

  useEffect(()=>{
    const fetchData = async()=>{
      try{
        const data = await new Promise
      }
    }  
    await new Promise((resolve)=>{
      ((resolve)=>{
        setTimeout(()=>{
        resolve( id ? arrayProductos.filter(item => item.categori === id): arrayProductos)
      })
    })
  })

export default ItemListContainer;
