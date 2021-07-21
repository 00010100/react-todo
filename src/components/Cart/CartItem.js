import React from 'react';
import PropTypes from 'prop-types';

const CartItem = React.memo(function CartItem({ name, images, addCart, text }) {
  return (
    <div className="card" style={{ width: '20rem', height: '205px' }}>
      <img
        src={images}
        style={{ width: '20rem', height: '205px' }}
        className="card-img-top"
        alt=""
      />
      <div style={{ border: '1px solid #ccc' }} className="card-body">
        <h5 className="card-title">{name}</h5>
        <p style={{ fontSize: '15px' }} className="card-text">
          {text}
        </p>
        <button className="btn btn-primary">{addCart}</button>
      </div>
    </div>
  );
});

CartItem.propTypes = {
  name: PropTypes.array.isRequired,
  images: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  addCart: PropTypes.string.isRequired,
};

export default CartItem;
