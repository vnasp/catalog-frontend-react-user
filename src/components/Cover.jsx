import Reassurance from "./Reassurance"

const Cover = () => {
  return (
 
    <div className="relative">
      <div id="cover" className="header-cover flex flex-col justify-center items-start text-white ps-4 lg:ps-10">
        <div className="animated-gradient p-4 px-4 py-2 rounded-lg font-extrabold mb-3">
          Define Your Style, Unite Your Team
        </div>
        <div className="bg-black bg-opacity-20 p-4 rounded-lg">
          <h1 className="leading-tight">Custom Team Apparel</h1>
          <p className="leading-normal text-2xl">Tailored designs to elevate your game</p>
          </div>
      </div>
      <Reassurance />
      </div>
  )
}

export default Cover