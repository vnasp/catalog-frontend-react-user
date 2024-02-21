import { createContext, useState, useEffect } from "react"
export const DataContext = createContext()

const DataProvider = ({ children }) => {
  const [cart, setCart] = useState([])
  const [showCart, setShowCart] = useState(false);

  const handleShowCart = () => {
    setShowCart(true)
    console.log(showCart)
  }

  const handleCloseCart = () => {
    setShowCart(false)
    console.log(showCart)
  };
  
  const requiredQty = 10
  const actualQty = cart.reduce((total, item) => total + item.quantity, 0)
  const moreItems = requiredQty - actualQty

  return (
    <DataContext.Provider value={{ cart, setCart, showCart, setShowCart, handleShowCart, handleCloseCart, requiredQty, actualQty, moreItems }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider