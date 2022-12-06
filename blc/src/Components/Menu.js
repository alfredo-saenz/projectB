import React from 'react';
import { createMenuObj } from './createMenuObj.js'
import Footer from './Footer';
import  NavBar  from "./Navbar";

function Menu(props) {

    const tacoItem = createMenuObj('../Images/tacos-gc2071a96a_640.jpg','Tacos','Fresh meat tacos from culican', 2.50);
    const burritoItem = createMenuObj('../Images/mexican-g6e202bec1_640.jpg','Burrito','fully loaded burrito sinaloa style.', 4.50);
    const chipsItem = createMenuObj('../Images/food-gb7760b7fb_640.jpg','Chips','Fresh tortilla chips stolen from chipotle', 2.50);
    const taco2Item = createMenuObj('../Images/tortilla-g9b87caffa_640.jpg','Tacos','Yesterdays meat tacos from culican', 1.50);

    const menuItemArray = [tacoItem,burritoItem,chipsItem,taco2Item];

    const menuItems = [];
    for (let i = 0; i < menuItemArray.length; i++) {
        const imgSrc = menuItemArray[i][0];
        const name = menuItemArray[i][1];
        const description = menuItemArray[i][2];
        const price = menuItemArray[i][3];

        menuItems.push(<div>

            <img src={imgSrc} alt="" />
            <h2>{name}</h2>
            <p>{description}</p>
            <p>{price}</p>
        </div>)

    }

    return (
        <>
        <h2>Menu!</h2>
            {/* <div className='menu-container'>{ menuItems }</div> */}

        </>
    );
}

export default Menu;
