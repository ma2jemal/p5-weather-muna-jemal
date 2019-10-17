import React,{ Component } from 'react';

const google = window.google;

class GoogleMaps extends Component {
	componentDidMount(){
		new google.maps.Map(this.refs.map,{
			zoom: 12,
			center:{
				lat: this.props.lat,
				lng: this.props.lon
			}
		})
	}
	render(){
		return <div ref = "map"/>
	}
}
export default GoogleMaps;