import {combineReducers} from 'redux';
import {channelHomePlaylists} from '../channel_home/reducers/ChannelHomeReducer';
import {selectedChannel} from '../channel_picker/reducers/reducer_index';



const rootReducer = combineReducers({
		selectedChannel, 
		channelHomePlaylists,
	});

export default rootReducer;