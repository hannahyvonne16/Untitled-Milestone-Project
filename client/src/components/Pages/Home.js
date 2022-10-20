import React from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken= process.env.REACT_APP_MAPBOX_TOKEN;

// Sample data 
const data = [
	{
		"location": "CSULB Beach Building Services",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.108063,33.783249],
	},
	{
		"location": "CSULB University Library",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.122270,33.781990],
	},
	{
		"location": "University Student Union",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.122276,33.781818],
	}
]

class Home extends React.Component{

	// Set up states for updating map 
	constructor(props){
		super(props);
		this.state = {
			lng: -118.109680,
			lat: 33.781528,
			zoom: 12
		}
	}

	// Create map and lay over markers
	componentDidMount(){
		const map = new mapboxgl.Map({
			container: this.mapContainer,
			style: 'mapbox://styles/angelguevara94/cl2gzvhpl003l14nvx50xc0v4', 
			center: [this.state.lng, this.state.lat],
			zoom: this.state.zoom
		})

		data.forEach((location) => {
			console.log(location)
			var marker = new mapboxgl.Marker()
							.setLngLat(location.coordinates)
							.setPopup(new mapboxgl.Popup({ offset: 30 })
							.setHTML('<h4>' + location.city + '</h4>' + location.location))
							.addTo(map);

		})
	}

	render(){
		return(
			<div>
				<div ref={el => this.mapContainer = el} style={{width:'100%', height:'100vh'}}/>
			</div>
		)
	}
}

export default Home;
