"use client"
import { Dispatch, SetStateAction, useState } from "react";
import "../app/globals.css";

type IPropsLogin = {
    openLogin: boolean,
    setOpenLogin: Dispatch<SetStateAction<boolean>>
}

export default function Login({ openLogin, setOpenLogin }: IPropsLogin) {

    const [value, setValue] = useState<string>("");
    const [loginTwo, setLoginTwo] = useState<boolean>(false);

    const inputValue = (amount: string) => {
        const regexValue = /^[۰-۹0-9]*$/
        // console.log(zero[0]);
        if (regexValue.test(amount) && amount.length <= 11) {

            setValue(amount);
            // console.log(typeof newValue);
            // const zero = newValue.splice("");
            // console.log(newValue.splice(","));
            // if (newValue.length === 11) {
            //   setLoginTwo(true);
            // }
        }
    };

    function openLoginTwo(amount: string) {
        console.log(value);
        if (amount.length === 11) {
            setLoginTwo(true);
        }
    }

    return (
        <>
            <div
                className={`const-cover-login ${openLogin ? "cover-login" : ""}`}
                onClick={() => {
                    setOpenLogin(false);
                    // setLoginTwo(false);
                }}
            ></div>
            <div className={`login ${openLogin ? "open-login" : ""}`}>
                <div className="top-login-stop">
                    <div className="top_right">
                        {loginTwo && (
                            <button onClick={() => setLoginTwo(false)}>
                                <img src="./images/arrow-right.svg" alt="" />
                            </button>
                        )}
                        <span>ثبت نام | ورود</span>
                    </div>
                    <button>
                        <img
                            src="./images/remove.svg"
                            alt="برداشتن"
                            onClick={() => {
                                setOpenLogin(false);
                                // setLoginTwo(false);
                            }}
                        />
                    </button>
                </div>
                <div className="bottom_login">
                    <div className="icon_login">
                        <img className="img1" src="./images/bg.svg" alt="" />
                        <img className="img2" src="./images/Layer_1.svg" alt="" />
                    </div>
                    {!loginTwo ? (
                        <div className="bottom_login_variable">
                            <p>شماره همراه خود را وارد کنید</p>
                            <input
                                type="text"
                                placeholder="شماره همراه"
                                onChange={(e) => inputValue(e.target.value)}
                                value={value}
                            />
                            <button className="btn-login" onClick={() => openLoginTwo(value)}>
                                ورود
                            </button>
                        </div>
                    ) : (
                        <div className="bottom_login_variable">
                            <p>
                                لطفا کد را که به شماره <span className="number">{value}</span>{" "}
                                را وارد کنید
                            </p>
                            <input
                                className="two-input"
                                type="text"
                                placeholder="لطفا کد را وارد کنید"
                                value=""
                            />
                            <button className="btn-login two-btn">ورود</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}