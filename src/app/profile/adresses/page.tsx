"use client"

import Image from "next/image"
import ProfileTopPages from "../components/ProfileTopPages"
import CardAdresses from "../components/CardAdresses"
import PopUpProfile from "../components/PopUpProfile"
import { useState } from "react";
import AddAdress from "../comments/AddAdress"

function Adresses() {
  const [popUpDelateAdress, setPopUpDelateAdress] = useState(false);
  const [popUpAddAdress, setPopUpAddAdress] = useState(
    {
      status: false,
      title: "",
      operation: ""
    }
  );

  return (
    <>
      <div className="p-4 lg:p-8 bg-white rounded-2xl border-custom">
        <div className="flex justify-between items-center">
          <ProfileTopPages title="آدرس‌های من" />
          <button onClick={() => setPopUpAddAdress({ status: true, title: "افزودن آدرس جدید", operation: "افزودن" })} className="text-primary text-sm flex gap-x-2 rounded-lg py-1.5 px-3 bg-background hover:bg-green-light duretion-300-ms">
            افزودن آدرس
            <Image src="/icons/location-add.svg" alt="مکان" width={20} height={20} />
          </button>
        </div>

        <div className="mt-4 flex flex-col gap-y-4">
          {Array(3).fill(1).map((_, index) =>
            <CardAdresses
              key={index}
              setPopUpDelete={setPopUpDelateAdress}
              setPopUpAddAdress={setPopUpAddAdress}
            />
          )}
        </div>
      </div>
      <PopUpProfile
        setPopUp={setPopUpDelateAdress}
        popUp={popUpDelateAdress}
        title="حذف آدرس"
        desc="آیا از حذف این آدرس اطمینان دارید؟"
        operation="حذف آدرس"
      />
      <AddAdress
        setPopUp={setPopUpAddAdress}
        popUp={popUpAddAdress}
      />
    </>
  )
}

export default Adresses