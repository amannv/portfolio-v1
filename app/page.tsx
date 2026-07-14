import Container from "@/components/Container";
import Navbar from "./pages/Navbar";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";

export default function Home() {
  return (
    <>
    <Container>
      <Navbar />
      <Header />
      <Hero />
      <About />
    </Container>
    </>
  );
}
