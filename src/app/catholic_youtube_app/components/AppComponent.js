import React, { Component, PropTypes } from 'react';
import {Link} from 'react-router';

export default class AppComponent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
          AppComponent Links: 
			<Link to="/" activeClassName="active">index</Link> |
			<Link to="/channelHome" activeClassName="active">channelHome</Link> |
			<Link to="/channelPicker" activeClassName="active">channelPicker</Link> |
			<Link to="/helloComponent" activeClassName="active">helloComponent</Link> |	
			<Link to="/helloComponent2" activeClassName="active">helloComponent2</Link>	
        {this.props.children}
      </div>
    )
   }
}

