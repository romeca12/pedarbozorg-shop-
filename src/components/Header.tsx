"use client"

import { useContext, useEffect, useState } from "react";
import "../app/globals.css";
import Login from "./Login";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AppContext } from "@/context/AppContext";

function Header() {
  const { cart } = useContext(AppContext);
  const [handleMenu, setHandleMenu] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);
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
      <header className={`px-4 fixed top-0 right-0 h-16 lg:h-[117px] z-10 w-full ${isScrolled && "shadow bg-secondary"}`}>
        <div className="lg:hidden flex justify-between items-center h-full">
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
            <img src="/images/login.svg" alt="ورود" className="cursor-pointer" />
            <img src="/images/cart.svg" alt="سبد خرید" className="cursor-pointer" />
          </div>
        </div>



        <div className="hidden lg:flex items-center justify-between gap-4 h-20">

          <div className="flex gap-4 items-center">
            <img src="/images/Layer_1.svg" alt="لوگو" />
            <h1 className="text-primary">فروشگاه محصولات طبیعی پدربزرگ</h1>
          </div>

          <div className="max-w-[497px] flex-1 mt-[52px] gap-[15px] flex flex-col">
            <div className="search relative border-type-two rounded-lg h-10 bg-secondary">
              <input type="text" placeholder="جستجو.." className="h-full pr-[11px] pl-10 text-[#353535] placeholder:text-[#ADADAD]" />
              <img src="/images/search-normal.svg" alt="جست و جو.." className="absolute top-2 left-2" />
            </div>
            <div>
              <ul className="text-primary lg:flex gap-8 justify-center">
                <li className="lg:flex flex-col gap-1 items-center">
                  <Link href="/" className="header-link-menu" onClick={() => setHandleMenu(false)}>صفحه اصلی</Link>
                  <img className={`hidden lg:block transition-transform duration-300 ${pathname == "/" ? "true-img-down-menu" : "false-img-down-menu"}`} src="/images/Frame.svg" alt="عکس زیر منو" />
                </li>
                <li className="lg:flex flex-col gap-1 items-center">
                  <Link href="/products" className="header-link-menu" onClick={() => setHandleMenu(false)}>محصولات</Link>
                  <img className={`hidden lg:block transition-transform duration-300 ${pathname == "/products" ? "true-img-down-menu" : "false-img-down-menu"}`} src="/images/Frame.svg" alt="عکس زیر منو" />
                </li>
                <li className="lg:flex flex-col gap-1 items-center">
                  <Link href="/blog" className="header-link-menu" onClick={() => setHandleMenu(false)}>مجله</Link>
                  <img className={`hidden lg:block transition-transform duration-300 ${pathname == "/blog" ? "true-img-down-menu" : "false-img-down-menu"}`} src="/images/Frame.svg" alt="عکس زیر منو" />
                </li>
                <li className="lg:flex flex-col gap-1 items-center">
                  <Link href="/about-us" className="header-link-menu" onClick={() => setHandleMenu(false)}>درباره ما</Link>
                  <img className={`hidden lg:block transition-transform duration-300 ${pathname == "/about-us" ? "true-img-down-menu" : "false-img-down-menu"}`} src="/images/Frame.svg" alt="عکس زیر منو" />
                </li>
                <li className="lg:flex flex-col gap-1 items-center">
                  <Link href="/contact-us" className="header-link-menu" onClick={() => setHandleMenu(false)}>تماس باما</Link>
                  <img className={`hidden lg:block transition-transform duration-300 ${pathname == "/contact-us" ? "true-img-down-menu" : "false-img-down-menu"}`} src="/images/Frame.svg" alt="عکس زیر منو" />
                </li>
              </ul>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="bg-primary px-4 py-2 rounded-lg text-white flex gap-2 items-center" onClick={() => setOpenLogin(!openLogin)}>
              <img src="/images/Login 2.svg" alt="ورود" />
              ورود/ثبت نام
            </button>
            <img
              onClick={() => setOpenLogin(!openLogin)}
              className="w-10 h-10"
              src="/images/login.svg"
              alt="ورود"
            />
          </div>

        </div>
      </header>
      <Login openLogin={openLogin} setOpenLogin={setOpenLogin} />
    </>
  );
}

export default Header;