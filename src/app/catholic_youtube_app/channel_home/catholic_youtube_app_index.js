import 'babel-core/polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';

import createBrowserHistory from 'history/lib/createBrowserHistory';
import { Router, Route, IndexRoute } from 'react-router';



import AppComponent from './components/AppComponent';

import ChannelHomeContainer from './channel_home/containers/ChannelHomeContainer';
import ChannelPickerContainer from './channel_picker/containers/ChannelPickerContainer';

import IndexComponent from './components/IndexComponent';
import HelloComponent from './components/HelloComponent';
import HelloComponent2 from './components/HelloComponent2';

import configureStore from './store/configureStore';
const store = configureStore();

const browserHistory = new createBrowserHistory();


store.subscribe(function() {
		console.log("\n\ninside store.subscribe. state: ", JSON.stringify(store.getState()));
});

ReactDom.render(
	<Provider store={store}>
		<Router history={browserHistory}>
			<Route path="/" component={AppComponent}>
				<IndexRoute component={IndexComponent} />
				<Route path="channelHome" component={ChannelHomeContainer} />
				<Route path="channelPicker" component={ChannelPickerContainer} />
				<Route path="helloComponent" component={HelloComponent} />
				<Route path="helloComponent2" component={HelloComponent2} />
				
			</Route>
		</Router>
	</Provider>,
  document.getElementById('app')
);