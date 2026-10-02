import SiteHeader from "../components/SiteHeader";
import Hero from "../components/Hero";
import Work from "../components/Work";
import Skills from "../components/Skills";
import Journal from "../components/Journal";
import Contact from "../components/Contact";
import SiteFooter from "../components/SiteFooter";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content">
        <Hero />
        <Work />
        <Skills />
        <Journal />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
