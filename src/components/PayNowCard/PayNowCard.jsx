import React from "react";
import "./PayNowCard.css";
const PayNowCard = (props) => {
  return (
    <div className="PayNowCard-Container">
      <div className="card mt-50 mb-50">
        <div className="card-title mx-auto">Pay Bill - {props.price}$</div>
        <form>
          <span id="card-header">cards Number:</span>
          <div className="row row-1">
            <div className="col-2">
              <img
                className="img-fluid"
                src="https://img.icons8.com/color/48/000000/mastercard-logo.png"
              />
            </div>
            <div className="col-7">
              <input type="text" placeholder="**** **** **** 3193" />
            </div>
          </div>

          <span id="card-header">card Details:</span>
          <div className="row-1">
            <div className="row row-2">
              <span id="card-inner">Card holder name</span>
            </div>
            <div className="row row-2">
              <input type="text" placeholder="Bojan Viner" />
            </div>
          </div>
          <div className="row three">
            <div className="col-7">
              <div className="row-1">
                <div className="row row-2">
                  <span id="card-inner">Card number</span>
                </div>
                <div className="row row-2">
                  <input type="text" placeholder="5134-5264-4" />
                </div>
              </div>
            </div>
            <div className="col-2">
              <input type="text" placeholder="Exp. date" />
            </div>
            <div className="col-2">
              <input type="text" placeholder="CVV" />
            </div>
          </div>
          <button className="btn d-flex mx-auto">
            <b>PAY NOW</b>
          </button>
        </form>
      </div>
    </div>
  );
};

export default PayNowCard;
