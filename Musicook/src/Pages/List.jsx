import React, { useState } from "react";

const DataForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });

  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setItems([...items, formData]); // Add the new data to the list
    setFormData({ name: "", email: "", password: "" }); // Reset form fields
  };

  return (
    <div>
      <h2>Insert Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>

      <h2>Inserted Items</h2>
      <ul>
        {items.length === 0 ? (
          <p>No items inserted yet</p>
        ) : (
          items.map((item, index) => (
            <li key={index}>
              <strong>Name:</strong> {item.name} <br />
              <strong>Email:</strong> {item.email} <br />
              <strong>Password:</strong> {item.password} <br />
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default DataForm;
