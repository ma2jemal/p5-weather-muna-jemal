import { FETCH_WEATHER } from "../actions/index";

export default function( state = [] , action){
	//the console.log didn't work for some reason
	//console.log('Action received(post middleware):', action);
	switch(action.type){
		case FETCH_WEATHER:
		return [ action.payload.data, ...state];
	}

	return state;
}