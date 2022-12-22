import React, { Component } from 'react';
import logo from '../Images/logo.png';
import facebook from '../Images/facebook.png';
import twitter from '../Images/twitter.png';
import insta from '../Images/instagram.png';
import './Footer.css';

export default class Footer extends Component {
  render() {
    return (
      <>
        <footer>
            <img src={logo} alt="" srcset="" className='footer-logo'/>
            <div className='socials-container'>
              <a  className='social-links' href="https://www.facebook.com/burritoslachiquita1/">
                <img src={facebook} alt="" className='social-icons' />
              </a>
            </div>

            <div className='copyright'>
            <p className='copy-item'>© 2022 Burritos La Chiquita</p>
            <p className='copy-item'>Powered by Culture Digital</p>
            </div>
        </footer>

      </>
    )
  }
}
