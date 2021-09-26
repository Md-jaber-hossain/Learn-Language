import React from 'react';

const CartNames = (props) => {
    // Destructuring the object properties
    const {name} = props.programmer;
    return (
        // show the cart name when click on button
        <div className="text-center total-cart bg-warning">
            <h5>{name}</h5>
        </div>
    );
};

export default CartNames;