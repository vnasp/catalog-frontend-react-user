import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { FaChevronDown } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import CartDetail from "./CartDetail"
import CartEmpty from "./CartEmpty"

const Nav = () => {
  const { cart, showCart, handleCloseCart, handleShowCart } = useContext(DataContext)
  const isCart = (cart.filter((item) => item.quantity > 0)).length > 0


  return (
    <>
      <nav className="flex flex-col gap-4 items-center bg-black text-white pt-4 pb-2 lg:flex-row lg:justify-between lg:p-6">
        <img src="/logo_white.png" className="logo" alt="Delta Sport US | Custom Team Apparel" />
        <div className="hidden lg:flex justify-between items-center">
          <a className="uppercase me-8 inline-flex" href="#OurProcess">
            Our Process <FaChevronDown className="hidden lg:block lg:ms-2" />
          </a>
          <a className="uppercase me-8 inline-flex" href="#RequestAQuote">
            Request a Quote <FaChevronDown className="hidden lg:block lg:ms-2" />
          </a>
        </div>
        <div className="flex flex-row justify-between gap-10 mt-4 lg:mt-0">
          <div className="inline-flex items-center"><BsInstagram className="icon" />Follow Us</div>
          <button type="button" onClick={handleShowCart} className="inline-flex items-center">
            <FaCartShopping className="icon" />Cart
          </button>
        </div>
      </nav>

      <div className={`offcanvas-custom ${showCart ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex flex-row justify-between items-center"><h3>Your Cart</h3>   <button
          className="p-4 text-gray-500"
          onClick={handleCloseCart}
        >
          X
        </button></div>
        <div className="p-4">
          {isCart ? <CartDetail /> : <CartEmpty />}
        </div>
      </div>

    </>
  )
}

export default Nav