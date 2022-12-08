import React from "react";
// import { createMenuObj } from './createMenuObj.js'
import "./Menu.css";
import menuArray from "./menuArray";

function Menu(props) {

	const menuItems = menuArray;

	//This will return an array with menu items catergorized.
	const categorizedData = menuItems.reduce((newArr, menuItem) => {
		const category = menuItem.category;

		if (!newArr[category]) {
			newArr[category] = {
				items: [],
			};
		}
		//this pushes the item obj into the category[items] array
		newArr[category].items.push(menuItem);

		return newArr;
	}, {});



	const burritoItems = categorizedData.Burritos.items.map((menuItem) => {
		return (
			<li key={menuItem.id} className={menuItem.category + " " + "menu-items"}>
				<h2 className="menu-item-title">{menuItem.title}</h2>
				<p className="menu-item-desc">{menuItem.desc}</p>
				<p className="menu-item-price">{menuItem.price}</p>
			</li>
		);
	});
	const tacoItems = categorizedData.Tacos.items.map((menuItem) => {
		return (
			<li key={menuItem.id} className={menuItem.category + " " + "menu-items"}>
				<h2 className="menu-item-title">{menuItem.title}</h2>
				<p className="menu-item-desc">{menuItem.desc}</p>
				<p className="menu-item-price">{menuItem.price}</p>
			</li>
		);
	});
	const tortaItems = categorizedData.Tortas.items.map((menuItem) => {
		return (
			<li key={menuItem.id} className={menuItem.category + " " + "menu-items"}>
				<h2 className="menu-item-title">{menuItem.title}</h2>
				<p className="menu-item-desc">{menuItem.desc}</p>
				<p className="menu-item-price">{menuItem.price}</p>
			</li>
		);
	});
	const chiqFavItems = categorizedData['La Chiquita Favorites'].items.map((menuItem) => {
		return (
			<li key={menuItem.id} className={menuItem.category + " " + "menu-items"}>
				<h2 className="menu-item-title">{menuItem.title}</h2>
				<p className="menu-item-desc">{menuItem.desc}</p>
				<p className="menu-item-price">{menuItem.price}</p>
			</li>
		);
	});
	const platilloItems = categorizedData.Platillos.items.map((menuItem) => {
		return (
			<li key={menuItem.id} className={menuItem.category + " " + "menu-items"}>
				<h2 className="menu-item-title">{menuItem.title}</h2>
				<p className="menu-item-desc">{menuItem.desc}</p>
				<p className="menu-item-price">{menuItem.price}</p>
			</li>
		);
	});
	const quesadillaItems = categorizedData.Quesadilla.items.map((menuItem) => {
		return (
			<li key={menuItem.id} className={menuItem.category + " " + "menu-items"}>
				<h2 className="menu-item-title">{menuItem.title}</h2>
				<p className="menu-item-desc">{menuItem.desc}</p>
				<p className="menu-item-price">{menuItem.price}</p>
			</li>
		);
	});


	return (
		<>
			<h2>Menu!</h2>
			<ul className="full-menu">
				<div className="menu-item-card burritos">
                    <h1>Burritos</h1>
                    {burritoItems}
                </div>
				<div className="menu-item-card tacos">
                    <h1>Tacos</h1>    
                    {tacoItems}
                 </div>
				<div className="menu-item-card tortas"> 
                    <h1>Tortas</h1>    
                    {tortaItems}
                
                </div>
				<div className="menu-item-card chiq-favs">
                    <h1>La Chiquita Favorites</h1>    
                    {chiqFavItems}
                    
                     </div>
				<div className="menu-item-card platillos"> 
                    <h1>Platillos</h1>    
                    {platilloItems}
                
                </div>
				<div className="menu-item-card quesadillas"> 
                    <h1>Quesadillas</h1>    
                    {quesadillaItems}
                
                </div>
			</ul>
		</>
	);
}

export default Menu;
