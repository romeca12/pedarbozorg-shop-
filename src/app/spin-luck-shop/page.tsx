import { Metadata } from "next"
import Background from "./components/BgSpinLuckShop"
import Spin from "./components/Spin"

export const metadata: Metadata = {
  title: "گردونه شانس"
}

function spinLuckShop() {
  return (
    <>
      <Background />
      <Spin />
      {/* <div className="mb-[1200px] bg-blue-400"></div>  */}
    </>
  )
}

export default spinLuckShop