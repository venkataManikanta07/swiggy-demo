import React from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

export default function Header() {
  const onlineStatus = useOnlineStatus();
  return (
    <div className="m-1 flex justify-between items-center h-[6rem] border border-gray-500 border-solid">
      <div className="image-container m-1">
        <img alt="HeaderImage" className="w-16 mx-4" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className=" flex ">
          <li className="mr-4">Status: {onlineStatus ? "✅" : "❌"}</li>
          <Link className="mr-4" to="/" id="home-navigators">
            Home
          </Link>
          <Link className="mr-4" to="/about" id="home-navigators">
            About us
          </Link>
          <Link className="mr-4" to="/contact" id="home-navigators">
            Contact us
          </Link>
          <Link className="mr-4" to="/grocery" id="home-navigators">
            Grocery
          </Link>
          <Link className="mr-4" id="home-navigators">
            {" "}
            Cart
          </Link>
        </ul>
      </div>
    </div>
  );
}
