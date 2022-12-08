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
				<div className='location-box'>
					<div className='address'>
						<h3>Location:</h3>
						<p>
							<a href='https://www.google.com/maps/place/Burritos+La+Chiquita/@39.115896,-94.6467138,17z/data=!3m1!4b1!4m5!3m4!1s0x87c0f16291190f45:0xf7868bc695e8c0e2!8m2!3d39.115896!4d-94.6445251'>
								1328 Minnesota Ave, Kansas City, KS 66102
							</a>
						</p>
					</div>
					<div>
						<p>Store Hours:</p>
						<ul>
							<li>Monday - Friday</li>
							<li>10am-4pm</li>
							<li>Saturday</li>
							<li>10am-2pm</li>
							<li>Sunday</li>
							<li>Closed</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Location;
