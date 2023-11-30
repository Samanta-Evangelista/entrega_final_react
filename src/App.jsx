// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
// import "./App.css";

// function App() {
//   const [count, setCount] = useState(0);

//   return (
//       <div></div>
//   );
// }

// export default App;
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter></BrowserRouter>
      <Navbar />
      <ItemListContainer greeting="Bienvenidos" />
    </div>
  );
}

export default App;
