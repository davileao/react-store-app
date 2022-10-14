import React from 'react';
import './cart-dropdown.styles.scss';
import Button from "../button";
import CartItem from "../cart-item.component/cart-item.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);

return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
            {cartItems.map((cartItem) =>
                <CartItem key={cartItem.id} item={cartItem}/>
            )}
        </div>
        <Button>CHECKOUT</Button>
    </div>
)
};

export default CartDropdown;