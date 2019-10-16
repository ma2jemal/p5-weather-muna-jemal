import axios from 'axios';

const API_KEY = "d10e90d073ab7f704b58a8012e7c6698";

const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;

	//axios.get(url) returns a promise
	const request = axios.get(url);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}