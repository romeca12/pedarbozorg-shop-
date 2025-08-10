
import Container from "@/components/Container";
import SwiperSlider from "@/components/Swiper";
import Background from "./components/Background";
import IconBox from "./components/IconBox";
import Baner from "./components/Baner";


export default function Home() {
  return (
    <Container>
      <Background/>
      <SwiperSlider/>
      <IconBox/>
      <Baner/>
      <div className="mb-16"></div>
    </Container >

  );
}
