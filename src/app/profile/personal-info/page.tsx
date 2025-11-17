import ProfileTopPages from "../components/ProfileTopPages"

function PersonalInfo() {
  return (
    <div className="space-y-6 p-4 lg:p-8 bg-white rounded-2xl border-custom">
      <ProfileTopPages title="مشخصات حساب کاربری" />
      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 justify-center gap-y-6 gap-x-4">
        <div className="relative w-full">
          <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" required />
          <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">کدپستی*</label>
        </div>
        <div className="relative w-full">
          <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" required />
          <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">کدپستی*</label>
        </div>
        <div className="relative w-full">
          <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" required />
          <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">کدپستی*</label>
        </div>
        <div className="relative w-full">
          <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" required />
          <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">کدپستی*</label>
        </div>
        <div className="relative w-full">
          <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" required />
          <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">کدپستی*</label>
        </div>
        <div className="relative w-full">
          <input type="text" placeholder=" " className="w-full text-input text-base py-1 pr-2 rounded-[9px] input-spin h-10 md:flex-1" required />
          <label className="absolute right-1 top-2 text-text-gray spin-phone bg-white px-1.5 rounded-lg transition-all duration-300 pointer-events-none">کدپستی*</label>
        </div>
      </div>
      <button>ذخیره تغییرات</button>
    </div>
  )
}

export default PersonalInfo