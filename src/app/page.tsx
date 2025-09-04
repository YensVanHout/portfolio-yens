import About from "./components/about/about";
import Contact from "./components/contact/contact";
import Footer from "./components/footer/footer";
import Intro from "./components/intro/intro";
import Navigation from "./components/navigation/navigation";
import Portfolio from "./components/portfolio/portfolio";
import Timeline from "./components/timeline/timeline";

export default function Home() {
  return (
    <>
      <Navigation />
      <div className="bg-slate-50 dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen --font-karla">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <About />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}
