import React, { useState } from 'react'
import { useDebounce } from '../hooks/useDebounce';

function Products() {
    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);
  return (
    <div>
      <h1>Products</h1>
      <h3>Discover ammazing Products at great prices</h3>
      <div>
        <div className="search-box">
          <input
            type="text"
            placeholder="Search GitHub users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="search-input"
          />
        </div>
        <div>
          <h3>Category:</h3>
          <select name="category" id="category-list">
            <option value="allCategory">All category</option>
            <option value="electronics">Electronics</option>
            <option value="">Jewelery</option>
            <option value="">Men Cloths</option>
            <option value="">Women Cloths</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Products
