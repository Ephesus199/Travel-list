import { useState } from "react";
import { Item } from "./Item";

export default function PackingList({ Items, onDelete, onToggle, restItems }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") {
    sortedItems = Items;
  }
  if (sortBy === "description") {
    sortedItems = Items.slice().sort((a, b) =>
      a.description.localeCompare(b.description)
    );
  }
  if (sortBy === "packed") {
    sortedItems = Items.slice().sort(
      (a, b) => Number(a.packed) - Number(b.packed)
    );
  }
  return (
    <div className="list-wrapper">
      <ul className="list">
        {sortedItems.map((item) => (
          <Item
            item={item}
            onDelete={onDelete}
            key={item.id}
            onToggle={onToggle}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by input description</option>
          <option value="packed">Sort by input packed </option>
        </select>
        <button onClick={restItems}>Clear List</button>
      </div>
    </div>
  );
}
