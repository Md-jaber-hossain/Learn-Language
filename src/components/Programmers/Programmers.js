import React from "react";
import "./Programmers.css";

const Programmers = (props) => {
  // Destructuring the object properties
  const { name, position, age, country, salary, img } = props.programmer || {};

  return (
    <div className="col-md-4">
      <div className="cart">
        {/* Show the programmers picture */}
        <div className="user-image">
          <img className="img-center" src={img} alt="" />
        </div>
        {/* show the programmers details */}
        <div className="card-body">
          <h6><b>Name:</b> {name}</h6>
          <h6><b>Position:</b> {position}</h6>
          <h6><b>Age:</b> {age}</h6>
          <h6><b>Country:</b> {country}</h6>
          <h6><b>Salary:</b> {salary}</h6>
        </div>
        {/* click the button and calls the handleAddToCart function */}
        {props.programmer.isAdded ? (
          <div className="button-style">
            <button className="btn btn-danger mb-3"><i className="fas fa-cart-plus"></i> Cart Added</button>
          </div>
        ) : (
          <div className="button-style">
              <button
              onClick={() => props.handleAddToCart(props.programmer)}
              className="btn btn-warning mb-3">
              <i className="fas fa-cart-plus"></i> Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Programmers;
