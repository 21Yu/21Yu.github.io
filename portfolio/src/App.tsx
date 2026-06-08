import About from "./components/About";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import Projects from "./components/Projects";

export default function App() {
  return (
    <>
      <Navbar/>
      <Overview/>
      <About/>
      <Projects/>
      <Footer/>
    </>
  )
}