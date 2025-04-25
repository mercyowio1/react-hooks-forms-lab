import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({
  itemName = "",
  itemCategory = "Produce",
  onItemFormSubmit,
}) {
  const [formData, setFormData] = useState({
    id: uuid(),
    name: itemName,
    category: itemCategory,
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;

    setFormData((prev) => ({
      ...prev,
      [name]: newValue,
    }));
  };

  function handleSubmit(event) {
    event.preventDefault();
    onItemFormSubmit(formData);
    setFormData({
      id: uuid(),
      name: "",
      category: "Produce",
    });
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          onChange={handleChange}
          value={formData.name}
        />
      </label>

      <label>
        Category:
        <select
          name="category"
          onChange={handleChange}
          value={formData.category}
        >
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
