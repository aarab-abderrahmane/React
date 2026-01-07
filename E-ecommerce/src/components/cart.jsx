import React, {  useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {modifyQuantity , removeFromCart , incrementQuantity , decrementQuantity} from "../slices/cartSlice"

export const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);
  const [isOpen, setIsOpen] = useState(false);

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <>
      <button className="cart-button" onClick={() => setIsOpen(!isOpen)}>
        🛒 Cart ({cartItems.length})
      </button>
      
      {isOpen && (
        <div className="cart-modal">
          <div className="cart-content">
            <h2>Shopping Cart</h2>
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <>  
                {cartItems.map(item => (
                  <div key={item.id} className="cart-item">
                    <img src={item.image} alt={item.title} />
                    <div className="cart-item-details">
                      <h4>{item.title.substring(0, 30)}...</h4>
                      <p>${item.price}</p>
                      <div className="quantity-controls">
                        <button  onClick={() => dispatch(decrementQuantity(item.id))}>-</button>
                        <span>{item.quantity}</span>
                        <button onClick={() => dispatch(incrementQuantity(item.id))}>+</button>
                      </div>
                    </div>
                    <button onClick={() => dispatch(removeFromCart(item.id))} className="remove-btn">×</button>
                  </div>
                ))}
                <div className="cart-total">
                  <strong>Total: ${total.toFixed(2)}</strong>
                </div>
              </>
            )}
            <button onClick={() => setIsOpen(false)} className="close-cart">Close</button>
          </div>
        </div>
      )}
    </>
  );
};
