"use client"

import { Dispatch, SetStateAction, useState } from "react";
import "../app/globals.css";
import toast from "react-hot-toast";
import OTPInput from "./OTPInput";
import LoadingCricle from "./LoadingCricle";
import axios from "axios";

type IPropsLogin = {
    handleLogin: boolean,
    setHandleLogin: Dispatch<SetStateAction<boolean>>
}

export default function Login({ handleLogin, setHandleLogin }: IPropsLogin) {
    const [value, setValue] = useState<string>("");
    const [loginTwo, setLoginTwo] = useState<boolean>(false);
    const [isLoadingOne, setIsLoadingOne] = useState(false)
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '']);

    async function openLoginTwo(amount: string, e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) {
        e.preventDefault();
        const regexInvalid = /^[۰0][۹9][۰-۹0-9]{9}$/;
        if (amount === '') return toast.error('شماره موبایل نمیتواند خالی باشد');
        if (!(regexInvalid.test(amount))) return toast.error('شماره موبایل معتبر نیست');
        setIsLoadingOne(true)
        try {
            await axios.post(
                'http://5.144.132.115:8003/core-api/auth/send-sms/', {
                phone_number: amount
            })
            setLoginTwo(true);
        } catch {
            toast.error("خطا در ارسال شماره همراه")
        } finally {
            setIsLoadingOne(false)
        }
    }

    const handleSendOtp = async () => {

    }

    return (
        <>
            <div
                className={`${handleLogin && "cover-login"}`}
                onClick={() => {
                    setHandleLogin(false);
                }}
            >
            </div>
            <div className={`login ${handleLogin && "open-login"}`}>
                <div className="top-login-stop">
                    <div className="top_right">
                        {loginTwo && (
                            <button onClick={() => setLoginTwo(false)}>
                                <img src="/images/arrow-right.svg" alt="" />
                            </button>
                        )}
                        <span>ثبت نام | ورود</span>
                    </div>
                    <button>
                        <img
                            src="/images/remove.svg"
                            alt="برداشتن"
                            onClick={() => {
                                setHandleLogin(false);
                            }}
                        />
                    </button>
                </div>
                <div className="bottom_login">
                    <div className="icon_login">
                        <img className="img1" src="/images/bg.svg" alt="" />
                        <img className="img2" src="/images/Layer_1.svg" alt="" />
                    </div>
                    {!loginTwo ? (
                        <div className="bottom_login_variable">
                            <p>شماره همراه خود را وارد کنید</p>
                            <form className="relative w-full" onSubmit={(event) => openLoginTwo(value, event)}>
                                <input
                                    type="text"
                                    placeholder=" "
                                    value={value}
                                    onChange={(e) => /^[۰-۹0-9]*$/.test(e.target.value) && setValue(e.target.value)}
                                    className="text-text-gray text-base py-1 pr-2 rounded-[9px] input-spin h-10 otp-input" />
                                <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">شماره همراه</label>
                            </form>
                            <button className="success-btn w-full mt-6" type="submit" onClick={(event) => openLoginTwo(value, event)}>{isLoadingOne ? <LoadingCricle /> : "ورود"}</button>
                        </div>
                    ) : (
                        <div className="bottom_login_variable">
                            <p>
                                لطفا کد را که به شماره <span className="number">{value}</span>{" "}
                                را وارد کنید
                            </p>
                            <OTPInput otp={otp}
                                setOtp={setOtp}
                                handleResendOtp={handleSendOtp}
                            />
                            <button className="success-btn w-full mt-4">{true ? "ورود" : <LoadingCricle />}</button>
                        </div>
                    )}
                </div>
            </div>
        </>
    );
}