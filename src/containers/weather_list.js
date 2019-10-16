import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

import Chart from '../components/chart';

class WeatherList extends Component{

	renderWeather(cityData){
		const name = cityData.city.name;
		const temp = cityData.list.map(lists => (lists.main.temp));
		const pressure = cityData.list.map(lists => (lists.main.pressure));
		const humidity = cityData.list.map(lists => (lists.main.humidity))

		return(
			<tr key={name}>
				<td>{ name }</td>
				<td>
					<Chart data = {temp} color = "red" units = "Kelvin"/>
				</td>
				<td>
					<Chart data = {pressure} color = "blue" units = "hPa"/>
				</td>
				<td>
					<Chart data = {humidity} color = "green" units = "%"/>
				</td>
				
			</tr>
			)
	}
	render(){
		return(
			<table className = "table table-hover">
				<thead>
					<tr>
						<th> City</th>
						<th>Temperature(Kelvin)</th>
						<th>Pressure(hPa)</th>
						<th>Humidity(%)</th>
					</tr>
				</thead>
			<tbody>
				{this.props.weather.map(this.renderWeather)}
			</tbody>
		</table>

			)
	}
}

//function mapStateToProps(state){
//	return{ weather: state.weather };

//}

function mapStateToProps({ weather }){
	return { weather };
}

export default connect(mapStateToProps)(WeatherList);