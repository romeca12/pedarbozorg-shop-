import Background from "./components/Background";

export default function about() {
  return (
    <>
      <Background />
      <div className="font-extrabold flex items-center justify-center mb-4 lg:mb-8">
        <img src="./images/flower-slider-right.svg" alt="گل1" className="w-[46px] h-[32px] sm:w-[69px] sm:h-[65px]" />
        <h3 className="text-primary mx-4 text-base lg:text-2xl font-black">پرفروش ترین محصولات</h3>
        <img src="./images/flower-slider-left.svg" alt="گل2" className="w-[46px] h-[32px] sm:w-[69px] sm:h-[65px]" />
      </div>
      <div className="mb-[300px]"></div>
    </>
  )
}