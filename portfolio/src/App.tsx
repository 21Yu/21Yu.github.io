import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Overview />
        <Projects />
        <Skills />
      </main>
      <Footer />
    </>
  )
}
