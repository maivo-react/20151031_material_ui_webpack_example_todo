import {combineReducers} from 'redux';
import * as ChannelHomeActions from '../actions/ChannelHomeActions';


export function channelHomePlaylists(state = {
		isInitialized : false,
		isFetching : false,
		didInvalidate : false,
		items : [],
	}, action) {
	console.log("inside reducer.playlists. action.type: "+ action.type);
	switch (action.type) {
	case ChannelHomeActions.INVALIDATE_PLAYLISTS:
		return Object.assign({}, state, {
			didInvalidate : true,
		});
	case ChannelHomeActions.REQUEST_PLAYLISTS:
		return Object.assign({}, state, {
			isFetching : true,
			didInvalidate : false,
		});
	case ChannelHomeActions.RECEIVE_PLAYLISTS:
		console.log("inside channelHomePlaylists.RECEIVE_PLAYLISTS");
		return Object.assign({}, state, {
			isInitialized : true,
			isFetching : false,
			didInvalidate : false,
			items : action.playlists,
			lastUpdated : action.receivedAt,
		});
	default:
		return state;
	}
}

