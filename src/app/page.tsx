
import Container from "@/components/Container";
import SwiperSlider from "@/components/Swiper";


export default function Home() {
  return (
    <Container>
      <div className="max-lg:hidden">
        <img className="absolute top-[100px] right-0" src="./images/OBJECTS1.svg" width="145" height="185" />
        <img className="absolute top-[100px] left-0" src="./images/OBJECTS2.svg" width="150" height="190" />
        <img className="absolute top-[280px] right-0 w-[80px]" src="./images/Vector1.svg" alt="پس زمینه سایت وکتور 2" />
        <img className="absolute top-[280px] left-0 w-[80px]" src="./images/Vector2.svg" alt="پس زمینه سایت وکتور 1" />
      </div>
      <SwiperSlider />
    </Container >

  );
}
