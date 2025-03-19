import React, { useState } from "react";
  import './style.css'
import { Link } from "react-router-dom";
export const List = () =>  {
 
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
          
            <h1>LIST</h1>
      
    </div>
  );
};

export default List;
