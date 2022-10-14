import {createContext, useState, useEffect} from "react";

const addCartItem = (cartItems, cartItemToAdd) => {

const existingCartItem = cartItems.find(
        cartItem => cartItem.id === cartItemToAdd.id
    );

    if (existingCartItem) {
        return cartItems.map(cartItem =>
            cartItem.id === cartItemToAdd.id
                ? {...cartItem, quantity: cartItem.quantity + 1}
                : cartItem
        );
    }

    return [...cartItems, {...cartItemToAdd, quantity: 1}];
}

export const CartContext = createContext({
    isCartOpen: false,
    setIsCartOpen: () => {    },
    cartItems: [],
    addItemCart: () => {    },

});

export const CartProvider = ({children}) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartItemsCount, setCartItemsCount] = useState(0);

    useEffect(() => {
        const newCartItemsCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0);
        setCartItemsCount(newCartItemsCount);

    }
    , [cartItems]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartItemsCount};

    return (
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
};