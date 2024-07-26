import React from "react";
import "./Header.css";



const Header = () => {
  return (
    <div className="header">
      <div className="header-contents">
        <h2>Order your favourite food here</h2>
        <p>
          "Experience the convenience of fresh, delicious meals delivered right
          to your doorstep with our food delivery app. Satisfy your cravings
          anytime, anywhere with just a few taps!"
        </p>
        <button>View menu</button>
      </div>
    </div>
  );
};

export default Header;
