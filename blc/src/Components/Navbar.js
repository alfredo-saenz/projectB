import React from 'react';
import { Link as LinkTo } from 'react-router-dom';
import logo from '../Images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import './Navbar.css';
import { Link } from 'react-scroll';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<>
			<nav className='full-nav' ref={navRef}>
				<img className='nav-logo' src={logo} alt='Burritos la chiquita Logo' />
				<ul style={{ listStyle: 'none', cursor: 'pointer' }}>
					<li>
						<LinkTo to="/menu" onClick={showNavbar}>
							Menu
						</LinkTo>
					</li>
					<li>
						<Link
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							onClick={showNavbar}>
							About Us
						</Link>
					</li>
					<li>
						<Link
							activeClass='active'
							to='Location'
							spy={true}
							smooth={true}
							onClick={showNavbar}>
							Location
						</Link>
					</li>
					<button className='nav-btn nav-close-btn' onClick={showNavbar}>
						<FaTimes />
					</button>
				</ul>
			</nav>

			<div className='nav-container'>
				<img src={logo} alt='' srcset='' className='nav-logo' />
				<button className='nav-btn' onClick={showNavbar}>
					<FaBars />
				</button>
			</div>
		</>
	);
}

export default Navbar;
