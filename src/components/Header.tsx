"use client"

import { useEffect, useState } from "react";
import "../app/globals.css";
import Login from "./Login";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const [statusMenu, setStatusMenu] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const pathname = usePathname();

  function openMenu() {
    setStatusMenu(true);
  }
  function closeMenu() {
    setStatusMenu(false);
  }

  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }
    , [])

  return (
    <header className={`header ${isScrolled ? "shadow-md bg-[#F4F6FF]" : ""}`}>
      <div className="header-main-desktop">
        <div className="header-cover-desktop limit-desktop">
          <Link href="/">
            <div className="header-right-desktop">
              <img src="./images/Layer_1.svg" alt="لوگو دایره" />
              <h2>فروشگاه محصولات طبیعی پدربزرگ</h2>
            </div>
          </Link>
          <div className="header-midle-desktop">
            <div className="input-header">
              <input type="text" placeholder="جست و جو..." />
              <img src="./images/search-normal.svg" alt="جست و جو.." />
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

        <div className={`cover-ul mt-4 ${statusMenu ? "active" : ""}`}>
          <div className="tap-menu">
            <button onClick={closeMenu}>
              <img className="" src="./images/Buttons.svg" alt="" />
            </button>
            <img className="logo-tap-menu" src="./images/logo.svg" alt="" />
          </div>
          <ul>

            <li className="group li-nav">
              <Link href="/">صفحه اصلی</Link>
              <img className={`pr-3.5 pt-1 ${pathname == "/" ? "block" : "opacity-0"} ${pathname !== "/" ? "group-hover:opacity-100 transition-opacity duration-200" : ""}`} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
            <li className="group">
              <Link href="/products">محصولات</Link>
              <img className={`pr-2.5 pt-1 ${pathname == "/products" ? "block" : "opacity-0"} ${pathname !== "/products" ? "group-hover:opacity-100 transition-opacity duration-200" : ""}`} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
            <li className="group">
              <Link href="blog">مجله</Link>
              <img className={`pr-0.5 pt-1 ${pathname == "/blog" ? "block" : "opacity-0"} ${pathname !== "/blog" ? "group-hover:opacity-100 transition-opacity duration-200" : ""} `} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
            <li className="group">
              <Link href="/about">درباره ما</Link>
              <img className={`pr-1.5 pt-1 ${pathname == "/about" ? "block" : "opacity-0"} ${pathname !== "/about" ? "group-hover:opacity-100 transition-opacity duration-200" : ""} `} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
            <li className="group">
              <Link href="contact-us">تماس باما </Link>
              <img className={`pr-2.5 pt-1 ${pathname == "/contact-us" ? "block" : "opacity-0"} ${pathname !== "/contact-us" ? "group-hover:opacity-100 transition-opacity duration-200" : ""} `} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
            <li className="group">
              <Link href="/spin-luck-shop">گردونه شانس</Link>
              <img className={`pr-5 pt-1 ${pathname == "/spin-luck-shop" ? "block" : "opacity-0"} ${pathname !== "/spin-luck-shop" ? "group-hover:opacity-100 transition-opacity duration-200" : ""} `} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
          </ul>
          {/* <img className="imgage-cover-menu" src="./images/Frame.svg" alt="عکس زیر منو" /> */}
        </div>
      </div>

      {/* {openLogin && <Login openLogin={openLogin}/>} */}

      <div className="header-cover-mobile limit">
        <div className="header-right">
          <button onClick={openMenu}>
            <img className="icon-image" src="./images/menu.svg" alt="منو" />
          </button>
          {/* /////////////// */}
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