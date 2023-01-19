import React, { useEffect } from 'react'
import image from '../Assets/Images/car-1.jpeg'
import {MdOutlineBorderColor, MdAirlineSeatReclineNormal} from 'react-icons/md'
import { useDispatch, useSelector} from "react-redux";
import { showDetials } from '../features/details/detailsSlice';
import { useParams } from "react-router-dom";

const Details = () => {
    const dispatch = useDispatch()
    let { modal } = useParams();

    
    useEffect(()=>{
        dispatch(showDetials(modal))
    }, [dispatch]) 
    
    const carDetail= useSelector((state)=> state.details.details.carDetail)
    const currentBooking= useSelector((state)=> state.details.details.currentBooking)
    // const currentBooking= useSelector((state)=> state.currentBooking)
    // const carDetail = details.carDetail
    // const currentBooking = details.currentBooking
    
    console.log("details")
    console.log(carDetail)
    console.log("cb")
    // console.log(currentBooking)
    // if (carDetail.isLoading) {
    //     return (
    //        <h2>Loading</h2>
    //     )
    // }
    if(carDetail){

    return (
            <div className="center">        
        <div className='details-container'>
            <div className="header-container">
                <img src={image}  />
                <div className="side-detail">
                    <h3>{carDetail.modal}</h3>
                    <div className='sm-detail-container'>
                        <div className="sm-detail">
                            <MdOutlineBorderColor/> <span>{carDetail.color}</span>
                        </div>
                        <div className="sm-detail">
                            <MdAirlineSeatReclineNormal/><span>{carDetail.max_seat} Seates</span>
                        </div>
                    </div>
                    <p>Rent per day: 350</p>
                    <div className="card-action-btn">
                        {currentBooking ?
                        <>
                            <button disabled id='inactive' className='btn   book-btn'>Book Now</button>
                            <span className='danger'>Currently unavailable</span>
                        </>
                        :
                        <button id='inactive' className='btn   book-btn'>Book Now</button>
                        }
                    </div>
                </div>
            </div>
            <div className="body-container">
                <h3 className='title'>Car Details</h3>

                    {currentBooking ?
                        <button disabled id='notAvalible' className='book-btn'>Not Available X</button>
                    : ''}
                <p>Vehicle Number: {carDetail.vehicle_number}</p>
                {/* <p>Petrol Car</p> */}
                {/* <p>1.2 Kappa Dual VTVT BS6 Petrol Engine</p> */}
                <p>
                    {carDetail.description}
                </p>
                <table>
                    <h3 className='title'>Current Booking</h3>
                    {currentBooking ?
                        <>
                            <tr>
                                <th>NAME</th>
                                <th>PHONE NUMBER</th>
                                <th>ISSUE DATE</th>
                                <th>RETURN DATE</th>
                            </tr>
                            <tr>
                                <td>{currentBooking.name}</td>
                                <td>{currentBooking.contact}</td>
                                <td>{currentBooking.issue_date}</td>
                                <td>{currentBooking.return_date}</td>
                            </tr>
                        </>
                        :
                        <p>No current Booking</p>
                        }
                   
                </table>
            </div>

        </div>
    </div>
  )
}
}

export default Details