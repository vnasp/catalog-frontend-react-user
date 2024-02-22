import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6"
import ContactForm from "./ContactForm"

const CartDetail = () => {
  const { cart, setCart, moreItems } = useContext(DataContext)

  const cartFilter = cart.filter((item) => item.quantity > 0)

  const incrementQty = (productId) => {
    const cartIndex = cart.findIndex(item => item.id === productId);
    const updateCart = [...cart]
    updateCart[cartIndex] = { ...updateCart[cartIndex], quantity: updateCart[cartIndex].quantity + 1 }
    setCart(updateCart)
  }

  const decrementQty = (productId) => {
    const cartIndex = cart.findIndex(item => item.id === productId);
    const updateCart = [...cart]
    updateCart[cartIndex] = { ...updateCart[cartIndex], quantity: updateCart[cartIndex].quantity - 1 }
    setCart(updateCart)
  }

  return (
    <>
      {cartFilter.map((item) => (
        <div className="flex flex-row justify-between items-center pb-2" key={item.id}>
          <div className="text-center">
            <img src={item.imageUrl} width={50} className="rounded-md" />
          </div>
          <div className="">
            <p className="text-sm">{item.type}</p>
            <p className="text-xs">{item.fit} - Size {item.size}</p>
          </div>
          <div className="fw-bolder text-center inline-flex items-center">
            <button className="px-1 py-0 me-1" type="button" onClick={() => decrementQty(item.id)}><FaCircleMinus /></button>
            {item.quantity}
            <button className="px-1 py-0 ms-1" type="button" onClick={() => incrementQty(item.id)}><FaCirclePlus /></button>
          </div>
        </div>
      ))}
      <hr />
      {
        moreItems > 0 ?
          <div className="bg-red-100 rounded-md p-2 text-sm my-4">
            Please remember, the minimum total quantity is 10 assorted units. You need to add {moreItems} more items to request a quote.
          </div> :
          <div className="bg-green-100 rounded-md p-2 text-sm my-4">
            Great! You've met the minimum total quantity. Please fill in your name and email to send you the quote.
          </div>
      }
      <ContactForm/>
    </>
  )
}

export default CartDetail