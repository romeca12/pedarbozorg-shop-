
import Container from "@/components/Container";
import SwiperSlider from "@/components/Swiper";
import Background from "./components/Background";
import IconBox from "./components/IconBox";
import Baner from "./components/Baner";
import PopularProductSlider from "./components/PopularProductSlider";
import SpecialProduct from "./components/SpecialProduct";
import Gallery from "./components/Gallery";


export default function Home() {
  return (
    <Container>
      <Background />
      <SwiperSlider />
      <IconBox />
      <Baner />
      <PopularProductSlider />
      <SpecialProduct/>
      <Gallery/>
      <div className="mb-96"></div>
    </Container >

  );
}
