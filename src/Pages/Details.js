import React from 'react'
import image from '../Assets/Images/car-1.jpeg'
import {MdOutlineBorderColor, MdAirlineSeatReclineNormal} from 'react-icons/md'

const Details = () => {
  return (
    <div className="center">        
        <div className='details-container'>
            <div className="header-container">
                <img src={image} alt="image" />
                <div className="side-detail">
                    <h3>Hyundai Grand i10</h3>
                    <div className='sm-detail-container'>
                        <div className="sm-detail">
                            <MdOutlineBorderColor/> <span>Color</span>
                        </div>
                        <div className="sm-detail">
                            <MdAirlineSeatReclineNormal/><span>Seates</span>
                        </div>
                    </div>
                    <p>Rent per day: 350</p>
                    <div className="card-action-btn">
                        <button disabled id='inactive' className='btn   book-btn'>Book Now</button>
                        <span className='danger'>Currently unavailable</span>
                    </div>
                </div>
            </div>
            <div className="body-container">
                <h3 className='title'>Car Details</h3>
                <button disabled id='notAvalible' className='book-btn'>Not Available X</button>
                <p>Vehicle Number: 18 D 4356</p>
                <p>Petrol Car</p>
                <p>1.2 Kappa Dual VTVT BS6 Petrol Engine</p>
                <p>
                Hyundai GRAND 10 NIOS comes with Wonder Warranty options of upto 5 years Std. Customer can choose any warranty option as per his driving requirement at the time of new vehicle delivery. From a strong body structure to Standard Dual airbags and ABS with EBD, maximum care has been taken to integrate a plethora of safety features
                </p>
                <table>
                    <h3 className='title'>Current Booking</h3>
                    <tr>
                        <th>NAME</th>
                        <th>PHONE NUMBER</th>
                        <th>ISSUE DATE</th>
                        <th>RETURN DATE</th>
                    </tr>
                    <tr>
                        <td>Jone Doe</td>
                        <td>+917905654483</td>
                        <td>25th Jan 20</td>
                        <td>28th Jan 20</td>
                    </tr>
                </table>
            </div>

        </div>
    </div>
  )
}

export default Details