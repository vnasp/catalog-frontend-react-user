import Nav from "./components/Nav"
import Cover from "./components/Cover"
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
        <CatalogForm/>
        <OurProcess />
        <Customers/>
      </main>
    <Footer/>
    </>
  )
}

export default App
