import React, { Component } from "react";
import blcEnhanced from "../Images/BurritoLaChiq-enhanced.jpeg";
import mexicoChef from "../Images/mexican-chef.jpeg";
import "./Section.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Location from "./Location";

function Section(props) {
	const navigate = useNavigate();

	return (
		<>
			<div className="section-container">
				<img src={blcEnhanced} alt="" className="section-img" />
				<div className="image-overlay"></div>
				<div className="header-menu-container">
					<h1 className="section-h1">
						Authentic Mexican cuisine served in a lively atmosphere.<br></br>
						Come taste the flavors of Mexico at our restaurant!
					</h1>
					<button onClick={() => navigate("/menu")} className="menu-btn">
						MENU
					</button>
				</div>
			</div>
			<div id="about" className="about-us">
				<img className="aboutus-img" src={mexicoChef} alt="" />
				<p className="about-us-p">
					<span>
				<h2 className="about-us-h2">About Us</h2>
					</span>
				Burritos La Chiquita has a rich history and a passion for authentic Mexican cuisine.<br></br>Our warm and welcoming atmosphere is the perfect place to gather with friends and family and enjoy a delicious meal.<br></br> Thank you for choosing to dine with us. We can't wait to serve you!
				</p>
			</div>
			<div id="location" className="location-section">
				<div className="location-content">
				<h2 className="location-title">Come Visit Us</h2>
				<Location />

				</div>
			</div>
		</>
	);
}

export default Section;
