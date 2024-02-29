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
              Add 10 or more assorted units to the cart. You can mix and match types of clothing for your order.
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
              Accept the quote and share us your design ideas. You can add/modify the items after confirming the design.
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
              We Ship Your Order Free
            </div>
            <div className="back flex items-center justify-center text-center text-white rounded-full py-6 px-4 shadow-md shadow-gray-300 bg-green-500 border-2 border-green-600">
              Once the order is placed, our team works fast to get it in time for your first pull.
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
              Run, layout and huck it! Share your photos and tag us!
            </div>
          </div>
        </div>
      </div>
    </div >
  )
}

export default OurProcess