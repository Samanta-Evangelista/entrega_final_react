import React from "react";
import Item from "../Item/Item";

const ItemList = ({ item }) => {
  return (
    <div className="row">
      {item.map((item) => (
        <div className="col-md3" key={Item.id}>
          <Item item={item} />
        </div>
      ))}
    </div>
  );
};

export default ItemList;
