import Container from "@/components/Container";
import { Metadata } from "next";


export const metadata : Metadata = {
  title: "مجله",
}


function blog() {
    return (
        <Container>
            <h1>مجله</h1>
        </Container>
    )
}

export default blog;