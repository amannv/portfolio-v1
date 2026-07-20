import Container from "@/components/Container";
import TechStack from "./pages/TechStack";
import Projects from "./pages/Projects";
import GithubActivity from "./pages/GithubActivity";
import NewHero from "./pages/NewHero";
import Blogs from "./pages/Blogs";

export default function Home() {
  return (
    <>
      <Container>
        <NewHero />
        <GithubActivity />
        <Projects />
        <TechStack />
        <Blogs />
      </Container>
    </>
  );
}
