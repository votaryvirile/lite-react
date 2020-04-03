import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';

import GlobalStyle from './base-styles.js';

const customHistory = createBrowserHistory();

ReactDOM.render(
	<Router history={customHistory}>
		<App />
	</Router>
	, document.getElementById("app")
);
