import React, { Component } from 'react'
import outsideView from '../Images/outside-view.jpg';
import './Section.css'
export default class Section extends Component {
  render() {
    return (
      
        <div className='section-container'>
            <img src={outsideView} alt="" className='section-img'/>
            <h1 className='section-h1'><q>Great food, excellent service. Burritos are fat full of goodness.</q>-John C.</h1>
            <button className='menu-btn'>MENU</button>
        </div>
    )
  }
}
