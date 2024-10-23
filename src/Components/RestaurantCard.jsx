import React from 'react'

export default function RestaurantCard() {
  return (
    <div className="res-card">
      <img
        alt="pizza hut"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2024/7/17/33a9fbb9-9c06-4d00-8c93-576ad9046ffa_66108.jpg"
      ></img>
      <h3>Pizza Hut</h3>
      <h5>4.2 ratings</h5>
      <h5>40 - 45 mins</h5>
      <p>Pizzas</p>
      <p>Whitefield</p>
    </div>
  )
}