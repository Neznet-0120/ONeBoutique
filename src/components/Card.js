import React from 'react';
import '../styles/card.css';


const Card = ({ product, onAdd }) => {
    const { name, price, image, category ,description } = product;

    return (
        <div className="product-card">
            <div className="product-card__image-wrapper">
                <img src={image} alt={name} className="product-card__image" />
                <div className="product-card__badge">{category}</div>
            </div>

            <div className="product-card__info">
                <h3 className="product-card__title">{name}</h3>
                <p className="product-card__description">{description}</p>
                <p className="product-card__price">{price.toLocaleString()}$</p>
                <button className="product-card__button" onClick={() => onAdd(product)}>
                    В корзину
                </button>
            </div>
        </div>
    );
};

export default Card;
