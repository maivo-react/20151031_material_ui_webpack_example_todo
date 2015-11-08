import fetch from 'isomorphic-fetch';
//

export const REQUEST_PLAYLISTS = 'CHANNEL_HOME.REQUEST_PLAYLISTS';
export const RECEIVE_PLAYLISTS = 'CHANNEL_HOME.RECEIVE_PLAYLISTS';
export const INVALIDATE_PLAYLISTS = 'CHANNEL_HOME.INVALIDATE_PLAYLISTS';



export function invalidatePlaylists() {
  return {
    type: INVALIDATE_PLAYLISTS,
  };
}

function requestPlaylists() {
  return {
    type: REQUEST_PLAYLISTS,
  };
}

function receivePlaylists(json) {
  return {
    type: RECEIVE_PLAYLISTS,
    playlists: json.items,
    receivedAt: Date.now(),
  };
}

export function fetchPlaylists() {
	console.log("inside fetchPlaylists");
	let url = "https://www.googleapis.com/youtube/v3/playlists?channelId=UCNCSdSsVvwaH5XT6CW3vSag&key=AIzaSyCC3f0niYMHqH9M_cYb6Hxhczdi82kljQ8&part=contentDetails%2Csnippet ";
  return dispatch => {
    dispatch(requestPlaylists());
	//`http://www.reddit.com/r/${reddit}.json`
	//`http://localhost:8080/mbmock/reddit/${reddit}.json`
	//http://localhost:8080/mbmock/youtube/vuptvupt/channel_playlist_transformed.json
	//"http://localhost:8080/mbmock/youtube/vuptvupt/channel_playlist_transformed_vuptvupt.json"
	//`http://localhost:8080/mbmock/youtube/vuptvupt/channel_playlist_raw_${channel}.json`
	//`http://localhost:8080/mbmock/youtube/vuptvupt/channel_playlist_raw_vupt.json`
    return fetch(url)
		.then(response => {
			return response.json();
		})
		.then(json => {
			console.log("inside fetchPlaylists. json: ", json);
			dispatch(receivePlaylists(json));
		})
		
  };
}

function shouldfetchPlaylists(state) {
	console.log("inside shouldfetchPlaylists");
  const playlists = state.channelHomePlaylists;
  console.log("playlists: ", playlists);
  if (!playlists) {
    return true;
  }
  if (! playlists.isInitialized) {
    return true;
  }
  if (playlists.isFetching) {
    return false;
  }
  if (playlists.didInvalidate) {
    return true;
  }
  
  return false;
  //return playlists.didInvalidate;
}

export function fetchPlaylistsIfNeeded() {
	console.log("inside fetchPlaylistsIfNeeded");
  return (dispatch, getState) => {
	let shouldFetch = shouldfetchPlaylists(getState());
	console.log("shouldfetchPlaylists: "+ shouldFetch);
    if (shouldFetch) {
      return dispatch(fetchPlaylists());
    }
  };
}
