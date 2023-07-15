// import React from "react";
// import Card from "./Card";
// import { useState } from "react";
// import "bootstrap/dist/css/bootstrap.css";
// import Cart from "./cart";

// function Body() {
//   const [basket, setBasket] = useState([]);
//   // const [total, setTotal] = useState(0);
//   // const [qtyTotal, setQtyTotal] = useState(0);

//   const basketAddItem = (item) => {
//     const existingItem = basket.find((basketItem) => {
//       return basketItem.id == item.id;
//     });
//     const ifexists = existingItem !== undefined;

//     if (ifexists) {
//       setBasket((previousValue) => {
//         existingItem.qty += 1;

//         const basketWithoutfoundItem = basket.filter((basketItem) => {
//           return basketItem.id !== item.id;
//         });
//         return [...basketWithoutfoundItem, item];
//       });
//     } else {
//       setBasket((previousValue) => {
//         item.qty = 1;
//         return [...previousValue, item];
//       });
//     }
//   };

//   const basketRemoveitem = (item) => {
//     const removeitem = basket.find((basketItem) => {
//       return basketItem.id === item.id;
//     });

//     if (removeitem.qty > 1) {
//       setBasket((previousValue) => {
//         removeitem.qty -= 1;

//         const basketWithoutremoveItem = basket.filter((basketItem) => {
//           return basketItem.id !== item.id;
//         });
//         return [...basketWithoutremoveItem, item];
//       });
//     } else {
//       setBasket((previousValue) => {
//         const basketWithoutremoveItem = basket.filter((basketItem) => {
//           return basketItem.id !== item.id;
//         });
//         return [...basketWithoutremoveItem];
//       });
//     }
//   };

//   let products = [
//     {
//       id: 1,
//       title: "Canvas",
//       description: "High quality canvas shoes.",
//       price: "20",
//       discounted: "15",
//       currency: "$",
//       image: "http://domain.com/images/1.jpg",
//     },
//     {
//       id: 2,
//       title: "Sport shoes",
//       description: "Sporty shoes, durable at affordable ranges.",
//       price: "25",
//       currency: "$",
//       discounted: "15",
//       image: "http://domain.com/images/5.jpg",
//     },
//     {
//       id: 3,
//       title: "Heels",
//       description: "Fashionable trendy heels.",
//       currency: "$",
//       price: "30",
//       image: "http://domain.com/images/6.jpg",
//     },
//   ];

//   const basketTotal = basket.reduce((prevVal, curVal) => {
//     return prevVal + curVal.qty;
//   }, 0);

//   const basketAmount = basket.reduce((prevVal, curVal) => {
//     return prevVal + curVal.price * curVal.qty;
//   }, 0);

//   return (
//     <div>
//       {products.map((product) => (
//         <Card
//           item={product}
//           onBasketAdd={basketAddItem}
//           onBasketMinus={basketRemoveitem}
//         />
//       ))}

//       <div>
//       <Cart items ={basket} basketTotal={basketTotal} basketAmount={basketAmount}/>
//       </div>
//     </div>
//   );
// }

// export default Body;
