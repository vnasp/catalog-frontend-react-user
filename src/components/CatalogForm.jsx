import { FaCirclePlus, FaCircleMinus } from "react-icons/fa6"
import { IoShirtOutline } from "react-icons/io5"
import { useContext, useState } from "react"
import { DataContext } from "../context/DataContext"
import Share from "./Share"
import { v4 as uuidv4 } from 'uuid'
import ImageSliderShorts from "./ImageSliderShorts"

const CatalogForm = () => {
  const { cart, setCart, setShowCart, showConfirmationPopup, handleCloseConfirmationPopup } = useContext(DataContext)
  const [selectedFit, setSelectedFit] = useState('')
  const [selectedType, setSelectedType] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [isSizeChartVisible, setIsSizeChartVisible] = useState(false)
  const [currentImage, setCurrentImage] = useState('./assets/img/product-short-sleeve.webp')

  const images = {
    'Tank Top': './assets/img/product-tank-top.webp',
    'Short Sleeve': './assets/img/product-short-sleeve.webp',
    'Long Sleeve': './assets/img/product-long-sleeve.webp',
    'Hoodie': './assets/img/product-hoodie.webp',
  }

  const handleTypeClick = (type) => {
    setSelectedType(type)
    setCurrentImage(images[type])
  }

  const handleFitClick = (newFit) => {
    setSelectedFit(newFit)
  }

  const handleSizeClick = (newSize) => {
    setSelectedSize(newSize)
  }

  const incrementQuantity = () => {
    setSelectedQuantity((prevQuantity) => prevQuantity + 1)
  }

  const decrementQuantity = () => {
    setSelectedQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1))
  }

  const handleQuantityChange = (event) => {
    const value = Math.max(1, parseInt(event.target.value, 10))
    setSelectedQuantity(value || 1)
  }

  const allSelectionsMade = selectedFit && selectedType && selectedSize && selectedQuantity > 0

  const addToCart = (productDetails) => {
    setCart((prevCart) => [...prevCart, productDetails])
    setSelectedFit(null)
    setSelectedType(null)
    setSelectedSize(null)
    setShowCart(true)
  }
  return (
    <>
      {
        showConfirmationPopup && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-40">
            <div className="bg-white p-12 rounded-lg text-center">
              <p>Your message has been sent successfully. <br />We will send you the quotation soon.</p>
              <button className="bg-green-500 text-white px-4 py-2 rounded-lg mt-8" onClick={handleCloseConfirmationPopup}>Close</button>
            </div>
          </div>
        )
      }
      <section id="RequestAQuote" className=" bg-gray-200 rounded-xl mt-32 lg:mx-16">
        <div className="flex flex-col justify-center items-start lg:grid lg:grid-cols-2 lg:p-6">
          <div className="mb-2 lg:m-0">
            <img src={currentImage} className="rounded-t-xl w-fit lg:pe-8" />
            <p className="text-center text-sm">Reference image. You can customize the entire design and colors.</p>
          </div>
          <div className="my-4 mx-1 lg:m-0">
            <h2 className="text-3xl text-center font-bold uppercase">Top Gear Customized</h2>
            <div id="fitOptions" className="py-3">
              <h4 className="font-bold uppercase pb-1">Select the fit</h4>
              <div className="flex flex-row gap-4">
                <button
                  className={`size ${selectedFit === 'Men/Unisex' ? 'selected' : ''}`}
                  onClick={() => handleFitClick('Men/Unisex')}
                > Men/Unisex </button>
                <button
                  className={`size ${selectedFit === 'Women' ? 'selected' : ''}`}
                  onClick={() => handleFitClick('Women')}
                > Women </button>
                <button
                  className={`size ${selectedFit === 'Child' ? 'selected' : ''}`}
                  onClick={() => handleFitClick('Child')}
                > Child </button>
              </div>
            </div>
            <div id="typeOptions" className="py-3">
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
            <div id="sizeOptions" className="py-3">
              <h4 className="font-bold uppercase pb-1">Select the size</h4>
              {selectedFit !== 'Child' && (
                <div id="adultChart" className="grid grid-cols-2 gap-4 lg:flex">
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
                  > L </button>
                  <button
                    className={`size ${selectedSize === 'XL' ? 'selected' : ''}`}
                    onClick={() => handleSizeClick('XL')}
                  > XL </button>
                  <button
                    className={`size ${selectedSize === '2XL' ? 'selected' : ''}`}
                    onClick={() => handleSizeClick('2XL')}
                  > 2XL </button>
                  <button
                    className={`size ${selectedSize === '3XL' ? 'selected' : ''}`}
                    onClick={() => handleSizeClick('3XL')}
                  > 3XL </button>
                </div>
              )}
              {selectedFit === 'Child' && (<div id="childChart" className="grid grid-cols-2 gap-4 lg:flex">
                <button
                  className={`size ${selectedSize === '4' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('4')}
                > 4 </button>
                <button
                  className={`size ${selectedSize === '6' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('6')}
                > 6 </button>
                <button
                  className={`size ${selectedSize === '8' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('8')}
                > 8 </button>
                <button
                  className={`size ${selectedSize === '10' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('10')}
                > 10 </button>
                <button
                  className={`size ${selectedSize === '12' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('12')}
                > 12 </button>
                <button
                  className={`size ${selectedSize === '14' ? 'selected' : ''}`}
                  onClick={() => handleSizeClick('14')}
                > 14 </button>
              </div>
              )}
            </div>
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
                      imageUrl: currentImage,
                      size: selectedSize,
                      quantity: selectedQuantity || 1
                    })
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
              <div className="text-justify">Our jerseys are made from Dryfit fabric, featuring high quality Sublimation for direct printing, ensuring the design remains intact. You can customize the jersey with any color or design. Adding numbers or letters is <span className="font-bold">free of charge</span>. We offer unisex sizing to accommodate both men and women, with an option for a female fit as well. We work with a minimum order of 10 assorted units, but <b>shipping fees and design services are included</b>.</div>
            </div>
            <div className="flex flex-row justify-between items-center">
              <div className="flex items-center justify-center cursor-pointer" onClick={() => setIsSizeChartVisible(true)}>
                <IoShirtOutline className="text-green-500 p-2 text-5xl font-bold" /> Check the Size Chart
              </div>

              {isSizeChartVisible && (
                <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
                  <div className="relative top-20 mx-auto p-2 border w-fit shadow-lg rounded-md bg-white">
                    <div className="flex flex-row justify-between items-center">
                      <h3 className="text-2xl font-medium text-gray-900">Size Chart</h3>
                      <button
                        id="ok-btn"
                        className="px-4 py-2"
                        onClick={() => setIsSizeChartVisible(false)}>
                        Close
                      </button>
                    </div>
                    <img src="./assets/img/sizechart.webp" width={600} />
                  </div>
                </div>
              )}
              <div className="w-1/2">

              </div>
            </div>
          </div>
        </div>
        <div className="bg-red-500 text-white text-center text-lg p-4">
          <p> Not sure of all details yet? E-mail us to info@deltasportus.com</p>
        </div>
      </section>
      <section className="mt-8 bg-gray-200 rounded-xl lg:p-6 lg:mx-16 lg:mb-8">
        <h2>Are you looking for ... ?</h2>
        <p className="py-2">We also have Men/Unisex, Women and Child Shorts, with or without pockets. Ask about this too with your request a quote.</p>
        <div className="flex flew-row justify-center items-center text-center">
        <ImageSliderShorts />
        </div>
      </section>
    </>
  )
}

export default CatalogForm