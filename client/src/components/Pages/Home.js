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
		"location": "CSULB Student Recreation and Wellness Center",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.1093394060906,33.7851575997318],
	},
	{
		"location": "CSULB Mailing Services",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.10924553876404,33.78334944943123],
	},
	{
		"location": "CSULB Human Services and Design",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.1095878784254,33.78276202181796],
	},
	{
		"location": "CSULB Design Center",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.10956027038979,33.782009374305275],
	},
	{
		"location": "CSULB Central Plant",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.1122212923896,33.781683462500006],
	},
	{
		"location": "CSULB Kinesiology Building",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11223986478913,33.78267526328235],
	},
	{
		"location": "CSULB Psychology Building",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11428494247951,33.779257184449015],
	},
	{
		"location": "CSULB Department of Asian and Asian American Studies",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11369413048553,33.779192931681585],
	},
	{
		"location": "CSULB College of Liberal Arts",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.1140969779595,33.777779181811226],
	},
	{
		"location": "CSULB Peterson Hall 1",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.1126503168153,33.77880264776819],
	},
	{
		"location": "CSULB Fine Arts Building 3",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11239632287395,33.77782966696578],
	},
	{
		"location": "CSULB Fine Arts Building 1",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11263927360045,33.777219253556524],
	},
	{
		"location": "CSULB Liberal Arts 1",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11487499275916,33.77767239333733],
	},
	{
		"location": "CSULB Education Psychology Clinc",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11414097194172,33.77575763688348],
	},
	{
		"location": "CSULB Fine Arts Building 4",
		"city": "Long Beach",
		"state": "California",
		"coordinates": [-118.11263492499057,33.77835927331352],
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
