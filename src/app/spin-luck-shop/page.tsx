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
    </>
  )
}

export default spinLuckShop