import React from 'react';

const Cart = (props) => {
    const { cart, clearCart, children } = props;

    let total = 0;
    let quantity = 0;
    for (const product of cart) {
        total = total + product.price * product.quantity;
        quantity = quantity + product.quantity;
    }

    return (
        <div>
            <h1> select items {quantity}</h1>
            <p>Total Price:{total} </p>
            <p>Total shipping: </p>
            <p>Tax</p>
            <p>Grand Total</p>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};

export default Cart;