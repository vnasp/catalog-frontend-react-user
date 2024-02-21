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

  return (
    <DataContext.Provider value={{ cart, setCart, showCart, setShowCart, handleShowCart, handleCloseCart }}>
      {children}
    </DataContext.Provider>
  )
}
export default DataProvider