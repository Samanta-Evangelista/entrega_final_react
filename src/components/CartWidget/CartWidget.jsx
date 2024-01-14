import { useContext } from "react";
import { FaCartPlus } from "react-icons/fa";
import { CartContext } from "../CartContext";

const CartWidget = () => {
  const { cantidadEnCarrito } = useContext(CartContext);

  return (
    <div style={{ color: "white" }}>
      <h3>
        <FaCartPlus />
        <small>({cantidadEnCarrito()})</small>
      </h3>
    </div>
  );
};

export default CartWidget;
