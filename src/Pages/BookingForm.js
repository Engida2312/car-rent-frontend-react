import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux'
import { register, reset } from '../features/bookingSlice';
import bannerImg from '../Assets/Images/banner.jpeg'
import logo from '../Assets/Images/logo.png'
import swal from 'sweetalert';

const BookingForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        contact: '',
        issue: '',
        return: '',
    });
    
    const [errors, setErrors] = useState({
        name: '',
        contact: '',
        issue: '',
        return: '',
    });

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {data, isError, isSuccess } = useSelector( (state)=> state.booking)
    
    
    const handleSubmit = e => {
        e.preventDefault();
        if (validateForm()) {
            // submit form
            dispatch(register(formData))
            if(isSuccess || data){
                swal({
                    title: "success",
                    text: "sucressfully booked",
                    icon: "success",
                    buttons: "Ok"
                  }).then(()=>{
                      navigate('/')
                  })
                reset();
            }else if(isError){
                swal({
                    title: "error",
                    text: "Booking Erorr",
                    icon: "error",
                    buttons: "Ok"
                  }).then(()=>{
                      navigate('/')
                  })
                reset();
            }
        }
    }
    
    const handleChange = e => {
        setFormData({
        ...formData,
        [e.target.name]: e.target.value
        });
    }
    
    const validateForm = () => {
        let valid = true;
        let newErrors = {};
    
        // name validation
        if (!formData.name) {
        newErrors.name = 'Name is required';
        valid = false;
        }
        if(formData.name.length < 3 ){
            newErrors.name = 'Name length must be greater than 2 digits';
            valid = false;
        }
        // contact validation
        if (!formData.contact) {
            newErrors.contact = 'Contact is required';
            valid = false;
        }
       
        // check if contact is an Indian number
        // if (formData.contact) {
        //     const isIndianNumber = /^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/.test(formData.contact);
        //     if (!isIndianNumber) {
        //         newErrors.contact = 'Please enter a valid Indian contact number';
        //         valid = false;
        //     }
        // }
    
        // date validation
        if (!formData.issue_date) {
            newErrors.issue_date = 'Issue date is required';
            valid = false;
        }
    
        if (!formData.return_date) {
            newErrors.return_date = 'Return date is required';
            valid = false;
        }
        // check if issue date is earlier than return date
        if (formData.issue_date && formData.return_date) {
            const issueDate = new Date(formData.issue_date);
            const returnDate = new Date(formData.return_date);
            if (issueDate > returnDate) {
                newErrors.issue_date = 'Issue date should be earlier than return date';
                valid = false;
            }
        }
    
        setErrors(newErrors);
        return valid;
    }
  return (
    <div className='booking-form-container'>
        <div className="left">
            <img src={bannerImg} alt="image" />
        </div>
        <div className="right">
            <div className="form-header">
                <h3>Booking Details</h3>
                <img src={logo}  />
            </div>
            <form onSubmit={handleSubmit} >
                <div className="form-group">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name" placeholder='John Doe' onChange={handleChange} value={formData.name}/>
                    <input hidden type="text" id="modal" name="modal" onChange={handleChange} value="isuszu 12x"/>
                    <span className="error">{errors.name}</span>
                </div>
                <div className="form-group">
                     <label for="contact">Contact Number:</label>
                    <input type="number" id="contact" name="contact" placeholder='+91' onChange={handleChange} value={formData.contact}/>
                    <span className="error">{errors.contact}</span>
                </div>
                <div className="form-group">
                    <label for="issue_date">Issue Date:</label>
                    <input type="date" id="issue_date" name="issue_date" placeholder='DD/MM/YYYY' onChange={handleChange} value={formData.issue_date}/>
                    <span className="error">{errors.issue_date}</span>
                </div>
                <div className="form-group">
                    <label for="return_date">Return Date:</label>
                    <input type="date" id="return_date" name="return_date" placeholder='DD/MM/YYYY' onChange={handleChange} value={formData.return_date}/>
                    <span className="error">{errors.return_date}</span>
                </div>
                <div className="form-group">
                    <input className='back-btn btn' type="submit" value="Back"/>
                </div>
                <div className="form-group">
                    <input className='book-btn btn' type="submit" value="Book Car" />
                </div>
            </form>
        </div>
    </div>
  )
}

export default BookingForm