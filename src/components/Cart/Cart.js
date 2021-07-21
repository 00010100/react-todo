import React, { useState } from 'react';
import {
  VenomPhoto,
  JasonPhoto,
  CarnagePhoto,
  Dracon,
  FavoriteIcon,
} from '../index';

import CartItem from './CartItem';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const CartInfoPerson = [
  {
    id: 1,
    name: 'Веном',
    images: VenomPhoto,
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    addCart: 'Добавить Венома',
  },

  {
    id: 2,
    name: 'Джейсон Вурхиз',
    images: JasonPhoto,
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    addCart: 'Добавить Джейсона Вурхиза',
  },

  {
    id: 3,
    name: 'Карнаж',
    images: CarnagePhoto,
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    addCart: 'Добавить Карнажа',
  },

  {
    id: 4,
    name: 'Дракон',
    images: Dracon,
    text: 'Some quick example text to build on the card title and make up the bulk of the cards content.',
    addCart: 'Добавить Дракона',
  },
];

const Cart = React.memo(function Cart() {
  const [value, setValue] = useState('');

  const filteredHeroes = CartInfoPerson.filter((cart) => {
    return cart.name.toLowerCase().includes(value.toLowerCase());
  });

  const handlerChangeInput = (event) => {
    setValue(event.target.value);
  };

  const itemClickHandler = (e) => {
    setValue(e.target.textContent);
    setOpen(!isOpen);
  };

  const [isOpen, setOpen] = useState(true);

  const inputClickHandler = () => {
    setOpen(true);
  };

  const sumbitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className="container">
      <div className="cart">
        <form
          onSubmit={sumbitHandler}
          className="d-flex align-items-center justify-content-between mt-3 mb-3"
        >
          <input
            placeholder="Найти Героя"
            className="input-heroes"
            value={value}
            onChange={handlerChangeInput}
            type="text"
            onClick={inputClickHandler}
          />
          <ul style={{ marginLeft: '113px' }} className="autocompleted">
            {value && isOpen
              ? filteredHeroes.map((cart) => (
                  <li
                    onClick={itemClickHandler}
                    key={cart.id}
                    className="autocompleted__item"
                  >
                    {[cart.name]}
                  </li>
                ))
              : null}
          </ul>
          <div className="cart__num d-flex">
            <NavLink to="/favorite">
              <img style={{ width: '40px' }} src={FavoriteIcon} alt="" />
            </NavLink>
            <h2>0</h2>
          </div>
        </form>
      </div>
      <div className="d-flex flex-wrap justify-content-between mt-3">
        {filteredHeroes.map((cart) => (
          <CartItem
            key={cart.id}
            name={[cart.name]}
            images={cart.images}
            text={cart.text}
            addCart={cart.addCart}
          />
        ))}
      </div>
    </div>
  );
});

CartInfoPerson.propTypes = {
  name: PropTypes.string.isRequired,
  images: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  addCart: PropTypes.string.isRequired,
};

export default Cart;
