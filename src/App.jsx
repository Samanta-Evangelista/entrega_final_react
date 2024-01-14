import Contacto from "./components/Contacto";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartContext } from "./components/CartContext";
import { useState } from "react";

function App() {
  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (item, cantidad) => {
    const itemAgregado = { ...item, cantidad };

    const nuevoCarrito = [...carrito];
    const enCarrito = nuevoCarrito.find(
      (producto) => producto.id === itemAgregado.id
    );

    if (enCarrito) {
      enCarrito.cantidad += cantidad;
    } else {
      nuevoCarrito.push(itemAgregado);
    }
    setCarrito(nuevoCarrito);
  };

  return (
    <div className="App">
      <CartContext.Provider value={{ carrito, agregarAlCarrito }}>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/categoria/:id" element={<ItemListContainer />} />
            <Route path="/item/:id" element={<ItemDetailContainer />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </BrowserRouter>
      </CartContext.Provider>
    </div>
  );
}

export default App;
