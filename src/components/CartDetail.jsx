import { useContext } from "react"
import { DataContext } from "../context/DataContext"
import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6"

const CartDetail = () => {
  const { cart, setCart } = useContext(DataContext)

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
  const requiredQty = 10
  const actualQty = cart.reduce((total, item) => total + item.quantity, 0)
  const moreItems = requiredQty - actualQty

  return (
    <>
      {cartFilter.map((item) => (
        <div className="flex flex-row justify-between items-center pb-2" key={item.id}>
          <div className="text-center">
            <img src="./gear.webp" width={50} className="rounded-md" />
          </div>
          <div className="">
            <p className="text-sm">{item.type}</p>
            <p className="text-xs">{item.fit} - Size {item.size}</p>
          </div>
          <div className="fw-bolder text-center inline-flex items-center">
            <button className="secondary px-1 py-0 me-1" type="button" onClick={() => decrementQty(item.id)}><FaCircleMinus /></button>
            {item.quantity}
            <button className="text-red-500 px-1 py-0 ms-1" type="button" onClick={() => incrementQty(item.id)}><FaCirclePlus /></button>
          </div>
        </div>
      ))}
      <hr />
      {
         moreItems > 0 ?
      <div className="bg-red-200 rounded-md p-2 text-sm my-4">
      Please remember, the minimum total quantity is 10 assorted units. You need to add {moreItems} more items to request a quote.
      </div> :
      <div className="bg-green-200 rounded-md p-2 text-sm my-4">
      Great! You've met the minimum total quantity. Please fill in your name and email to send you the quote.
      </div>
      }
      <div className="div-custom pb-4">
        <div>
          <div className="">¿Where does it send?</div>
          nombre
          input email
        </div>
      </div>
      <button className="btn primary w-full" type="submit" href="./">Request a Quote</button>
      <div className="pt-4 text-secondary text-center">
      </div>

    </>
  )
}

export default CartDetail