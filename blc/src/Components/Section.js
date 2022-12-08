import React, { Component } from "react";
import outsideView from "../Images/outside-view.jpg";
import "./Section.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Section(props) {

	const navigate = useNavigate();

	return (
		<>
			<div className="section-container">
				<img src={outsideView} alt="" className="section-img" />

				<h1 className="section-h1">
					<q>
						Great food, excellent service. Burritos are fat full of goodness.
					</q>
					-John C.
				</h1>

				<button onClick={() => navigate("/menu")} className="menu-btn">
					MENU
				</button>

			</div>
			<div id="about" className="about-us">
				<h2 className="about-us-h2">About Us</h2>
				<p className="about-us-p">
					Established in 2008, our goal was to have the best Mexican food in
					Kansas City.
				</p>
			</div>
			<div id="location" className="location-section">
				<h2>Come Visit Us</h2>
			</div>
		</>
	);
}

export default Section;
