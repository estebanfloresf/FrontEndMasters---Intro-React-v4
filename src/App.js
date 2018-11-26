import React from 'react';
import { render } from 'react-dom';
import { Router } from '@reach/router';
import Loadable from 'react-loadable';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import store from './store';

const loading = () => <h1>loading split code...</h1>;

const LoadableDetails = Loadable({
	loader: () => import('./Details'),
	loading
});

const LoadableSearchParams = Loadable({
	loader: () => import('./SearchParams'),
	loading
});

const LoadableResults = Loadable({
	loader: () => import('./Results'),
	loading
});

class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Provider store={store}>
					<Router>
						<LoadableResults path="/" />
						<LoadableDetails path="/details/:id" />
						<LoadableSearchParams path="/search-params" />
					</Router>
				</Provider>
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));
