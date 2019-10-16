import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

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
					<div>
						<Sparklines
							svgHeight = {120}
							svgWidth = {180}
							data = {temp}
							>
							<SparklinesLine color = "red" />
						</Sparklines>
					</div>
				</td>
				<td><div>
						<Sparklines
							svgHeight = {120}
							svgWidth = {180}
							data = {pressure}
							>
							<SparklinesLine color = "blue" />
						</Sparklines>
					</div></td>
				<td><div>
						<Sparklines
							svgHeight = {120}
							svgWidth = {180}
							data = {humidity}
							>
							<SparklinesLine color = "green" />
						</Sparklines>
					</div></td>
				
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