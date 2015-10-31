import { SELECT_CHANNEL} from '../actions/action_index';

export function selectedChannel(state = 'vupt', action) {
	console.log("inside reducer.selectedChannel. action.type: "+ action.type);
	switch (action.type) {
	case SELECT_CHANNEL:
		return action.channel;
	default:
		console.log("inside selectedChannel.default. state: ", state);
		return state;
	}
}


