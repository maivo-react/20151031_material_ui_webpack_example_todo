import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

import * as ChannelHomeActions from '../actions/ChannelHomeActions';


import ChannelHome from '../components/ChannelHome';

class ChannelHomeContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChannelChange = this.handleChannelChange.bind(this);
    this.handleRefreshClick = this.handleRefreshClick.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedChannel } = this.props;
	console.log("inside componentDidMount. selectedChannel: "+selectedChannel);
    dispatch(ChannelHomeActions.fetchPlaylistsIfNeeded(selectedChannel));
  }

  componentWillReceiveProps(nextProps) {
	console.log("inside componentWillReceiveProps.");
    if (nextProps.selectedChannel !== this.props.selectedChannel) {
		console.log("nextProps.selectedChannel !== this.props.selectedChannel");
		const { dispatch, selectedChannel } = nextProps;
		dispatch(ChannelHomeActions.fetchPlaylistsIfNeeded(selectedChannel));
    }
  }

  handleChannelChange(nextChannel) {
    this.props.dispatch(selectChannel(nextChannel));
  }

  handleRefreshClick(e) {
    e.preventDefault();

    const { dispatch, selectedChannel } = this.props;
    dispatch(ChannelHomeActions.invalidatePlaylists());
    dispatch(ChannelHomeActions.fetchPlaylistsIfNeeded());
  }

  render() {
    const { selectedChannel, playlists, isFetching, lastUpdated } = this.props;
    return (
		<ChannelHome 	
			selectedChannel ={selectedChannel} 
			playlists={playlists} 
			isFetching={isFetching} 
			lastUpdated={lastUpdated}
			handleChannelChange= {this.handleChannelChange}
			handleRefreshClick= {this.handleRefreshClick}/>
    );
  }
}

ChannelHomeContainer.propTypes = {
  selectedChannel: PropTypes.string.isRequired,
  playlists: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  lastUpdated: PropTypes.number,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { selectedChannel, channelHomePlaylists } = state;
  const {
    isFetching,
    lastUpdated,
    items: playlists,
  } = channelHomePlaylists || {
    isFetching: true,
    items: [],
  };

  return {
    selectedChannel,
    playlists,
    isFetching,
    lastUpdated,
  };
}

export default connect(mapStateToProps)(ChannelHomeContainer);
