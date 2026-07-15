import Container from "@/components/Container";
import Header from "./pages/Header";
import Hero from "./pages/Hero";
import About from "./pages/About";
import Contact from "./pages/Contact";
import TechStack from "./pages/TechStack";

export default function Home() {
  return (
    <>
      <Container>
        <Header />
        <Hero />
        <About />
        <Contact />
        <TechStack />
      </Container>
    </>
  );
}
