import React from "react";
import "./Menu.css";
import menuArray from "./menuArray";
import { Link } from "react-scroll";

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
			<li key={menuItem.id} className="menu-items">
				<h2 className="menu-item-title">{menuItem.title}</h2>
				<p className="menu-item-desc">{menuItem.desc}</p>
				<p className="menu-item-price">${menuItem.price}</p>
			</li>
		);
	});
	const tacoItems = categorizedData.Tacos.items.map((menuItem) => {
		return (
			<li key={menuItem.id} className="menu-items">
				<h2 className="menu-item-title">{menuItem.title}</h2>
				<p className="menu-item-desc">{menuItem.desc}</p>
				<p className="menu-item-price">${menuItem.price}</p>
			</li>
		);
	});
	const tortaItems = categorizedData.Tortas.items.map((menuItem) => {
		return (
			<li key={menuItem.id} className="menu-items">
				<h2 className="menu-item-title">{menuItem.title}</h2>
				<p className="menu-item-desc">{menuItem.desc}</p>
				<p className="menu-item-price">${menuItem.price}</p>
			</li>
		);
	});
	const chiqFavItems = categorizedData["La Chiquita Favorites"].items.map(
		(menuItem) => {
			return (
				<li key={menuItem.id} className="menu-items">
					<h2 className="menu-item-title">{menuItem.title}</h2>
					<p className="menu-item-desc">{menuItem.desc}</p>
					<p className="menu-item-price">${menuItem.price}</p>
				</li>
			);
		}
	);
	const platilloItems = categorizedData.Platillos.items.map((menuItem) => {
		return (
			<li key={menuItem.id} className="menu-items">
				<h2 className="menu-item-title">{menuItem.title}</h2>
				<p className="menu-item-desc">{menuItem.descOne}</p>
				<p className="menu-item-desc">{menuItem.descTwo}</p>
				<p className="menu-item-price">${menuItem.price}</p>
			</li>
		);
	});
	const quesadillaItems = categorizedData.Quesadilla.items.map((menuItem) => {
		return (
			<li key={menuItem.id} className="menu-items">
				<h2 className="menu-item-title">{menuItem.title}</h2>
				<p className="menu-item-desc">{menuItem.desc}</p>
				<p className="menu-item-price">${menuItem.price}</p>
			</li>
		);
	});

	return (
		<>	

			<h1 className="main-menu-title">Menu</h1>
			<h3 className="jumpto-title">Jump to section</h3>
			<div className="menu-tabs">
				<Link activeClass="active" to="burrito-sec" spy={true} smooth={true}>
					
				<button className="menu-tab-btns burrito-btn">Burrito</button>
				</Link>
				
				<Link activeClass="active" to="taco-sec" spy={true} smooth={true}>
				<button className="menu-tab-btns taco-btn">Taco</button> 
					
				</Link>
				<Link activeClass="active" to="torta-sec" spy={true} smooth={true}>
				<button className="menu-tab-btns torta-btn">Torta</button>
					
				</Link>
				<Link className="fav-btn-parent" activeClass="active" to="fav-sec" spy={true} smooth={true}>
				<button className="menu-tab-btns chiq-fav-btn">La Chiquita Favorites</button>
					
				</Link>
				<Link activeClass="active" to="platillo-sec" spy={true} smooth={true}>
				<button className="menu-tab-btns platillo-btn">Platillos</button>
					
				</Link>

				<Link activeClass="active" to="quesa-sec" spy={true} smooth={true}>
					<button className="menu-tab-btns quesa-btn">Quesadillas</button>
				</Link>
				<Link activeClass="active" to="drink-sec" spy={true} smooth={true}>
				<button className="menu-tab-btns drink-btn">Drinks</button>
				</Link>

			</div>
			<ul className="full-menu">
				<h1 id="burrito-sec" className="category-title">Burritos</h1>
				<div className="menu-category burritos">
					{burritoItems}
				</div>
				<h1 id="taco-sec" className="category-title">Tacos</h1>
				<div className="menu-category tacos">{tacoItems}</div>
				<h1 id="torta-sec" className="category-title">Tortas</h1>
				<div className="menu-category tortas">{tortaItems}</div>
				<h1 id="fav-sec" className="category-title">
					La Chiquita <span className="fav-title">Favorites</span>
				</h1>
				<div className="menu-category chiq-favs">{chiqFavItems}</div>
				<h1 id="platillo-sec" className="category-title">Platillos</h1>
				<div className="menu-category platillos">{platilloItems}</div>
				<h1 id="quesa-sec" className="category-title">
					Quesadillas
				</h1>
				<div className="menu-category quesadillas">{quesadillaItems}</div>
				<h1 id="drink-sec" className="category-title  drink-side-title">Drinks</h1>
				<div className="menu-category drinks-container">
					<p className="drinks">Chocolate Abuelita</p>
					<p className="drinks">Coffee</p>
					<p className="drinks">Fountain Drink</p>
					<p className="drinks">Jarritos 20oz</p>
					<p className="drinks">Soda Can</p>

					<p className="drink-side-prices">$2.5</p>
					<p className="drink-side-prices">$2</p>
					<p className="drink-side-prices">$1.5 16oz / $2.5 24oz</p>
					<p className="drink-side-prices">$2.5</p>
					<p className="drink-side-prices">$1.5</p>
				</div>
				<h1 className="category-title  drink-side-title">Sides</h1>
				<div className="menu-category sides-container">
					<p className="sides">Arroz / Rice</p>
					<p className="sides">Frijoles / Beans</p>
					<p className="drink-side-prices">$1.75</p>
					<p className="drink-side-prices">$1.75</p>
				</div>
			</ul>
		</>
	);
}

export default Menu;
