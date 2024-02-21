import ScrollToTopButton from "./ScrollToTopButton"

const Footer = () => {
  return (
    <>
      <div className="bg-black d-flex justify-between">
        <div>
          <img src="/logo_white.png" className="logo" alt="Delta Sport US | Custom Team Apparel" />
          <div>Proud of shipping to all United States from Baltimore, US</div>
          <div>Follow Us IG</div>
        </div>
        <div>
          2024 Delta Sport US - All right reserved
        </div>
      </div>
      <ScrollToTopButton />
    </>


  )
}

export default Footer