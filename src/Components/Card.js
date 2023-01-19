import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import image from "../Assets/Images/car-2.jpeg"
import '../Assets/css/style.css'
import {MdOutlineBorderColor, MdAirlineSeatReclineNormal} from 'react-icons/md'


const Card = ({ modal, max_seat, color, rent_per_day}) => {

    const navigate = useNavigate()

  return (
    <div className="card-container">
        <div className="card-img">
            <img src={image} alt="car image" />
        </div>
        <div className="card-detail">
            <h3>{modal}</h3>
            <div className='sm-detail-container'>
                <div className="sm-detail">
                   <MdOutlineBorderColor/> <span>{color} </span>
                </div>
                <div className="sm-detail">
                    <MdAirlineSeatReclineNormal/><span>{max_seat} Seates</span>
                </div>
            </div>
        </div>
        <div className="card-price">
            <p>{rent_per_day}</p>
        </div>
        <div className="card-action-btn">
            <Link to="/booking/register" className='btn book-btn'>Book Now</Link>
            <button onClick={() => { navigate('/details/' + (modal)) }} className='btn detail-btn'>Details</button>
        </div>
    </div>
  )
}

export default Card
