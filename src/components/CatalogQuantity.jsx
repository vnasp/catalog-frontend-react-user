import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6"

const QuantityOptions = ({ selectedQuantity, setSelectedQuantity, handleQuantityChange }) => {
  
  const incrementQuantity = () => {
    setSelectedQuantity((prevQuantity) => prevQuantity + 1)
  }

  const decrementQuantity = () => {
    setSelectedQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))
  }

  return (
    <div id="quantityOptions" className="py-3">
      <h4 className="font-bold uppercase pb-1">Quantity</h4>
      <div className="inline-flex items-center">
        <FaCircleMinus className="text-5xl lg:text-4xl mx-4 cursor-pointer" onClick={decrementQuantity} />
        <input
          type="number"
          className="rounded-lg border-green-500 py-3 text-center"
          value={selectedQuantity}
          onChange={handleQuantityChange}
          min="1"
        />
        <FaCirclePlus className="text-5xl lg:text-4xl mx-4 cursor-pointer" onClick={incrementQuantity} />
      </div>
    </div>
  );
};

export default QuantityOptions