import React from 'react';
import '../styles/cart.css';

const CartModal = ({ cartItems, onClose, onRemove }) => {
  // Считаем итоговую сумму
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div className="cart-overlay">
      <div className="cart-modal">
        <button className="cart-close" onClick={onClose}>×</button>
        <h2>Ваша корзина</h2>
        
        {cartItems.length === 0 ? (
          <p>Корзина пуста</p>
        ) : (
          <>
            <div className="cart-items">
              {cartItems.map((item, index) => (
                <div key={index} className="cart-item">
                  <img src={item.image} alt={item.name} />
                  <div className="cart-item-info">
                    <h4>{item.name}</h4>
                    <p>{item.price.toLocaleString()} $</p>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => onRemove(item.id)}
                    style={{ background: 'none', border: 'none', color: 'red', cursor: 'pointer'}}
                    >
                        Удалить
                    </button>
                </div>
              ))}
            </div>
            <div className="cart-total">
              <h3>Итого: {total.toLocaleString()} $</h3>
              <button className="checkout-btn">Оформить заказ</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;