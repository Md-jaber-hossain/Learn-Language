import React, { useEffect } from "react";
import { useState } from "react";
import Programmers from "../Programmers/Programmers";
import CartNames from "../CartNames/CartNames";
import "./Home.css";

const Home = () => {

    // this is the useState for fetching data from JSON file
    const [programmers, setProgrammers] = useState([]);
    useEffect(() => {
        fetch("./programmers.JSON")
            .then((res) => res.json())
            .then((programmers) => setProgrammers(programmers));
    }, []);

    // this is the useState for event handler and counting total
    const [cart, setCart] = useState([]);

    const handleAddToCart = (programmer) => {
        programmer.isAdded = true;
        const newAddedprogrammer = [...cart, programmer];
        setCart(newAddedprogrammer);
    };

    let total = 0;
    for (const person of cart) {

        total = total + person.salary;
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-9">
                        <div className="row">
                            {/* From the programmers array, calls the Programmers component to get each element */}
                            {programmers.map(programmer => (
                                <Programmers
                                    key={programmer.key}
                                    programmer={programmer}
                                    handleAddToCart={handleAddToCart}
                                ></Programmers>
                            ))}
                        </div>
                    </div>
                    <div className="col-md-3 right-side">
                        <div className="row">
                            {/* show the programmers added value and total salary of programmers */}
                            <div className="total-cart">
                                <h5><i className="fas fa-user-plus"></i> Programmers Added: {cart.length}</h5>
                                <h5><i className="fas fa-donate"></i> Total Cost: $ {total}</h5>
                                <hr />
                                {/* From the cart array value, calls the cartName component to get the name of programmer when click on button */}
                                {
                                    cart.map(cart => (
                                        <CartNames
                                            key={cart.key}
                                            programmer={cart}>
                                        </CartNames>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
