export default function ChooseCorrect() {
  return (
    <div className="mt-16 md:hidden flex flex-col items-center gap-8">
      <div className="relative w-[202px] h-[179px]">
        <img src="./images/Vector.svg" alt="" className="w-full h-full top-0 right-0 absolute -z-10"/>
        <img src="./images/Frame 1472.svg" alt="" className="absolute left-2.5 -top-2"/>
        <h3 className="text-primary text-xl font-black mx-[43px] mt-[41px]">انتخاب درست</h3>
        <p className="text-primary text-xs text-center mr-7 ml-[51px] mt-[32px]">چگونه روغن زیتون اصل راتشخیص دهیم؟</p>
        <img src="./images/vector-correct.svg" alt="" className="absolute right-0 -bottom-3 -rotate-[11deg]"/>
      </div>
      <div>
        <img src="./images/_video-16_9.svg" alt="" />
      </div>
    </div>
  )
}