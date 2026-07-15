import Container from "@/components/Container";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <About />
        <About />
        <About />
        <About />
      </Container>
    </>
  );
}
