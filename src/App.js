import React from 'react';
import { render } from 'react-dom';
import Pet from './Pet';
import pf from 'pet/finder-client';

const petfinder = pf({
	key: process.env.API_KEY,
	secret: process.env.API_SECRET
});

class App extends React.Component {
	handletTitleCLick() {
		alert('Ýou clicked the title');
	}
	render() {
		return (
			<div>
				<h1 onClick={this.handletTitleCLick}>Adopt Me</h1>
				<Pet name={'LUN'} />
			</div>
		);
	}
}

render(<App />, document.getElementById('root'));
