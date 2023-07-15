import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import React, { useState } from "react";

// import productsExternal from "./data/products";
import Header from "./components/Header";
import Card from "./components/CardItem";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);
  const [budget, setBudget] = useState(0);

  const addToCartHandler = (item) => {
    const existingItem = cart.find((cartItem) => {
      return cartItem.id === item.id;
    });
    const itemExists = existingItem !== undefined;

    if (itemExists) {
      setCart((previousValue) => {
        existingItem.qty += 1;

        const cartWithoutfoundItem = cart.filter((cartItem) => {
          return cartItem.id !== item.id;
        });
        return [...cartWithoutfoundItem, item];
      });
    } else {
      setCart((previousValue) => {
        item.qty = 1;
        return [...previousValue, item];
      });
    }
  };

  const removeFromCartHandler = (item) => {
    const removeitem = cart.find((cartItem) => {
      return cartItem.id === item.id;
    });

    if (removeitem.qty > 1) {
      setCart((previousValue) => {
        removeitem.qty -= 1;

        const cartWithoutremoveItem = cart.filter((cartItem) => {
          return cartItem.id !== item.id;
        });
        return [...cartWithoutremoveItem, item];
      });
    } else {
      setCart((previousValue) => {
        const cartWithoutremoveItem = cart.filter((cartItem) => {
          return cartItem.id !== item.id;
        });
        return [...cartWithoutremoveItem];
      });
    }
  };

  let products = [
    {
      id: 1,
      title: "Boys 3Pcs Clothing Sets",
      description: "Cotton Long Sleeve Bowtie Shirts +Vest +Pants Casual Suit",
      price: 20,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/61ZK5DBuz4L._AC_UX569_.jpg",
    },
    {
      id: 2,
      title: "Girls Cotton Dresses",
      description: "Perfashion Girls Cotton Dresses Sleeveless",
      price: 24,
      currency: "$",
      discounted: "15",
      image: "https://m.media-amazon.com/images/I/712Cs+9+fLL._AC_UY550_.jpg",
    },
    {
      id: 3,
      title: "Funnymore Baby Toddler Boy's set",
      description: "Cotton Short Sleeve Tshirt and Short Set",
      currency: "$",
      price: 30,
      image: "https://m.media-amazon.com/images/I/71mS8XI3pLL._AC_UX569_.jpg",
    },
    {
      id: 4,
      title: "Boys Summer Clothes ",
      description: "Frogwill Jungle Animal Cotton T-Shirt and Short Set",
      price: 20,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/61ElLZSIU8L._AC_UX569_.jpg",
    },
    {
      id: 5,
      title: "Girls Princess Dresses",
      description: "Denim Tops Flower Girl Dress for Summer",
      price: 28,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/81gStnYxX1L._AC_UX569_.jpg",
    },
    {
      id: 6,
      title: "Party Tutu Dresses for Little Girls",
      description: "Toddler Girls Dresses for Summer Short Sleeve Kid Clothes ",
      price: 20,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/61dXp9PSCrL._AC_UX569_.jpg",
    },
    {
      id: 7,
      title: "Denim Princess Dresses",
      description: "Casual Bowknot Front One-Piece Tutu Sundress Skirt",
      price: 30,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/61kFFUD1Z8L._AC_UX569_.jpg",
    },
    {
      id: 8,
      title: "Lace Bridesmaid Dress ",
      description: "Glamulice Flower Girls Long Dresses Tulle Party Gown",
      price: 35,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/81FVyJeeBeL._AC_UX679_.jpg",
    },
    {
      id: 9,
      title: "Pink Princess Mesh Tulle Dress",
      description: "Girl's Tutu Dress Ruffle Sleeve asual Dress",
      price: 20,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/61E6S2+VuTL._AC_UX569_.jpg",
    },
    {
      id: 10,
      title: "Raphael T-Shirt & Mesh shorts set",
      description: "Teenage Mutant Ninja Turtles Outfit Set",
      price: 25,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/71LskZ9uJeL._AC_UX569_.jpg",
    },
    {
      id: 11,
      title: "Toy Story T-Shirt",
      description: "Disney Boys Toy Story T-Shirt and Shorts Set",
      price: 18,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/81Mhh98xhtL._AC_UY679_.jpg",
    },
    {
      id: 12,
      title: "Girl's 2 Piece Outfit ",
      description: "Floral Print Long Sleeve Top and Shorts Set",
      price: 24,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/61OjyYGyuvL._AC_UY550_.jpg",
    },
    {
      id: 13,
      title: "Sleeveless Dress Shorts Set",
      description: "Girls Summer Holiday Outfits 2pcs",
      price: 18,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/71fHthWdMuL._AC_UX522_.jpg",
    },
    {
      id: 14,
      title: "Girls Princess Snowflake",
      description: "Blue Silver Satin Trimmed Tutu Birthday Outfit",
      price: 23,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/71aOX85Mu6L._AC_UX522_.jpg",
    },
    {
      id: 15,
      title: "Spider-Man T-Shirt and Shorts ",
      description: "Marvel Spider-Man T-Shirt and Shorts Outfit Set",
      price: 20,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/713orn8-M8L._AC_UX522_.jpg",
    },
    {
      id: 16,
      title: "Sonic the Hedgehog set",
      description: "Sonic the Hedgehog T-Shirt and Bike Shorts Outfit Set",
      price: 20,
      discounted: "15",
      currency: "$",
      image: "https://m.media-amazon.com/images/I/71541s+W-7L._AC_UX522_.jpg",
    },
  ];

  const cartTotalQty = cart.reduce((prevVal, curVal) => {
    return prevVal + curVal.qty;
  }, 0);

  const cartTotalPrice = cart.reduce((prevVal, curVal) => {
    return prevVal + curVal.price * curVal.qty;
  }, 0);

  const setBudgetHandler = (input) => {
    let numInput = Number(input);
    setBudget(numInput);
  };

  // const clearCartHandler = (i) => {
  //   // setCart([]);
  //   refreshPage();
  // };

  return (
    <div className="container">
      <Header setBudget={setBudgetHandler} />
      {/* <Header setBudget={setBudgetHandler} clearCart={clearCartHandler} /> */}
      <div className="space"></div>
      <div className="cardcontainer d-inline col-lg-9">
        {products.map((product) => (
          <Card
            item={product}
            addToCart={addToCartHandler}
            removeFromCart={removeFromCartHandler}
            cartTotalPrice={cartTotalPrice}
            budget={budget}
          />
        ))}
      </div>
      <div className="d-inline float-lg-right position-fixed">
        <Cart
          items={cart}
          cartTotalQty={cartTotalQty}
          cartTotalPrice={cartTotalPrice}
        />
      </div>
    </div>
  );
}

export default App;
