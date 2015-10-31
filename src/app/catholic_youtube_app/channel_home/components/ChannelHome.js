import React from 'react';
import PlayListsTable from './PlayListsTable';


export default class ChannelHome extends React.Component {
	constructor(props){
		super(props);
	}
	
	
	render() {
		const { selectedChannel, playlists, isFetching, lastUpdated, handleRefreshClick} = this.props;
		return (
		  <div>
			
			<p>
			  {lastUpdated &&
				<span>
				  Last updated at {new Date(lastUpdated).toLocaleTimeString()}.
				  {' '}
				</span>
			  }
			  {!isFetching &&
				<a href="#"
				   onClick={handleRefreshClick}>
				  Refresh2
				</a>
			  }
			</p>
			{isFetching  &&
			  <h2>Loading...</h2>
			}
			{!isFetching && playlists.length === 0 &&
			  <h2>Empty.</h2>
			}
			{playlists.length > 0  &&
			  <div style={{ opacity: isFetching ? 0.5 : 1 }}>
				<h3>Channel Playlists</h3>
				<PlayListsTable playlists ={playlists}/>
			  </div>
			}
		  </div>
		);
  }
}


