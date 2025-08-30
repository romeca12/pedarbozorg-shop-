"use client"

import { useEffect, useState } from "react";
import "../app/globals.css";
import Login from "./Login";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Header() {
  const [statusMenu, setStatusMenu] = useState<boolean>(false);
  const [openLogin, setOpenLogin] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const pathname = usePathname();

  function closeMenu() {
    setStatusMenu(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 14) {
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
    <header className={`header ${isScrolled && "shadow bg-secondary"}`}>
      <div className="header-main-desktop">
        <div className="header-cover-desktop limit-desktop">
          {pathname === "/" ?
            <span>
              <div className="header-right-desktop">
                <img src="./images/Layer_1.svg" alt="لوگو دایره" />
                <h2>فروشگاه محصولات طبیعی پدربزرگ</h2>
              </div>
            </span> :
            <Link href="/">
              <div className="header-right-desktop">
                <img src="./images/Layer_1.svg" alt="لوگو دایره" />
                <h2>فروشگاه محصولات طبیعی پدربزرگ</h2>
              </div>
            </Link>
          }
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


        {/* {statusMenu && (
          <div
            className=""
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 40,
              backdropFilter: "blur(6px)",
              background: "rgba(0,0,0,0.1)",
              transition: "backdrop-filter 0.3s"
            }}
            onClick={closeMenu}
          />
        )} */}
        {/* cover of menu */}

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
              {pathname === "/" ? <span>صفحه اصلی</span> : <Link href="/" onClick={() => setStatusMenu(false)}>صفحه اصلی</Link>}
              <img className={`-translate-x-3.5 pt-0.5 responsive-img-nav-link ${pathname == "/" ? "block" : "show-img-menu"} ${pathname !== "/" ? "hover-img-menu rotate-y-90" : ""}`} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
            <li className="group">
              {pathname === "/products" ? <span>محصولات</span> : <Link href="/products" onClick={() => setStatusMenu(false)}>محصولات</Link>}
              <img className={`-translate-x-2.5 pt-0.5 responsive-img-nav-link ${pathname == "/products" ? "block" : "show-img-menu"} ${pathname !== "/products" ? "hover-img-menu rotate-y-90" : ""}`} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
            <li className="group">
              {pathname === "/blog" ? <span>مجله</span> : <Link href="/blog" onClick={() => setStatusMenu(false)}>مجله</Link>}
              <img className={`-translate-x-0.5 pt-0.5 responsive-img-nav-link ${pathname == "/blog" ? "block" : "show-img-menu"} ${pathname !== "/blog" ? "hover-img-menu rotate-y-90" : ""} `} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
            <li className="group">
              {pathname === "/about" ? <span>درباره ما</span> : <Link href="/about" onClick={() => setStatusMenu(false)}>درباره ما</Link>}
              <img className={`-translate-x-1.5 pt-0.5 responsive-img-nav-link ${pathname == "/about" ? "block" : "show-img-menu"} ${pathname !== "/about" ? "hover-img-menu rotate-y-90" : ""} `} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
            <li className="group">
              {pathname === "/contact-us" ? <span>تماس باما</span> : <Link href="/contact-us" onClick={() => setStatusMenu(false)}>تماس باما</Link>}
              <img className={`-translate-x-2.5 pt-0.5 responsive-img-nav-link ${pathname == "/contact-us" ? "block" : "show-img-menu"} ${pathname !== "/contact-us" ? "hover-img-menu rotate-y-90" : ""} `} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
            <li className="group">
              {pathname === "/spin-luck-shop" ? <span>گردونه شانس</span> : <Link href="/spin-luck-shop" onClick={() => setStatusMenu(false)}>گردونه شانس</Link>}
              <img className={`-translate-x-5 pt-0.5 responsive-img-nav-link ${pathname === "/spin-luck-shop" ? "block" : "show-img-menu"} ${pathname !== "/spin-luck-shop" ? "hover-img-menu rotate-y-90" : ""}`} src="./images/Frame.svg" alt="عکس زیر منو" />
            </li>
          </ul>
          {/* <img className="imgage-cover-menu" src="./images/Frame.svg" alt="عکس زیر منو" /> */}
        </div>
      </div>

      {/* {openLogin && <Login openLogin={openLogin}/>} */}

      <div className="header-cover-mobile limit">
        <div className="header-right">
          <button onClick={() => setStatusMenu(true)}>
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