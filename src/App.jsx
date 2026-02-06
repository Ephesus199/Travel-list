import { useState } from "react";
import "./index.css";
import PackingList from "./PackingList";
import { Logo } from "./Logo";
import { Form } from "./Form";
/* const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
] */
export default function App() {
  const [items, setItems] = useState([]);
  let totalItem = items.length;
  let totalPackedItem = 0;
  items.map((item) => {
    if (item.packed) {
      totalPackedItem++;
    }
  });
  function handleDeleteItem(id) {
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  }
  function restItems() {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (confirmed) {
      setItems([]);
    }
  }
  function handlePackedStatus(id) {
    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.id === id) {
          return { ...item, packed: !item.packed };
        } else {
          return item;
        }
      })
    );
  }
  return (
    <div className="app">
      <Logo />
      <Form setter={setItems} />
      <PackingList
        Items={items}
        onDelete={handleDeleteItem}
        onToggle={handlePackedStatus}
        restItems={restItems}
      />
      <Stats totalItem={totalItem} packed={totalPackedItem} />
    </div>
  );
}
function Stats({ totalItem, packed }) {
  if (!totalItem) {
    return (
      <p className="stats">
        <em>Start adding some items to your packing list 🚀 </em>
      </p>
    );
  }
  const percentage = Math.round((packed / totalItem) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You have got ready to go✈️"
          : `
 
       💼 You have ${totalItem} items on your list, and you already packed
      ${packed} (${percentage}%))`}
      </em>
    </footer>
  );
}
