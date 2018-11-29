import React from 'react';
// import { render } from 'react-dom';
import { Router } from '@reach/router';
// import Loadable from 'react-loadable';
import NavBar from './NavBar';
import { Provider } from 'react-redux';
import Details from './Details';
import SearchParams from './SearchParams';
import Results from './Results';
import store from './store';

// const loading = () => <h1>loading split code...</h1>;

// const LoadableDetails = Loadable({
// 	loader: () => import('./Details'),
// 	loading
// });

// const LoadableSearchParams = Loadable({
// 	loader: () => import('./SearchParams'),
// 	loading
// });

// const LoadableResults = Loadable({
// 	loader: () => import('./Results'),
// 	loading
// });

class App extends React.Component {
	render() {
		return (
			<div>
				<NavBar />
				<Provider store={store}>
					<Router>
						<Results path="/" />
						<Details path="/details/:id" />
						<SearchParams path="/search-params" />
					</Router>
				</Provider>
			</div>
		);
	}
}
// replace render at bottom
export default App;
