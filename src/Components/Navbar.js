import React from 'react';
// import { Link } from 'react-router-dom';
import logo from '../Images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';
import { Link as LinkToComp } from 'react-router-dom';
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Navbar(props) {
	const navRef = useRef();
	const pathLocation = useLocation();
	const pathNavigator = useNavigate();

	// console.log(pathLocation);
	const showNavbar = (event) => {

					navRef.current.classList.toggle('responsive_nav');

	};
	
	return (
		<header>
			<div className='home-logo navbar-title navbar-item'>

			<LinkToComp to='/'>
			<img className='home-logo' src={logo}/>
			</LinkToComp>
			</div>

			<nav className='nav-section' ref={navRef}>
				<LinkToComp to='/menu' onClick={showNavbar}>
				<button className='navbar-item'>
					Menu
				</button>
				</LinkToComp>

				<LinkToComp to='/gallery' onClick={showNavbar}>
				<button className='navbar-item'>
					Gallery
				</button>
				</LinkToComp>
			

				{/* <a className='navbar-item'>
					<LinkToComp to='/gallery'>Gallery</LinkToComp>
				</a> */}
				<a className='navbar-item'>
					<Link 
						className='navbar-item'
						activeClass='active'
						to='about'
						spy={true}
						smooth={true}
						onClick={showNavbar}>
						About Us
					</Link>
				</a>
				<a className='navbar-item'>
					<Link
						className='navbar-item'
						activeClass='active'
						to='location'
						spy={true}
						smooth={true}
						onClick={showNavbar}
						>
						Location
					</Link>
				</a>

				<button className='nav-btn nav-close-btn' onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className='nav-btn' onClick={showNavbar}>
				<FaBars />
			</button>
		</header>
	);
}

export default Navbar;
