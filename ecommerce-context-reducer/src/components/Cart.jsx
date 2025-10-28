import React, { useContext } from 'react';
import { CartContext, ACTIONS } from '../context/CartContext';

export default function Cart() {
  const { state, dispatch } = useContext(CartContext);

  const removeItem = (id) => dispatch({ type: ACTIONS.REMOVEFROMCART, payload: id });
  const clearCart = () => dispatch({ type: ACTIONS.CLEARCART });
  const setQte = (id, qte) => dispatch({ type: ACTIONS.MODIFYQTE, payload: { id, qte } });

  return (
    <div className="container my-4 ">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h4>Panier</h4>
        <button className="btn btn-outline-danger btn-sm" onClick={clearCart}>Vider le panier</button>
      </div>
      {state.cart.length === 0 ? (
        <div className="alert alert-info">Votre panier est vide.</div>
      ) : (
        <>
          <ul className="list-group mb-3">
            {state.cart.map((item) => (
              <li key={item.id} className="list-group-item d-flex align-items-center">
                <img src={item.image} alt={item.title} width="60" height="40" className="me-3 rounded" />
                <div className="me-auto">
                  <div className="fw-semibold">{item.title}</div>
                  <div className="text-muted">${item.price} / unité</div>
                </div>
                <div className="input-group input-group-sm me-3" style={{Width: 40 }}>
                  <span className="input-group-text">Qte</span>
                  <input
                    type="number"
                    className="form-control"
                    value={item.qte}
                    min={0}
                    onChange={(e) => setQte(item.id, Number(e.target.value))}
                  />
                </div>
                <div className="me-3 fw-bold">${(item.price * item.qte).toFixed(2)}</div>
                <button className="btn btn-sm btn-outline-danger" onClick={() => removeItem(item.id)}>
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="d-flex justify-content-end">
            <div className="h5">Total: ${state.totalAmount.toFixed(2)}</div>
          </div>
        </>
      )}
    </div>
  );
}