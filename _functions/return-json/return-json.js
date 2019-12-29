exports.handler = async (event, context) => {
	if (event.httpMethod != 'GET') {
		return {
			statusCode: 405,
			body: 'Method not allowed'
		};
	}

	return {
		statusCode: 200,
		body: {text: 'You got the get via GET!'}
	};
}