import React, { Component } from 'react';
import { ANIMALS } from 'petfinder-client';
import { connect } from 'react-redux';
import getBreeds from './actionCreators/getBreeds';
import changeBreed from './actionCreators/changeBreed';
import changeAnimal from './actionCreators/changeAnimal';
import changeLocation from './actionCreators/changeLocation';

class SearchBox extends Component {
	handleFormSubmit = (event) => {
		event.preventDefault();
		this.props.search();
	};
	render() {
		return (
			<div className="search-params">
				<form onSubmit={this.handleFormSubmit}>
					<label htmlFor="location">
						Location
						<input
							id="location"
							value={this.props.location}
							placeholder="Location"
							onChange={this.props.handleLocationChange}
						/>
					</label>
					<label htmlFor="animal">
						Animal
						<select
							id="animal"
							value={this.props.animal}
							onChange={this.props.handleAnimalChange}
							onBlur={this.props.handleAnimalChange}
						>
							<option />
							{ANIMALS.map((animal) => (
								<option key={animal} value={animal}>
									{animal}
								</option>
							))}
						</select>
					</label>
					<label htmlFor="breed">
						Breed
						<select
							disabled={!this.props.breeds.length}
							id="breed"
							value={this.props.breed}
							onChange={this.props.handleBreedChange}
							onBlur={this.props.handleBreedChange}
						>
							<option />
							{this.props.breeds.map((breed) => (
								<option key={breed} value={breed}>
									{breed}
								</option>
							))}
						</select>
					</label>
					<button onClick={this.props.search}>Submit</button>
				</form>
			</div>
		);
	}
}

const mapStateToProps = ({ breed, breeds, animal, location }) => ({
	animal,
	breed,
	breeds,
	location
});

const mapDispatchToProps = (dispatch) => ({
	handleAnimalChange(event) {
		dispatch(changeAnimal(event.target.value));
		dispatch(getBreeds());
	},
	handleBreedChange(event) {
		dispatch(changeBreed(event.target.value));
	},
	handleLocationChange(event) {
		dispatch(changeLocation(event.target.value));
	}
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox);
