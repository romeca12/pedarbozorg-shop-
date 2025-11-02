'use client';

import React, { useState, useRef, ChangeEvent, KeyboardEvent, ClipboardEvent } from 'react';

const OTPInput = () => {
    const [otp, setOtp] = useState<string[]>(['', '', '', '', '']);
    const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

    const handleChange = (index: number, value: string) => {
        if (/^\d*$/.test(value) && value.length <= 1) {
            const newOtp = [...otp];
            newOtp[index] = value;
            setOtp(newOtp);

            if (value && index < 4) {
                inputRefs.current[index + 1]?.focus();
            }
        }
    };

    const handleKeyDown = (index: number, e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Backspace' && !otp[index] && index > 0) {
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === 'ArrowLeft' && index > 0) {
            e.preventDefault();
            inputRefs.current[index - 1]?.focus();
        }

        if (e.key === 'ArrowRight' && index < 4) {
            e.preventDefault();
            inputRefs.current[index + 1]?.focus();
        }
    };

    const handlePaste = (e: ClipboardEvent<HTMLInputElement>) => {
        e.preventDefault();
        const pastedData = e.clipboardData.getData('text').slice(0, 5);
        if (/^\d+$/.test(pastedData)) {
            const newOtp = [...otp];
            pastedData.split('').forEach((char, i) => {
                if (i < 5) newOtp[i] = char;
            });
            setOtp(newOtp);

            const nextIndex = Math.min(pastedData.length, 5) - 1;
            inputRefs.current[Math.min(nextIndex, 4)]?.focus();
        }
    };

    const isInputFocused = (index: number) => {
        return document.activeElement === inputRefs.current[index];
    };

    return (
        <div className="flex justify-center" dir="rtl">
            <div className="flex flex-row-reverse">
                {otp.map((digit, index) => (
                    <div key={index} className="mx-1.5">
                        <input
                            ref={(el) => { inputRefs.current[index] = el }}
                            type="text"
                            inputMode="numeric"
                            pattern="[0-9]*"
                            maxLength={1}
                            value={digit}
                            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange(index, e.target.value)}
                            onKeyDown={(e: KeyboardEvent<HTMLInputElement>) => handleKeyDown(index, e)}
                            onPaste={handlePaste}
                            className={`
                w-12 h-10 text-lg font-medium text-center
                rounded-[8px]
                transition-all duration-200 ease-in-out
                focus:outline-none
                ${digit
                                    ? 'border-[1px] border-[#2162E0] bg-white shadow-[0_0_4px_0_#2162E0_inset,_0_0_4px_0_#2162E0]'
                                    : isInputFocused(index)
                                        ? 'border-[1px] border-[#2162E0] bg-white shadow-[0_0_4px_0_#2162E0_inset,_0_0_8px_0_#2162E0]'
                                        : 'border-[1px] border-gray-300 bg-white shadow-none'
                                }
              `}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OTPInput;