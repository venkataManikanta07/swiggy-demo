import React, { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux"; // Import the selector

export default function Header() {
  const [buttonText, setButtonText] = useState("Login");
  const handleLogin = () => {
    buttonText === "Login" ? setButtonText("Logout") : setButtonText("Login");
  };
  const onlineStatus = useOnlineStatus();
  const { loggedInUser } = useContext(UserContext);

  //Subscribing to the store using the selector.
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="m-1 flex justify-between items-center h-[6rem] border border-gray-500 border-solid">
      <div className="image-container m-1">
        <img alt="HeaderImage" className="w-16 mx-4" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className=" flex ">
          <li className="mx-4">Status: {onlineStatus ? "✅" : "❌"}</li>
          <Link className="mx-4" to="/">
            Home
          </Link>
          <Link className="mx-4" to="/about">
            About us
          </Link>
          <Link className="mx-4" to="/contact">
            Contact us
          </Link>
          <Link className="mx-4" to="/grocery">
            Grocery
          </Link>
          <Link className="mx-4" to="/cart">
            <div className="flex">
              <span>
                <FaShoppingCart className="h-5 w-5 m-1" />
              </span>{" "}
              <h3>{cartItems.length}</h3>
            </div>
          </Link>
          <li className="mx-4">{loggedInUser}</li>
          <button className="mx-4" onClick={() => handleLogin()}>
            {buttonText}
          </button>
        </ul>
      </div>
    </div>
  );
}
