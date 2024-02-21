import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6"
import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"
import ShareOnWhatsApp from "./Whatsapp"
import { v4 as uuidv4 } from 'uuid';

const CatalogForm = () => {
  const { cart, setCart, setShowCart } = useContext(DataContext)
  const [selectedFit, setSelectedFit] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedQuantity, setSelectedQuantity] = useState(1);

  const handleTypeClick = (newType) => {
    setSelectedType(newType);
  };
  const handleFitClick = (newFit) => {
    setSelectedFit(newFit);
  };

  const handleSizeClick = (newSize) => {
    setSelectedSize(newSize);
  };

  const incrementQuantity = () => {
    setSelectedQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setSelectedQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const handleQuantityChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value, 10));
    setSelectedQuantity(value || 1);
  };

  const allSelectionsMade = selectedFit && selectedType && selectedSize && selectedQuantity > 0

  const addToCart = (productDetails) => {
    setCart((prevCart) => [...prevCart, productDetails])
    setShowCart(true)
    console.log(cart)
  }

  return (
    <>
      <div id="RequestAQuote" className="flex flex-col justify-center items-center mx-1 lg:grid lg:grid-cols-2 bg-gray-300 rounded-xl lg:p-6 lg:m-16">
        <div className="mb-2 lg:m-0">
          <img src="./gear.webp" width={600} className="rounded-t-xl" />
        </div>
        <div className="my-4 mx-1 lg:m-0">
          <h2 className="text-3xl text-center font-bold uppercase">Top Gear Customized</h2>
          <div id="fitOptions" className="py-4">
            <h4 className="font-bold uppercase pb-1">Select the fit</h4>
            <div className="flex flex-row gap-4">
              <button
                className={`size ${selectedFit === 'Unisex' ? 'selected' : ''}`}
                onClick={() => handleFitClick('Unisex')}
              > Unisex </button>
              <button
                className={`size ${selectedFit === 'Women' ? 'selected' : ''}`}
                onClick={() => handleFitClick('Women')}
              > Women </button>
              <button
                className={`size ${selectedFit === 'Men' ? 'selected' : ''}`}
                onClick={() => handleFitClick('Men')}
              > Men </button>
            </div>
          </div>
          <div id="typeOptions" className="py-4">
            <h4 className="font-bold uppercase pb-1">Select the type</h4>
            <div className="grid grid-cols-2 gap-4 lg:flex lg:flex-row">
              <button
                className={`size ${selectedType === 'Tank Top' ? 'selected' : ''}`}
                onClick={() => handleTypeClick('Tank Top')}
              > Tank Top (No Sleeve) </button>
              <button
                className={`size ${selectedType === 'Short Sleeve' ? 'selected' : ''}`}
                onClick={() => handleTypeClick('Short Sleeve')}
              > Short Sleeve </button>
              <button
                className={`size ${selectedType === 'Long Sleeve' ? 'selected' : ''}`}
                onClick={() => handleTypeClick('Long Sleeve')}
              > Long Sleeve </button>
              <button
                className={`size ${selectedType === 'Hoodie' ? 'selected' : ''}`}
                onClick={() => handleTypeClick('Hoodie')}
              > Hoodie / Daywalker </button>
            </div>
          </div>
          <div id="sizeOptions" className="py-4">
            <h4 className="font-bold uppercase pb-1">Select the size</h4>
            <div className="grid grid-cols-2 gap-4 lg:flex">
              <button
                className={`size ${selectedSize === 'XS' ? 'selected' : ''}`}
                onClick={() => handleSizeClick('XS')}
              > XS </button>
              <button
                className={`size ${selectedSize === 'S' ? 'selected' : ''}`}
                onClick={() => handleSizeClick('S')}
              > S </button>
              <button
                className={`size ${selectedSize === 'M' ? 'selected' : ''}`}
                onClick={() => handleSizeClick('M')}
              > M </button>
              <button
                className={`size ${selectedSize === 'L' ? 'selected' : ''}`}
                onClick={() => handleSizeClick('L')}
              > L </button>         <button
                className={`size ${selectedSize === 'XL' ? 'selected' : ''}`}
                onClick={() => handleSizeClick('XL')}
              > XL </button>
            </div>
          </div>
          <div id="quantityOptions" className="py-4">
            <h4 className="font-bold uppercase pb-1">Quantity</h4>
            <div className="inline-flex items-center">
              <FaCircleMinus className="text-5xl lg:text-4xl mx-4 cursor-pointer" onClick={decrementQuantity} />
              <input
                type="number"
                className="rounded-lg border-red-500 py-3 text-center"
                value={selectedQuantity}
                onChange={handleQuantityChange}
                min="1"
              />
              <FaCirclePlus className="text-5xl lg:text-4xl  text-red-500 mx-4 cursor-pointer" onClick={incrementQuantity} />
            </div>
          </div>
          <div>
            <button
              className={`btn primary w-full ${!allSelectionsMade ? 'opacity-50 cursor-not-allowed' : ''}`}
              type="button"
              onClick={() => {
                if (allSelectionsMade) {
                  addToCart({
                    id: uuidv4(),
                    fit: selectedFit,
                    type: selectedType,
                    size: selectedSize,
                    quantity: selectedQuantity || 1
                  });
                }
              }}
              disabled={!allSelectionsMade}
            >
              Add To Quote
            </button>
            {!allSelectionsMade && (
              <p className="text-red-500 text-center mt-2">
                You must select an option for each category to proceed.
              </p>
            )}
          </div>
          <div className="flex flex-col m-4">
            <div className="text-justify">Our jerseys are made from Dryfit fabric, featuring high quality Sublimation for direct printing, ensuring the design remains intact. You can customize the jersey with any color or design. Adding numbers or letters is <span className="font-bold">free of charge</span>. We offer unisex sizing to accommodate both men and women, with an option for a female fit as well. We work with a minimum order of 10 assorted units, but you get free shipping and design services.</div>
          </div>
          <div className="">
            <ShareOnWhatsApp
              message="Check out this team gears"
              url={window.location.href}
            /> </div>
        </div>
      </div>
    </>
  )
}

export default CatalogForm