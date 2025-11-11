import Image from "next/image"
import ProfileTopPages from "../components/ProfileTopPages"

function adresses() {
  return (
    <div className="p-4 lg:p-8 bg-white rounded-2xl border-custom">

      <div className="flex justify-between items-center">
        <ProfileTopPages title="آدرس‌های من" />
        <button className="text-primary text-sm flex gap-x-2 rounded-lg py-1.5 px-3 bg-background hover:bg-green-light duretion-300-ms">
          افزودن آدرس
          <Image src="/icons/location-add.svg" alt="مکان" width={20} height={20} />
        </button>
      </div>

      <div></div>
    </div>
  )
}

export default adresses