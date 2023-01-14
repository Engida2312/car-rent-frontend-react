import React from 'react'
import { Link } from 'react-router-dom'
import image from "../Assets/Images/car-1.jpeg"
import '../Assets/css/style.css'
import {MdOutlineBorderColor, MdAirlineSeatReclineNormal} from 'react-icons/md'

const Card = () => {
  return (
    <div className="card-container">
        <div className="card-img">
            <img src={image} alt="car image" />
        </div>
        <div className="card-detail">
            <h3>Hyundai Grand i10</h3>
            <div className='sm-detail-container'>
                <div className="sm-detail">
                   <MdOutlineBorderColor/> <span>Color</span>
                </div>
                <div className="sm-detail">
                    <MdAirlineSeatReclineNormal/><span>Seates</span>
                </div>
            </div>
        </div>
        <div className="card-price">
            <p>350</p>
        </div>
        <div className="card-action-btn">
            <Link to="/booking/register" className='btn book-btn'>Book Now</Link>
            <Link to="/details" className='btn detail-btn'>Details</Link>
        </div>
    </div>
  )
}

export default Card
