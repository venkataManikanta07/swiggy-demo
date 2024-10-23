import React from 'react'
import {LOGO_URL} from "../utils/constants"

export default function Header() {
  return (

    <div className="header">
    <div className="image-container">
      <img
        alt="HeaderImage"
        className="headerImage"
        src={LOGO_URL}
      />
    </div>
    <div className="nav-items">
      <ul>
        <li>Search</li>
        <li>Offers</li>
        <li>help</li>
        <li>Sign in</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
  )
}
