import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import "../styles/PreNavbar.css";

const PreNavbar = () => {
  const cartIcon = <FaShoppingCart />;

  return (
    <div className="PreNav">
      <div>
        <a href="https://www.mi.com/in/">MI INDIA</a> <span>|</span>
        <a href="https://in.event.mi.com/in/install-mi-store">GET MI STORE APP</a> <span>|</span>
        <a href="https://www.mi.com/in/service/help/#category_id=1&pagenum=1&channel=1">ONLINE HELP</a> <span>|</span>
        <a href="https://www.mi.com/in/service/authorized_stores/">RETAIL STORE ﹀</a>
      </div>
      <div>
        <a href="https://store.mi.com/in/site/login">SIGN IN</a> <span>|</span>
        <a href="https://account.xiaomi.com/pass/register">SIGN UP</a> <span>|</span>
        <a href="https://store.mi.com/in/site/login">{cartIcon} CART (0)</a>
      </div>
    </div>
  );
};

export default PreNavbar;



