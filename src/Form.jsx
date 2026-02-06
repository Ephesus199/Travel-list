import { useState } from "react";

export function Form(props) {
  const [description, setDescription] = useState("");
  const [quantity, setQauntity] = useState("1");

  function handleSelectChange(e) {
    setQauntity(e.target.value);
  }
  function handleChange(e) {
    setDescription(e.target.value);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, packed: false, id: Date.now() };
    props.setter((prevItems) => [...prevItems, newItem]);

    setDescription("");
    setQauntity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip</h3>
      <select name="" id="" value={quantity} onChange={handleSelectChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={handleChange}
      />
      <button>Add</button>
    </form>
  );
}
