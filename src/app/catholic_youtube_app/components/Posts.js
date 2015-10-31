import React, { PropTypes, Component } from 'react';

export default class Posts extends Component {
  render() {
    return (
      <ul>
        {this.props.playlists.map((post, i) =>
          <li key={i}>{post.title}</li>
        )}
      </ul>
    );
  }
}

Posts.propTypes = {
  playlists: PropTypes.array.isRequired
};
