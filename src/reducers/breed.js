export default function breedReducer(state = '', action) {
	switch (action.type) {
		case 'SET_ANIMAL':
			return '';
		case 'SET_BREED':
			return action.payload;
		default:
			return state;
	}
}
