"use client"

import Image from "next/image"
import ProfileTopPages from "../components/ProfileTopPages"
import CardMessage from "../components/CardMessage"
import { useState } from "react";
import PopUpProfile from "../components/PopUpProfile";

function Messages() {

  const [deleteAll, setDeleteAll] = useState(false);

  return (
    <div className="p-4 lg:p-8 bg-white rounded-2xl border-custom">
      <div className="mb-4 flex justify-between items-center">
        <ProfileTopPages title="پیغام‌ها" />
        <button onClick={() => setDeleteAll(true)} className="text-[#C62020] text-sm flex gap-x-2 rounded-lg py-1.5 px-3 bg-[#F9E3E3] hover:bg-[#F8C8C8] duretion-300-ms">
          حذف همه
          <Image src="/icons/trash-two.svg" alt="حذف" width={20} height={20} />
        </button>
      </div>
      <hr className="h-0.5 bg-white-light" />

      <div className="space-y-4">
        {Array(4).fill(0).map((_, index) => (
          <CardMessage key={index} />
        ))}
      </div>

      <PopUpProfile
        setPopUp={setDeleteAll}
        popUp={deleteAll}
        title="حذف همه پیغام‌‌ها"
        desc="آیا از حذف همه پیغام‌ها اطمینان دارید؟"
        operation="حذف همه پیغام‌ها"
      />
    </div>
  )
}

export default Messages