import React, { useState } from "react";
import { useDebounce } from "../hooks/useDebounce";
import "./Products.css"


function Products() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  return (
    <div>
      <h1>Products</h1>
      <h3>Discover ammazing Products at great prices</h3>
      <div className="filter-bar">
        <div className="search-box">
          <input
            type="text"
            placeholder="Search ..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div className="cat-box">
          <h3>Category:</h3>
          <select name="category" id="category-list">
            <option value="allCategory">All category</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewelery</option>
            <option value="men's clothing">Men Cloths</option>
            <option value="women's clothing">Women Cloths</option>
          </select>
        </div>
        <div className="rate-box">
          <h3>Rating:</h3>
          <select name="Rating" id="category-list">
            <option value="4.5 & above" defaultChecked>
              Rating
            </option>
            <option value="4.5 & above">4.5 & Above</option>
            <option value="4.0 & above">4.0 & Above</option>
            <option value="3.5 & above">3.5 & Above</option>
            <option value="3.0 & above">3.0 & Above</option>
            <option value="1.0 & above">1.0 & Above</option>
          </select>
        </div>
        <button className="sync-btn">Sync Products</button>
      </div>
    </div>
  );
}

export default Products;
