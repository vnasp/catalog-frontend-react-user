import { FaRegClipboard, FaShoppingCart, FaTruck, FaBoxOpen, FaArrowRight, FaArrowDown } from 'react-icons/fa'

const OurProcess = () => {
  return (
    <div id="OurProcess" className="flex flex-col p-16 lg:py-0 justify-center items-center">
      <h3>Our Process</h3>
      <div className="flex flex-col lg:flex-row justify-between items-center mt-6">
        <div className="process bg-red">
          <FaRegClipboard className="text-4xl mb-2" />
          Quote
        </div>
        <div><FaArrowRight className="hidden  lg:block text-6xl text-black mx-6" />
          <FaArrowDown className="lg:hidden text-6xl text-black my-6" />
        </div>
        <div className="process bg-red">
          <FaShoppingCart className="text-4xl mb-2" />
          Customize & Order
        </div>
        <div><FaArrowRight className="hidden  lg:block text-6xl text-black mx-6" />
          <FaArrowDown className="lg:hidden text-6xl text-black my-6" />
        </div>
        <div className="process bg-red">
          <FaTruck className="text-4xl mb-2" />
          We Ship It
        </div>
        <div><FaArrowRight className="hidden lg:block text-6xl text-black mx-6" />
          <FaArrowDown className="lg:hidden text-6xl text-black my-6" />
        </div>
        <div className="process bg-red">
          <FaBoxOpen className="text-4xl mb-2" />
          Enjoy Your Custom Gear
        </div>
      </div>
    </div>)
}

export default OurProcess