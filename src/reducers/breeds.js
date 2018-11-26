export default function breedsReducer(state = [], action) {
	switch (action.type) {
		case 'SET_BREEDS':
			return action.payload;
		default:
			return state;
	}
}
