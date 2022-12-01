import React, { Component } from 'react'
import outsideView from '../Images/outside-view.jpg';
import './Section.css'
export default class Section extends Component {
  render() {
    return (
        <div className='section-container'>
            <img src={outsideView} alt="" className='section-img'/>
            <button className='menu-btn'>MENU</button>
        </div>
    )
  }
}

