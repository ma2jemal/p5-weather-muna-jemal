import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import {fetchWeather} from '../actions/index';

 class SearchBar extends Component{
	constructor(props){
		super (props);

		this.state = { term: ''}
		//I want to understand more why we have to use this
		this.onInputChange = this.onInputChange.bind(this);
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}
	//it says if we don't want to use this on the constructor we can
	//just create the function using onInputChange = (event) => which isn't preferred
	onInputChange(event){
		//console.log(event.target.value);
		this.setState({term: event.target.value });
	}

	onFormSubmit( event ){
		event.preventDefault();
		this.props.fetchWeather(this.state.term);
		this.setState({term: "" })
	}

	render(){
		return(
			<form onSubmit = { this.onFormSubmit } className = "input-group">
				<input
				placeholder = "Get a five-day forecast in your favorite cities"
				className = "form-control"
				//The following attribute is to make SearchBar a "controlled" component
				value = { this.state.term }
				onChange = { this.onInputChange}
				/>
				<span className = "input-group-btn">
					<button type = "submit" className = "btn btn-secondary">
						Submit
					</button>
				</span>
			</form>
			)
	}
}
function mapDispatchToProps(dispatch){
	return bindActionCreators({fetchWeather: fetchWeather},dispatch);
}
export default connect(null, mapDispatchToProps)(SearchBar);