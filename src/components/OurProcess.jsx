import { FaRegClipboard, FaShoppingCart, FaTruck, FaBoxOpen, FaArrowRight, FaArrowDown } from 'react-icons/fa'

const OurProcess = () => {
  return (
    <div id="OurProcess" className="flex flex-col p-16 lg:py-0 justify-center items-center ">
      <h2 className="text-6xl">Our Process</h2>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-6">
        <div className="process bg-gray-100">
          <FaRegClipboard className="text-4xl mb-2 text-green-500 hover:text-red-500" />
          Request a Quote
        </div>
        <div><FaArrowRight className="hidden  lg:block text-6xl text-gray-600 mx-6" />
          <FaArrowDown className="lg:hidden text-6xl text-gray-600 my-6" />
        </div>
        <div className="process bg-gray-100">
          <FaShoppingCart className="text-4xl mb-2 text-green-500 hover:text-red-500" />
          Customize & Order
        </div>
        <div><FaArrowRight className="hidden  lg:block text-6xl text-gray-600 mx-6" />
        <FaArrowDown className="lg:hidden text-6xl text-gray-600 my-6" />
        </div>
        <div className="process bg-gray-100">
          <FaTruck className="text-4xl mb-2 text-green-500 hover:text-red-500" />
          We Ship It
        </div>
        <div><FaArrowRight className="hidden lg:block text-6xl text-gray-600 mx-6" />
        <FaArrowDown className="lg:hidden text-6xl text-gray-600 my-6" />
        </div>
        <div className="process bg-gray-100">
          <FaBoxOpen className="text-4xl mb-2 text-green-500 hover:text-red-500" />
          Enjoy Your Custom Gear
        </div>
      </div>
    </div>)
}

export default OurProcess