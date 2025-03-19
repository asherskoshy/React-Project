import React, { useState } from "react";
import './style.css'
import { Link } from "react-router-dom";
const DataForm = () => {

  return (
    <div>
    {/* Header Section */}
        <header>
        <nav>
          <ul>
            <li><Link to="/Insert" >Insert </Link></li>
            <li><Link to="/List" >List </Link></li>
          </ul>
        </nav>
        </header>


    <form>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Enter your name"
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
         
          required
        />
      </div>

      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    </div>
  );
};

export default DataForm;
