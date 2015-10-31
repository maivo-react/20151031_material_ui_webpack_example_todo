import React, { Component, PropTypes } from 'react';

export default class ChannelPicker extends Component {
  render() {
    const { value, onChange, options } = this.props;

    return (
      <span>
        <h1>ChannelPicker.selectedChannel: {value}</h1>
        <select onChange={e => onChange(e.target.value)}
                value={value}>
          {options.map(option =>
            <option value={option} key={option}>
              {option}
            </option>)
          }
        </select>
      </span>
    );
  }
}

ChannelPicker.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.string.isRequired
  ).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
