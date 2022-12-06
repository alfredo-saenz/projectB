import React from 'react';
import logo from '../Images/logo.png';
import { FaBars, FaTimes } from 'react-icons/fa';
import { useRef } from 'react';
import './Navbar.css';
import { Link as LinkTo} from 'react-scroll';
import { Link } from 'react-router-dom';

function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle('responsive_nav');
	};

	return (
		<>
			<nav className='full-nav' ref={navRef}>
				<Link to='/'>
					<img
						className='nav-logo'
						src={logo}
						alt='Burritos la chiquita Logo'
					/>
				</Link>
				<ul style={{ listStyle: 'none', cursor: 'pointer' }}>
					<Link to='/menu' onClick={showNavbar}>
						<li>Menu</li>
					</Link>

					<li>
						<LinkTo
							activeClass='active'
							to='about'
							spy={true}
							smooth={true}
							onClick={showNavbar}>
							About Us
						</LinkTo>
					</li>
					<li>
						<LinkTo
							activeClass='active'
							to='Location'
							spy={true}
							smooth={true}
							onClick={showNavbar}>
							Location
						</LinkTo>
					</li>
					<button className='nav-btn nav-close-btn' onClick={showNavbar}>
						<FaTimes />
					</button>
				</ul>
			</nav>

			<div className='nav-container'>
				<Link to='/'>
					<img src={logo} alt='' srcset='' className='nav-logo' />
				</Link>
				<button className='nav-btn' onClick={showNavbar}>
					<FaBars />
				</button>
			</div>
		</>
	);
}

export default Navbar;
