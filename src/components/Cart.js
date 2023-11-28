import React from "react";
import emptyCartImg from "./assests/empty-cart-image.jpg";

function Cart(props) {
  return (
    <div className="cart">
      <div>
        <p className="carttext bold">
          My Cart!
          <span className="badge badge-secondary pull-right">
            {props.cartTotalQty} Qty
          </span>
        </p>

        {props.cartTotalQty == 0 ? (
          <img
            className="cartimage"
            src={emptyCartImg}
            alt="Your cart is Empty! Start Shopping!"
          />
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Item Name</th>
                <th scope="col">Qty</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              {props.items.map((cartItem) => {
                return (
                  <tr>
                    <td>{cartItem.title}</td>
                    <td>{cartItem.qty}</td>
                    <td>${cartItem.price * cartItem.qty}</td>
                  </tr>
                );
              })}
              <tr>
                <td>
                  <span className="bold">Grand Total</span>
                </td>
                <td className="bold"> {props.cartTotalQty}</td>
                <td className="bold">${props.cartTotalPrice}</td>
              </tr>
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default Cart;
