export default function changeLocation(location) {
	return { type: 'CHANGE_LOCATION', payload: location };
}

// HOW A TEST WOULD GO
// expect(changeLocation("Seattle,WA")).toEqual({type:"SET_LOCATION", payload: "Seattle, WA"}).toEaualSnapshot()
