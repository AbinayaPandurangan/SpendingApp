import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function CardItem(props) {
  const [itemQty, setItemQty] = useState(0);

  let cardItem = props.item;

  function plusItemQtyHandler(event) {
    event.preventDefault();

    setItemQty((itemQty) => itemQty + 1);

    cardItem.qty = itemQty + 1;

    props.addToCart(cardItem);
  }

  function minusItemQtyHandler(event) {
    event.preventDefault();

    setItemQty((itemQty) => itemQty - 1);

    cardItem.qty = itemQty - 1;

    props.removeFromCart(cardItem);
  }

  const isItemAddedToCart = props.cartTotalPrice !== 0;

  return (
    <div>
      <div className="cardbox col-lg-4">
        <div className="imagecontainer">
          <img
            className="image center-cropped"
            src={props.item.image}
            alt="Product"
          />
        </div>
        <h4>{props.item.title}</h4>
        <p>{props.item.description}</p>
        <h4>Price: ${props.item.price}</h4>

        <div className="addminusbtn">
          <button
            className="minusbtn"
            title={!itemQty && "Add items to cart first"}
            disabled={!itemQty}
            onClick={minusItemQtyHandler}
          >
            -
          </button>
          <p className="itemtxt">{isItemAddedToCart ? itemQty : 0}</p>
          <button
            title={
              props.cartTotalPrice + cardItem.price > props.budget &&
              "Budget will be overshot"
            }
            disabled={props.cartTotalPrice + cardItem.price > props.budget}
            className="addbtn"
            onClick={plusItemQtyHandler}
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
}

export default CardItem;
