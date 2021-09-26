import React from "react";
import "./Programmers.css";

const Programmers = (props) => {
  // Destructuring the object properties
  const { name, position, age, country, salary, img } = props.programmer || {};

  return (
    <div className="col-md-4 p-0">
      <div className="cart">
        {/* Show the programmers picture */}
        <div className="programmer-image">
          <img className="img-center" src={img} alt="" />
        </div>
        {/* show the programmers details */}
        <div className="card-body">
          <h6><b>Name:</b> {name}</h6>
          <h6><b>Position:</b> {position}</h6>
          <h6><b>Age:</b> {age}</h6>
          <h6><b>Country:</b> {country}</h6>
          <h6><b>Salary:</b> $ {salary}</h6>
        </div>
        {/* click the button and calls the handleAddToCart function */}
        {
          props.programmer.isAdded ? (
            <div className="button-style">
              <button className="btn btn-danger mb-3"><i className="fas fa-calendar-check"></i> Person Added</button>
            </div>
          ) : (
            <div className="button-style">
              <button
                onClick={() => props.handleAddToCart(props.programmer)}
                className="btn btn-warning mb-3">
                <i className="fas fa-share-square"></i> Hire Person
              </button>
            </div>
          )
        }
        {/* icon for cart footer */}
        <div className="d-flex justify-content-between icon-p">
          <div className="fs-3">
            <i className="fab fa-facebook-square"></i>
          </div>
          <div className="fs-3 twitter">
            <i className="fab fa-twitter-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programmers;
