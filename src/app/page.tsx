import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";
import Navigation from "./components/navigation/navigation";
import Portfolio from "./components/portfolio/portfolio";
import Skills from "./components/skills/skills";
import Timeline from "./components/timeline/timeline";
import Hr from "./components/ui/hr";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="bg-slate-50 dark:bg-custom-dark text-custom-dark dark:text-custom-main min-h-screen --font-karla">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Hr />
          <Portfolio />
          <Hr />
          <About />
          <Hr />
          <Skills />
          <Hr />
          <Timeline />
          <Hr />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
