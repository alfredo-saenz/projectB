import React from "react";
// import { Link } from 'react-router-dom';
import logo from "../Images/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRef } from "react";
import "./Navbar.css";
import { Link } from "react-scroll";
import { Link as LinkToComp } from "react-router-dom";
import { useState } from "react";

function Navbar(props) {
	const [isVisible, setVisibility] = useState(false);

	//this function is used to change between two different styles.
	const handleClick = () => {
		setVisibility((current) => !current);
	};

	const navRef = useRef();

	return (
		<>
			<nav
				// this changes the transform style when the hamburger btn is clicked... hamburger btn has a onClick() event.-hc
				style={{
					transform: isVisible ? "none" : "",
				}}
				className="full-nav"
				ref={navRef}
			>
				<div className="exit-nav-btn">
					<button className="nav-btn" onClick={handleClick}>
						<FaTimes />
					</button>
				</div>

				<LinkToComp className="nav-logo-container" to="/">
					<img
						className="nav-logo"
						src={logo}
						alt="Burritos la chiquita Logo"
					/>
				</LinkToComp>
				<ul
					className="nav-items-container"
					style={{ listStyle: "none", cursor: "pointer" }}
				>
					<LinkToComp onClick={handleClick} to="/menu">
						<li>Menu</li>
					</LinkToComp>
					<LinkToComp onClick={handleClick} to="/gallery">
						<li>Gallery</li>
					</LinkToComp>

					<li>
						<Link
							activeClass="active"
							to="about"
							spy={true}
							smooth={true}
							//this will close the full-nav after a section is clicked.
							onClick={handleClick}
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							activeClass="active"
							to="Location"
							spy={true}
							smooth={true}
							//this will work when location section is added.
							onClick={handleClick}
						>
							Location
						</Link>
					</li>
				</ul>
			</nav>

			<div className="nav-container">
				<LinkToComp to="/">
					<img src={logo} alt="" srcset="" className="nav-logo" />
				</LinkToComp>
				<button className="nav-btn" onClick={handleClick}>
					<FaBars />
				</button>
			</div>
		</>
	);
}

export default Navbar;
