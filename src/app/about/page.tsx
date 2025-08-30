
import AboutContent from "./components/AboutContent";
import Background from "./components/Background";

export default function about() {
  return (
    <>
      <Background />
      <div className="font-extrabold flex items-center justify-center mt-[8px] mb-14 md:mt-[73px]">
        <img src="./images/flower-slider-right.svg" alt="گل1" className="hidden md:block w-[81px] h-[76px]" />
        <h1 className="text-primary md:mx-4 text-base md:text-2xl font-black">درباره ما</h1>
        <img src="./images/flower-slider-left.svg" alt="گل2" className="hidden md:block w-[81px] h-[76px]" />
      </div>
      <AboutContent />
    </>
  )
}