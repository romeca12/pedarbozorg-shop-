import SwiperSlider from "@/components/Swiper";
import Background from "./components/Background";
import IconBox from "./components/IconBox";
import Baner from "./components/Baner";
import PopularProductSlider from "./components/PopularProductSlider";
import SpecialProduct from "./components/SpecialProduct";
import Gallery from "./components/Gallery";
import WhyPedarbozorg from "./components/WhyPedarbozorg";
import ChooseCorrect from "./components/ChooseCorrect";
import OnlyABuy from "./components/OnlyABuy";
import PopularProductCart from "./components/PopularProductCart";
import Cooperation from "./components/cooperation";
import api from "@/utils/API/axios-cofig";


export default async function Home() {

  const { data } = await api.get('/core-api/site/landing/');

  console.log(data.slider);

  return (
    <>
      <Background />
      <SwiperSlider />
      <IconBox />
      <Baner />
      <PopularProductSlider />
      <SpecialProduct />
      <Gallery />
      <WhyPedarbozorg />
      <ChooseCorrect />
      <OnlyABuy />
      <PopularProductCart />
      <Cooperation />
    </>
  );
}