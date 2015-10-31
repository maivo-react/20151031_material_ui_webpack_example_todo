import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { selectChannel} from '../actions/action_index';

import ChannelPicker from '../components/ChannelPicker';

class ChannelPickerContainer extends Component {
  constructor(props) {
    super(props);
    this.handleChannelChange = this.handleChannelChange.bind(this);
  }

  componentDidMount() {
    const { dispatch, selectedChannel } = this.props;
	console.log("inside componentDidMount. selectedChannel: "+selectedChannel);
  }

  componentWillReceiveProps(nextProps) {
	console.log("inside componentWillReceiveProps.");
   
  }

  handleChannelChange(nextChannel) {
	console.log("inside ChannelPickerContainer.handleChannelChange");
    this.props.dispatch(selectChannel(nextChannel));
  }

  render() {
    const { selectedChannel} = this.props;
    return (
		<ChannelPicker value={selectedChannel}
					onChange={this.handleChannelChange}
					options={['reactjs', 'UCNCSdSsVvwaH5XT6CW3vSag', 'vupt', 'phonger', 'cranbrook']} />
    );
  }
}

ChannelPickerContainer.propTypes = {
  selectedChannel: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  const { selectedChannel} = state;

  return {
    selectedChannel,
  };
}

export default connect(mapStateToProps)(ChannelPickerContainer);