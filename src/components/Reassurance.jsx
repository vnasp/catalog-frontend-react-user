import { FaRocket, FaPencilAlt} from "react-icons/fa";
import {MdLocalShipping, MdPrint} from 'react-icons/md'

const Reassurance = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 m-6 lg:m-16 text-center">
          <div className="reassurance"><MdLocalShipping className="icon"/>Shipping Across the United States</div>
          <div className="reassurance"><FaRocket className="icon"/>Swift Manufacturing & Shipping</div>
          <div className="reassurance"><MdPrint className="icon"/>Advanced Sublimation Printing</div>
          <div className="reassurance"><FaPencilAlt className="icon"/>Customize Your Team Gear</div>
        </div>
  )
}

export default Reassurance