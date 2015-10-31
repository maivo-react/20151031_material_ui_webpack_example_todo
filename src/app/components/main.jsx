/** In this file, we create a React component which incorporates components provided by material-ui */

import React, { PropTypes, Component } from 'react';
import RaisedButton from 'material-ui/lib/raised-button';
import Dialog from 'material-ui/lib/dialog';
import ThemeManager from 'material-ui/lib/styles/theme-manager';
import LightRawTheme from 'material-ui/lib/styles/raw-themes/light-raw-theme';
import Colors from 'material-ui/lib/styles/colors';

class Main extends Component{
  
  static get childContextTypes() {
    return { muiTheme: React.PropTypes.object };
  }
  
  constructor() {
	super();
	this.state = { muiTheme: ThemeManager.getMuiTheme(LightRawTheme)};
	this. _handleTouchTap = this. _handleTouchTap.bind(this);
  }


  getChildContext() {
    return {
      muiTheme: this.state.muiTheme,
    };
  }

  componentWillMount() {
    let newMuiTheme = ThemeManager.modifyRawThemePalette(this.state.muiTheme, {
      accent1Color: Colors.deepOrange500,
    });
    
    this.setState({muiTheme: newMuiTheme});
  }

  render() {

    let containerStyle = {
      textAlign: 'center',
      paddingTop: '200px',
    };

    let standardActions = [
      { text: 'Okay' },
    ];

    return (
      <div style={containerStyle}>
        <Dialog
          title="Super Secret Password2"
          actions={standardActions}
          ref="superSecretPasswordDialog">
          1-2-3-4-5
        </Dialog>

        <h1>material-ui</h1>
        <h2>example project</h2>

        <RaisedButton label="Super Secret Password6" primary={true} onTouchTap={this._handleTouchTap} />

      </div>
    );
  }

  _handleTouchTap() {
    this.refs.superSecretPasswordDialog.show();
  }

}

export default Main;

