import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import {filterByPrice , filterByColor , filterByCategory , filterByBrand} from '../slices/ProductsSlice'

import BasicRating from './rating'

export const Filters = () => {
  const dispatch = useDispatch();
  const { items, filters } = useSelector(state => state.products);

  const categories = ['all', ...new Set(items.map(p => p.category))];
  const colors = ['all', ...new Set(items.map(p => p.color))];
  const brands = ['all', ...new Set(items.map(p => p.brand))];

  return (
    <div className="filters">
      <h3>Filters</h3>
      
      <div className="filter-group">
        <label>Category</label>
        <select value={filters.category} onChange={(e) => dispatch(filterByCategory(e.target.value))}>
          {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
        </select>
      </div>

      <div className="filter-group">
        <label>Brand</label>
        <select value={filters.brand} onChange={(e) => dispatch(filterByBrand(e.target.value))}>
          {brands.map(brand => <option key={brand} value={brand}>{brand}</option>)}
        </select>
      </div>

      <div className="filter-group">
        <label>Color</label>
        <select value={filters.color} onChange={(e) => dispatch(filterByColor(e.target.value))}>
          {colors.map(color => <option key={color} value={color}>{color}</option>)}
        </select>
      </div>

      <div className="filter-group">
        <label>Price Range: ${filters.priceRange[0]} - ${filters.priceRange[1]}</label>
        <input 
          type="range" 
          min="0" 
          max="1000" 
          value={filters.priceRange[1]}
          onChange={(e) => dispatch(filterByPrice([0, parseInt(e.target.value)]))}
        />
      </div>
      <div className="filter-group">
        <BasicRating/>
      </div>
    </div>
  );
};