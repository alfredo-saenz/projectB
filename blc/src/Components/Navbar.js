import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import './Navbar.css';

function Navbar(props) {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<>
			<nav ref={navRef}>
				<img className='blc-logo' src={logo} alt='Burritos la chiquita Logo' />
				<ul>
					<li>Menu</li>
					<li>About Us</li>
					<li>Contact</li>
					<button className='nav-btn nav-close-btn' onClick={showNavbar}>
						<FaTimes />
					</button>
				</ul>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
		</>
	);
}

export default Navbar;
