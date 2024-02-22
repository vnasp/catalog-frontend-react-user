import { FaRegClipboard, FaShoppingCart, FaTruck, FaBoxOpen, FaArrowRight, FaArrowDown } from 'react-icons/fa'

const OurProcess = () => {

  return (
    <div id="OurProcess" className="flex flex-col p-12 lg:py-0 justify-center items-center">
      <h2 className="text-6xl">Our Process</h2>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-6">
        <div className="flip-container w-48 h-48">
          <div className="flipper">
            <div className="front process">
              <FaRegClipboard className="text-4xl mb-2 text-green-500" />
              Request a Quote
            </div>
            <div className="back flex items-center justify-center text-center text-white rounded-full py-6 px-4 shadow-md shadow-gray-300 bg-green-500 border-2 border-green-600">
              Add 10 or more assorted units to the cart. You can mix different clothing.
            </div>
          </div>
        </div>
        <div><FaArrowRight className="hidden  lg:block text-6xl text-gray-600 mx-6" />
          <FaArrowDown className="lg:hidden text-6xl text-gray-600 my-6" />
        </div>
        <div className="flip-container w-48 h-48">
          <div className="flipper">
            <div className="front process">
              <FaShoppingCart className="text-4xl mb-2 text-green-500 hover:text-red-500" />
              Customize & Order
            </div>
            <div className="back flex items-center justify-center text-center text-white rounded-full py-6 px-4 shadow-md shadow-gray-300 bg-green-500 border-2 border-green-600">
              Accept the quote and send us the design. Letters and numbers are free!
            </div>
          </div>
        </div>
        <div><FaArrowRight className="hidden lg:block text-6xl text-gray-600 mx-6" />
          <FaArrowDown className="lg:hidden text-6xl text-gray-600 my-6" />
        </div>
        <div className="flip-container w-48 h-48">
          <div className="flipper">
            <div className="front process">
              <FaTruck className="text-4xl mb-2 text-green-500 hover:text-red-500" />
              We Ship Your Order
            </div>
            <div className="back flex items-center justify-center text-center text-white rounded-full py-6 px-4 shadow-md shadow-gray-300 bg-green-500 border-2 border-green-600">
              We print in the US and ship quickly. Our delivery times are the best.
            </div>
          </div>
        </div>
        <div>
          <FaArrowRight className="hidden lg:block text-6xl text-gray-600 mx-6" />
          <FaArrowDown className="lg:hidden text-6xl text-gray-600 my-6" />
        </div>
        <div className="flip-container w-48 h-48">
          <div className="flipper">
            <div className="front process">
              <FaBoxOpen className="text-4xl mb-2 text-green-500 hover:text-red-500" />
              Enjoy Your Custom Gear
            </div>
            <div className="back flex items-center justify-center text-center text-white rounded-full py-6 px-4 shadow-md shadow-gray-300 bg-green-500 border-2 border-green-600">
              Unite your team with a single sports clothing design. A real team!
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default OurProcess