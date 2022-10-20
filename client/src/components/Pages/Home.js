import React from 'react';
import ReactDOM from 'react-dom';
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
	},
	{
		"location": "Richard and Karen Carpenter Performing Arts Center",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.1117423231468,33.788226226976285],
	},
	{
		"location": "Martha B. Knoebel Dance Theatre",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11318183620119,33.78821935124322],
	},
	{
		"location": "Walter Pyramid",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11438143041318,33.787469893030575],
	},
	{
		"location": "CSULB Student Health Services",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11787786623367,33.78234354289831],
	},
	{
		"location": "CSULB School of Nursing",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11781220288536,33.781650418850546],
	},
	{
		"location": "CSULB Family and Consumer Services",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11606555782035,33.78167770730496],
	},
	{
		"location": "CSULB Horn Center",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11404500988814,33.78340952845532],
	},
	{
		"location": "CSULB University Police Station",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.10920693119864,33.784329852984335],
	},
	{
		"location": "CSULB Studen Recreation and Wellness Center",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.1093394060906,33.7851575997318],
	},

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
