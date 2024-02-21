import { useContext, useState } from 'react';
import { Form, InputGroup, Button } from 'react-bootstrap'
import { DataContext } from '../context/DataContext'
import { useNavigate } from 'react-router-dom'

const RequestData = () => {
  const { deliveryAddress, setDeliveryAddress, total, cart, setCart, setShowCart, setOrderDetails } = useContext(DataContext)
  const [ selectedTime, setSelectedTime] = useState('')
const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
      const orderDetails = {
        cart,
        nameCustomer,
        emailCustomer,
      }
      setOrderDetails(orderDetails)
      setCart([])
      setShowCart(false)
      }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formAddress">
        <InputGroup>
          <InputGroup.Text id="basic-addon1">Your Name</InputGroup.Text>
          <Form.Control
            placeholder="Your full name"
            aria-label="address"
            aria-describedby="basic-addon1"
            value={deliveryAddress}
            onChange={(e) => setDeliveryAddress(e.target.value)}
            required
          />
        </InputGroup>
      </Form.Group>
      <Form.Group controlId="deliveryTimeSelect">
        <InputGroup>
          <InputGroup.Text id="basic-addon1"><FaMotorcycle /></InputGroup.Text>
          <Form.Select value={selectedTime} onChange={handleTimeChange} aria-label="Default select example" required>
            <option value="" disabled>Elige la hora de entrega</option>
            {deliveryTimes.map((time, index) => (
              <option key={index} value={time}>{time}</option>
            ))}
          </Form.Select>
        </InputGroup>
      </Form.Group>
      <Button className="btn secondary w-100 fs-4 mt-4" type="submit">Crear Orden</Button>
    </Form>
  );
}

export default RequestData