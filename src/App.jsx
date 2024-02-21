import Nav from "./components/Nav"
import Cover from "./components/Cover"
import Reassurance from "./components/Reassurance"
import OurProcess from "./components/OurProcess"
import Footer from "./components/Footer"
import CatalogForm from "./components/CatalogForm"
import Customers from "./components/Customers"
import './App.css'

function App() {

  return (
    <>
      <header>
        <Nav />
        <Cover />
      </header>
      <main>
        <Reassurance />
        <CatalogForm/>
        <OurProcess />
        <Customers/>
      </main>
    <Footer/>
    </>
  )
}

export default App
