"use client"
// import { Link } from "react-router-dom";

// import {
//   menu,
//   instagram,
//   know,
//   logo,
//   login,
//   cart,
//   logoCircle,
//   search,
//   logintwo,
//   downmenu,
//   buttonmenu,
//   bg,
//   remove,
//   arrow,
// } from "../assets/img/icon";
import { useState } from "react";
import "../app/globals.css";
import Login from "./Login";

function Header() {
  const [statusMenu, setStatusMenu] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);

  function openMenu() {
    setStatusMenu(true);
  }
  function closeMenu() {
    setStatusMenu(false);
  }

  return (
    <header className="header">
      <div className="header-main-desktop">
        <div className="header-cover-desktop limit-desktop">
          <div className="header-right-desktop">
            <img src="./images/Layer_1.svg" alt="لوگو دایره" />
            <h2>فروشگاه محصولات طبیعی پدربزرگ</h2>
          </div>
          <div className="header-midle-desktop">
            <div className="inpup-header">
              <input type="text" placeholder="جست و جو..." />
              <img src="./images/search-normal.svg" alt="جست و جو..." />
            </div>
          </div>
          <div className="header-left-desktop" id="login">
            {/* <button> */}
            <img
              onClick={() => setOpenLogin(!openLogin)}
              className="image-cart-desktop var"
              src="./images/login.svg"
              alt=""
            />
            {/* </button> */}
            <button className="btn" onClick={() => setOpenLogin(!openLogin)}>
              <img src="./images/Login 2.svg" alt="ورود" />
              ورود/ثبت نام
            </button>
            <img className="image-cart-desktop" src="./images/cart.svg" alt="سبد خرید" />
          </div>
        </div>

        <div
          className={statusMenu ? "covermenu" : ""}
          onClick={closeMenu}
        ></div>

        <div className={`cover-ul ${statusMenu ? "active" : ""}`}>
          <div className="tap-menu">
            <button onClick={closeMenu}>
              <img className="" src="./images/Buttons.svg" alt="" />
            </button>
            <img className="logo-tap-menu" src="./images/logo.svg" alt="" />
          </div>
          <ul>
            <li>صفحه اصلی</li>
            <li>محصولات</li>
            <li>مجله</li>
            <li>درباره ما</li>
            <li>تماس باما</li>
          </ul>
          <img className="imgage-cover-menu" src="./images/Frame.svg" alt="عکس زیر منو" />
        </div>
      </div>

      {/* {openLogin && <Login openLogin={openLogin}/>} */}

      <div className="header-cover-mobile limit">
        <div className="header-right">
          <button onClick={openMenu}>
            <img className="icon-image" src="./images/menu.svg" alt="منو" />
          </button>
          <img className="icon-image" src="./images/instagram.svg" alt="اینستاگرام" />
          <img className="icon-image" src="./images/know.svg" alt="know" />
        </div>
        <div className="header-middle">
          <img className="" src="./images/logo.svg" alt="logo" />
        </div>
        <div className="header-left">
          <button onClick={() => setOpenLogin(!openLogin)}>
            <img className="icon-image" src="./images/login.svg" alt="ورود" />
          </button>
          <img className="icon-image" src="./images/cart.svg" alt="سبد خرید" />
        </div>
      </div>

      <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />
    </header>
  );
}

export default Header;