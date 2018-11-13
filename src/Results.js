import React from 'react';
import SearchBox from './SearchBox';
import Pet from './Pet';
import pf from 'petfinder-client';
import { Consumer } from './SearchContext';

const petfinder = pf({
	key: process.env.API_KEY,
	secret: process.env.API_SECRET
});

class Results extends React.Component {
	state = {
		pets: []
	};

	componentDidMount() {
		this.search();
	}

	search = () => {
		petfinder.pet
			.find({
				output: 'full',
				location: this.props.searchParams.location,
				animal: this.props.searchParams.animal,
				breed: this.props.searchParams.breed
			})
			.then((data) => {
				let pets;
				if (data.petfinder.pets && data.petfinder.pets.pet) {
					if (Array.isArray(data.petfinder.pets.pet)) {
						pets = data.petfinder.pets.pet;
					} else {
						pets = [ data.petfinder.pets.pet ];
					}
				} else {
					pets = [];
				}

				this.setState({
					pets
				});
			});
	};

	handletTitleCLick() {
		alert('Ýou clicked the title');
	}
	render() {
		const { pets } = this.state;
		return (
			<div className="search">
				<SearchBox search={this.search} />

				{pets.map((pet) => {
					let breed;
					if (Array.isArray(pet.breeds.breed)) {
						breed = pet.breeds.breed.join(', ');
					} else {
						breed = pet.breeds.breed;
					}
					return (
						<Pet
							key={pet.id}
							animal={pet.animal}
							name={pet.name}
							breed={breed}
							media={pet.media}
							location={`${pet.contact.city}, ${pet.contact.state}`}
							id={pet.id}
						/>
					);
				})}
			</div>
		);
	}
}

// add consumer to export
export default function ResultsWithContext(props) {
	return <Consumer>{(context) => <Results {...props} searchParams={context} />}</Consumer>;
}
