import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="w-full bg-gray-400 flex justify-between p-4">
      <div>
        <h1 className="text-2xl font-bold font-sans">
          <Link to="/">Project 1</Link>
        </h1>
      </div>
      <div>
        <div className="flex justify-between text-xl font-bold font-sans">
          <button className="border-black border-2 rounded-md px-2 py-1 mx-2">
            <Link to="/Login"> Login </Link>
          </button>
          <button className="border-black border-2 rounded-md px-2 py-1 mx-2">
            <Link to="/signup"> Signup </Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;
