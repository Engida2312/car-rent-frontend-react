import React from 'react'
import {AiOutlineTwitter, AiOutlineInstagram, AiFillLinkedin} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='footer-container'>
        <div className="footer-top">
            <h3>Rent Vroom</h3>
            <p>Rentvroom pvt. ltd.</p>
            <p>No:293, 3rd croos Rd, Jakksandra, 1st block,
                koramangla, Bangaluru, karantaka 5600034</p>
            <div className="social-icons">
                <a href="https://twitter.com/"><AiOutlineTwitter/></a>
                <a href="https://instagram.com/"><AiOutlineInstagram/></a>
                <a href="https://linkedin.com/"><AiFillLinkedin/></a>
            </div>
        </div>

        <div className="footer-bottom">
            <div className="links-right">
                <a href="/">Home</a>
                <a href="/Contact">Contact</a>
                <a href="/About">About</a>
            </div>
            <div className="links-right">
                <a href="#">Privacy Policy</a>
                <a href="#">Terms Of Services</a>
            </div>
        </div>
    </div>
  )
}

export default Footer