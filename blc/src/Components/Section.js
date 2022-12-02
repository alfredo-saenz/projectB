import React, { Component } from 'react';
import outsideView from '../Images/outside-view.jpg';
import './Section.css';
export default class Section extends Component {
	render() {
		return (
			<>
				<div className='section-container'>
					<img src={outsideView} alt='' className='section-img' />
					<h1 className='section-h1'>Authentic Mexican Food Made with love</h1>
					<button className='menu-btn'>MENU</button>
				</div>
				<div className='about-us'>
          <h2 className='about-us-h2'>About Us</h2>
          <p className='about-us-p'>Established in 2008, our goal was to have the best Mexican food in Kansas City.</p>
        </div>
			</>
		);
	}
}
