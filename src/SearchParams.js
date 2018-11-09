import React, { Component } from 'react';
import { ANIMALS } from 'petfinder-client';
export default class SearchParams extends Component {
	state = {
		location: 'Seattle,WA',
		animals: [],
		breed: ''
	};
	// between state and render
	handleLocationChange = (event) => {
		this.setState({
			location: event.target.value
		});
	};
	// under handleLocationChange
	handleAnimalChange = (event) => {
		this.setState({
			animal: event.target.value
		});
	};
	render() {
		return (
			<div className="search-params">
				<label htmlFor="location">
					Location{' '}
					<input
						id="location"
						value={this.state.location}
						placeholder="Location"
						onChange={this.handleLocationChange}
					/>
				</label>
				<label htmlFor="animal">
					Animal
					<select
						id="animal"
						value={this.state.animal}
						onChange={this.handleAnimalChange}
						onBlur={this.handleAnimalChange}
					>
						<option />
						{ANIMALS.map((animal) => (
							<option key={animal} value={animal}>
								{animal}
							</option>
						))}
					</select>
				</label>
			</div>
		);
	}
}
