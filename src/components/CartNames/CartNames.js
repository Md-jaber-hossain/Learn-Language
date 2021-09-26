import React from 'react';

const CartNames = (props) => {
    // Destructuring the object properties
    const {name} = props.programmer;
    return (
        // show the cart name when click on button
        <div className="text-center">
            {name},
        </div>
    );
};

export default CartNames;