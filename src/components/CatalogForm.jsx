import { useContext, useState } from "react"
import Share from "./Share"
import { v4 as uuidv4 } from 'uuid'

import { DataContext } from "../context/DataContext"
import FitOptions from "./CatalogFit"
import TypeOptions from "./CatalogType"
import SizeOptions from "./CatalogSize"
import QuantityOptions from "./CatalogQuantity"
import ImageSliderShorts from "./ImageSliderShorts"
import ImageSliderCatalog from "./ImageSliderCatalog"

import { IoShirtOutline } from "react-icons/io5"

const CatalogForm = () => {
  const { setCart, setShowCart, showConfirmationPopup, handleCloseConfirmationPopup } = useContext(DataContext)
  const [selectedFit, setSelectedFit] = useState('')
  const [selectedSize, setSelectedSize] = useState('')
  const [selectedQuantity, setSelectedQuantity] = useState(1)
  const [isSizeChartVisible, setIsSizeChartVisible] = useState(false)
  const [images, setImages] = useState({
    'Tank Top': [
      './assets/img/tank-tops/tank-top1.webp',
      './assets/img/tank-tops/tank-top2.webp',
      './assets/img/tank-tops/tank-top3.webp',
      './assets/img/tank-tops/tank-top4.webp',
      './assets/img/tank-tops/tank-top5.webp',
      './assets/img/tank-tops/tank-top6.webp',
      './assets/img/tank-tops/tank-top7.webp',
      './assets/img/tank-tops/tank-top8.webp',
      './assets/img/tank-tops/tank-top9.webp',
      './assets/img/tank-tops/tank-top10.webp',
      './assets/img/tank-tops/tank-top11.webp'
    ],
    'Short Sleeve': [
      './assets/img/short-sleeves/short-sleeve1.webp',
      './assets/img/short-sleeves/short-sleeve2.webp',
      './assets/img/short-sleeves/short-sleeve3.webp',
      './assets/img/short-sleeves/short-sleeve4.webp',
      './assets/img/short-sleeves/short-sleeve5.webp',
      './assets/img/short-sleeves/short-sleeve6.webp',
      './assets/img/short-sleeves/short-sleeve7.webp',
      './assets/img/short-sleeves/short-sleeve8.webp',
      './assets/img/short-sleeves/short-sleeve9.webp',
      './assets/img/short-sleeves/short-sleeve10.webp',
      './assets/img/short-sleeves/short-sleeve11.webp',
      './assets/img/short-sleeves/short-sleeve12.webp',
      './assets/img/short-sleeves/short-sleeve13.webp',
      './assets/img/short-sleeves/short-sleeve14.webp',
      './assets/img/short-sleeves/short-sleeve15.webp',
      './assets/img/short-sleeves/short-sleeve16.webp',
      './assets/img/short-sleeves/short-sleeve17.webp',
      './assets/img/short-sleeves/short-sleeve18.webp',
      './assets/img/short-sleeves/short-sleeve19.webp',
      './assets/img/short-sleeves/short-sleeve20.webp'
    ],
    'Long Sleeve': [
      './assets/img/long-sleeves/long-sleeve1.webp',
      './assets/img/long-sleeves/long-sleeve2.webp',
      './assets/img/long-sleeves/long-sleeve3.webp',
      './assets/img/long-sleeves/long-sleeve4.webp',
      './assets/img/long-sleeves/long-sleeve5.webp',
      './assets/img/long-sleeves/long-sleeve6.webp',
      './assets/img/long-sleeves/long-sleeve7.webp',
      './assets/img/long-sleeves/long-sleeve8.webp'
      ],
    'Hoodie': [
      './assets/img/hoodies/hoodie1.webp',
      './assets/img/hoodies/hoodie2.webp',
      './assets/img/hoodies/hoodie3.webp',
      './assets/img/hoodies/hoodie4.webp'
    ],
  })
  const [selectedType, setSelectedType] = useState(Object.keys(images)[0]); 

  const handleTypeClick = (type) => {
    setSelectedType(type)
  }

  const handleFitClick = (newFit) => {
    setSelectedFit(newFit)
  }

  const handleSizeClick = (newSize) => {
    setSelectedSize(newSize)
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
        <div className="flex flex-col justify-center items-start gap-6 lg:grid lg:grid-cols-2 lg:px-4 lg:py-6">
          <div className="mb-2 lg:m-0">
          <ImageSliderCatalog images={images[selectedType]} />
          </div>
          <div className="my-4 mx-1 lg:m-0">
            <h2 className="text-3xl text-center font-bold uppercase">Top Gear Customized</h2>
            <FitOptions selectedFit={selectedFit} handleFitClick={handleFitClick} />
            <TypeOptions selectedType={selectedType} handleTypeClick={handleTypeClick} />
            <SizeOptions selectedSize={selectedSize} selectedFit={selectedFit} handleSizeClick={handleSizeClick} />
            <QuantityOptions selectedQuantity={selectedQuantity} setSelectedQuantity={setSelectedQuantity} handleQuantityChange={handleQuantityChange} />
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
                <Share />
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
        <p className="py-2">We also offer Men/Unisex, Women, and Child Shorts, available with or without pockets. Please inquire about these options when requesting a quote.</p>
        <ImageSliderShorts />
      </section>

    </>
  )
}

export default CatalogForm