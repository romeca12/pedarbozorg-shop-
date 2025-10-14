"use client"

import { Dispatch, SetStateAction, useContext, useEffect, useState } from "react";
import "../app/globals.css";
import Login from "./Login";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppContext } from "@/context/AppContext";

function Header() {
  const { cart } = useContext(AppContext);
  const [handleMenu, setHandleMenu] = useState(false);
  const [handleLogin, setHandleLogin] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  // hideInput
  const hideInput = ["/products"].includes(pathname);

  // EnglishNumber to farsiNumber
  const toFarsiNumber = (number: number) => {
    if (cart.length === 0) return
    return number.toString().replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[+d]);
  }

  // function closeMenu() {
  //   setStatusMenu(false);
  // }

  useEffect(() => {
    window?.scrollTo(0, 0);

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
    <>
      <header className={`px-4 fixed top-0 right-0 h-16 lg:h-20 z-10 w-full
        ${isScrolled ? "shadow bg-secondary" : "bg-transparent"} ${isScrolled && !hideInput ? "lg:h-[117px]" : ""}`}>

        <div className="lg:hidden flex justify-between items-center h-full">
          <div className={`transition-colors duration-300 fixed
            ${handleMenu && "w-screen h-screen top-0 right-0 left-0 bottom-0 bg-[#0000006d]"}`}
            onClick={() => setHandleMenu(false)}></div>

          <div className={`fixed w-[255px] h-screen bg-menu-mobile top-0 -right-[255px] z-10
            ${handleMenu && "right-0"} transition-all duration-300`}>
            <div className="mb-8 px-[19px] h-16 border-b flex justify-between items-center">
              <img src="/images/Buttons.svg"
                alt="برگشت"
                className="cursor-pointer"
                onClick={() => setHandleMenu(false)}
              />
              <img src="/images/logo.svg" alt="لوگو سایت" />
            </div>
            <Menu
              hideInput={hideInput}
              isScrolled={isScrolled}
              pathname={pathname}
              setHandleMenu={setHandleMenu} />
          </div>

          <div className="flex gap-2">
            <img
              src="/images/menu.svg"
              onClick={() => setHandleMenu(true)}
              alt="منو" className="cursor-pointer" />
            <img src="/images/instagram.svg" alt="ُسرچ" className="cursor-pointer" />
            <img src="/images/know.svg" alt="گردونه شانس" className="cursor-pointer" />
          </div>
          <img src="/images/logo.svg" alt="لوگو" className="cursor-pointer" />
          <div className="flex gap-2">
            <img src="/images/login.svg" alt="ورود" className="cursor-pointer" onClick={() => setHandleLogin(true)} />
            <span className="relative -z-10">
              <img src="/images/cart.svg" alt="سبد خرید" className="cursor-pointer" />
              <span className="bg-[#C62020] absolute top-0.5 right-0.5 text-white text-[10px] px-1 rounded-sm">{toFarsiNumber(cart.length) || null}</span>
            </span>
          </div>
        </div>

        <div className="hidden lg:flex items-center justify-between gap-4 h-20">
          <Link href="/" className="flex gap-4 items-center">
            <img src="/images/Layer_1.svg" alt="لوگو" />
            <h1 className="text-primary">فروشگاه محصولات طبیعی پدربزرگ</h1>
          </Link>

          <div
            className={`flex-1 gap-[15px] lg:flex transition-all duration-200
          ${isScrolled && !hideInput ? "flex-col justify-center mt-[52px] items-center" : "flex-row-reverse mt-0.5"}`}>

            {!hideInput && <div
              className={`relative border-type-two rounded-lg h-10 w-10 max-w-[497px]
              ${isScrolled && "w-full"}`}>
              {isScrolled && <input type="text" placeholder="جستجو.." className="h-full w-full pr-[11px] pl-10 text-[#353535] placeholder:text-[#ADADAD]" />}
              <img src="/images/search-normal.svg" alt="جست و جو.." className="absolute top-2 left-2" onClick={() => setIsScrolled(true)} />
            </div>}

            <Menu
              hideInput={hideInput}
              isScrolled={isScrolled}
              pathname={pathname}
              setHandleMenu={setHandleMenu} />
          </div>

          <div className="flex gap-4">
            <button className="bg-primary px-4 py-2 rounded-lg text-white flex gap-2 items-center" onClick={() => setHandleLogin(!handleLogin)}>
              <img src="/images/Login 2.svg" alt="ورود" />
              ورود/ثبت نام
            </button>
            <span className="relative">
              <img className="w-10 h-10" src="/images/cart.svg" alt="ورود" />
              <span className="bg-[#C62020] absolute top-1 right-1 text-white text-xs px-1 rounded-sm">{toFarsiNumber(cart.length) || null}</span>
            </span>
          </div>

        </div>

      </header>
      <Login handleLogin={handleLogin} setHandleLogin={setHandleLogin} />
    </>
  );
}

type IPropsMenu = {
  isScrolled: boolean;
  hideInput: boolean;
  pathname: string;
  setHandleMenu: Dispatch<SetStateAction<boolean>>;
}

function Menu({ isScrolled, hideInput, pathname, setHandleMenu }: IPropsMenu) {
  return (
    <div className={`mx-auto ${!isScrolled && !hideInput ? "translate-y-2" : ""}`}>
      <ul className="text-primary flex flex-col items-center gap-3.5 lg:flex lg:flex-row lg:gap-6 xl:gap-8 lg:justify-center">
        <li className="lg:flex flex-col gap-1 items-center">
          <Link href="/" className="header-link-menu" onClick={() => setHandleMenu(false)}>صفحه اصلی</Link>
          <img className={`hidden lg:block transition-transform duration-300 ${pathname !== "/" ? "false-img-down-menu" : ""}`} src="/images/Frame.svg" alt="عکس زیر منو" />
        </li>
        <li className="lg:flex flex-col gap-1 items-center">
          <Link href="/products" className="header-link-menu" onClick={() => setHandleMenu(false)}>محصولات</Link>
          <img className={`hidden lg:block transition-transform duration-300 ${pathname !== "/products" ? "false-img-down-menu" : ""}`} src="/images/Frame.svg" alt="عکس زیر منو" />
        </li>
        <li className="lg:flex flex-col gap-1 items-center">
          <Link href="/blog" className="header-link-menu" onClick={() => setHandleMenu(false)}>مجله</Link>
          <img className={`hidden lg:block transition-transform duration-300 ${pathname !== "/blog" ? "false-img-down-menu" : ""}`} src="/images/Frame.svg" alt="عکس زیر منو" />
        </li>
        <li className="lg:flex flex-col gap-1 items-center">
          <Link href="/about-us" className="header-link-menu" onClick={() => setHandleMenu(false)}>درباره ما</Link>
          <img className={`hidden lg:block transition-transform duration-300 ${pathname !== "/about-us" ? "false-img-down-menu" : ""}`} src="/images/Frame.svg" alt="عکس زیر منو" />
        </li>
        <li className="lg:flex flex-col gap-1 items-center">
          <Link href="/contact-us" className="header-link-menu" onClick={() => setHandleMenu(false)}>تماس باما</Link>
          <img className={`hidden lg:block transition-transform duration-300 ${pathname !== "/contact-us" ? "false-img-down-menu" : ""}`} src="/images/Frame.svg" alt="عکس زیر منو" />
        </li>
      </ul>
    </div>
  )
}

export default Header;