import Navbar from "./components/navigstion"
import LandingPage from "./pagess/Landing-page"
import Services from "./components/services"
import Button from "./components/Button"
import Benefits from "./components/benefits"
import Ourmission from "./components/ourmission"
import Contact from "./components/contacts"
import Footer from "./components/footer"
function App() {

  return (
    <>
    <Navbar/>
     <LandingPage />
     <Services />
      <Button />
      <Benefits/>
      <Ourmission />
     <Contact />
     <Footer />
    </>
  )
}

export default App
