
import React from "react";
import ReactDOM from "react-dom";
import injectTapEventPlugin from "react-tap-event-plugin";
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import configureStore from './store/configureStore';

import App from './App'; // Our custom react component

  //Needed for React Developer Tools
  window.React = React;

  //Needed for onTouchTap
  //Can go away when react 1.0 release
  //Check this repo:
  //https://github.com/zilverline/react-tap-event-plugin
  injectTapEventPlugin();
  
  const store = configureStore();

  // Render the main app react component into the app div.
  // For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
  //ReactDOM.render(<App />, document.getElementById('app'));
  
  ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("app")
);


