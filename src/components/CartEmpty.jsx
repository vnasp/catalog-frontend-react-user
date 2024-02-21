
const CartEmpty = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="m-4 p-4">
          <h2>Your cart is empty</h2>
        </div>
        <div>
          <p>Add some items to request a quote.</p>
        </div>
      </div >
    </>
  )
}

export default CartEmpty