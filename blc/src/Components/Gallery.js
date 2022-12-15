import React from "react";
import {
	galleryImg1,
	galleryImg2,
	galleryImg3,
	galleryImg4,
	galleryImg5,
	galleryImg6,
	galleryImg7,
	galleryImg8,
	galleryImg9,
	galleryImg10,
} from "../Images/gallery";
import "./Gallery.css";

function Gallery() {
	const galleryArray = [
		galleryImg1,
		galleryImg2,
		galleryImg3,
		galleryImg4,
		galleryImg5,
		galleryImg6,
		galleryImg7,
		galleryImg8,
		galleryImg9,
		galleryImg10,
	];

    const galleryElements = galleryArray.map((img, index) =>
        
        <img key={index} className="gallery-imgs" src={img} alt="" />
        
        
    );

	return (
		<>
			<h1 className="gallery-title">Gallery</h1>
            <div className="gallery-container">
                
			{galleryElements}
            </div>   
            
		</>
	);
}

export default Gallery;
