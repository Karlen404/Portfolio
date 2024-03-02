import Navbar from "./components/molecules/Navbar"
import Home from "./pages/Home"
import About from "./pages/About"
import Services from "./pages/Sevices"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Footer from "./components/molecules/Footer"
import ScrollTop from "./components/atoms/ScrollTop"
import ScrollIndicator from "./components/atoms/ScrollIndicator"

function App() {

  return (
    <>
      <div className="flex flex-col mx-auto h-full bg-bgLight text-paragraph dark:bg-bgDark dark:text-bgLight">
        <Navbar />
        <div className="flex-1 mx-6 md:mx-12 lg:mx-44 ">
          <ScrollIndicator />
          <ScrollTop />
          <Home />
          <About />
          <Services />
          <Projects />
          <Contact />
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
