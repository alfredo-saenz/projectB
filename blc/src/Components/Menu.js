import React from 'react';
import { createMenuObj } from './createMenuObj.js'
import  "./Menu.css";
import burritoImg from "../Images/mexican-g6e202bec1_640.jpg";
import tacoImg from "../Images/tacos-gc2071a96a_640.jpg";
import tacoPLatterImg from "../Images/tortilla-g9b87caffa_640.jpg";
import chipsImg from '../Images/food-gb7760b7fb_640.jpg';
function Menu(props) {

    // Menu items are created with createMenuObj() factory function.
    //This can be used in the future if admin page is created so user can create their own menu items automatically.
    const tacoItem = createMenuObj(1,tacoImg,'Tacos','Fresh meat tacos from culican', 2.50);
    const burritoItem = createMenuObj(2,burritoImg,'Burrito','fully loaded burrito sinaloa style.', 4.50);
    const chipsItem = createMenuObj(3,chipsImg,'Chips','Fresh tortilla chips stolen from chipotle', 2.50);
    const taco2Item = createMenuObj(4,tacoPLatterImg,'Tacos','Yesterdays meat tacos from culican', 1.50);

    const menuItems= [tacoItem,burritoItem,chipsItem,taco2Item];

    const listItems = menuItems.map(menuItems =>
            <li key={menuItems.id} className="menuItems">
                <img src={menuItems.img} alt="" className='menuImgs'/>
                <h2>{menuItems.name}</h2>
                <p>{menuItems.description}</p>
                <p>{menuItems.price}</p>

            </li>

        );

    return (
        <>
        <h2>Menu!</h2>
        <ul>{listItems}</ul>
        </>
    );
}

export default Menu;
