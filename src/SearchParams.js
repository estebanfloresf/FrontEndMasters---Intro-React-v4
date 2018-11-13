import React from 'react';
import SearchBox from './SearchBox';
import { navigate } from '@reach/router';

class Search extends React.Component {
	handleSearchSubmit() {
		navigate('/');
	}
	render() {
		return (
			<div className="search-route">
				<SearchBox search={this.handleSearchSubmit} />
			</div>
		);
	}
}

export default Search;
