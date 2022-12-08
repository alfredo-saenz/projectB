import React from 'react';
import {
	GoogleMap,
	useLoadScript,
	Marker,
	InfoWindow,
} from '@react-google-maps/api';

function Location(props) {
	const { isLoaded } = useLoadScript({
		googleMapsApiKey: process.env.REACT_APP_API_KEY,
	});

	if (!isLoaded) return <div>Loading...</div>;
	return <Map />;
	function Map() {
		return (
			<div className='map'>
				<GoogleMap
					clickableIcon={true}
					zoom={15}
					center={{ lat: 39.11583, lng: -94.64421 }}
					mapContainerClassName='map-container'>
					<Marker position={{ lat: 39.11583, lng: -94.64421 }} visible={true}>
						<InfoWindow
							position={{ lat: 39.11583, lng: -94.64421 }}
							visible={true}>
							<div className='location'>
								<h1 className='restaurant-name'> Burritos La Chiquita</h1>
								<h2>1328 Minnesota Ave, Kansas City, KS 66102</h2>
								<a
									className='link'
									href='https://www.google.com/maps/place/Burritos+La+Chiquita/@39.11583,-94.64421,18z/data=!4m5!3m4!1s0x0:0xf7868bc695e8c0e2!8m2!3d39.115896!4d-94.6445251?hl=en-US'>
									View on Google Maps
								</a>
							</div>
						</InfoWindow>
					</Marker>
				</GoogleMap>
				
			</div>
		);
	}
}

export default Location;
