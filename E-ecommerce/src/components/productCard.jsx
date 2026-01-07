import React from "react";

export const ProductCard = ({ product, onAddToCart }) => {

  // style={{ backgroundColor: product.color.toLowerCase() }}

  console.log("color : ", product)
  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title.substring(0, 50)}...</h3>
      <p className="brand">{product.brand}</p>
      <p className="category">{product.category}</p>
      <div className="rating">
        {'⭐'.repeat(Math.round(product.rating.rate))} ({product.rating.rate})
      </div>
      <p className="price">${product.price}</p>
      <div className="color-indicator" ></div>
      <button onClick={() => onAddToCart(product)} className="add-to-cart">
        Add to Cart
      </button>
    </div>
  );
};


