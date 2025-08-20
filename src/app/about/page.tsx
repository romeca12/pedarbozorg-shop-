"use client"

import Container from "@/components/Container"
import { AppContext } from "@/context/AppContext"
// import { Metadata } from "next"
import { useContext } from "react"


// export const metadata : Metadata = {
//   title: "درباره ما",
// }

function aboutUs() {
  const { value } = useContext(AppContext);

  return (
    <Container>
      <h1>{value}</h1>
    </Container>
  )
}

export default aboutUs