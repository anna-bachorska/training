import React, { useState } from "react";
import ShoppingForm from "./ShoppingForm";
import Shopping from "./Shopping";

function ShoppingList() {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    if (!item.name) {
      return;
    }

    const newItems = [item, ...items];

    setItems(newItems);
    console.log(newItems);
  };

  const removeShopping = (id) => {
    const removeArr = [...items].filter((item) => item.id != id);

    setItems(removeArr);
  };

  const completeShopping = (id) => {
    let updatedShopping = items.map((item) => {
      if (item.id === id) {
        item.isCompleted = !item.isCompleted;
      }
      return item;
    });
    setItems(updatedShopping);
  };

  return (
    <div>
      <ShoppingForm onFormSubmit={addItem} />
      <Shopping
        items={items}
        removeShopping={removeShopping}
        completeShopping={completeShopping}
      />
    </div>
  );
}

export default ShoppingList;
