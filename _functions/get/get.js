exports.handler = async (event, context) => {
	if (event.httpMethod != 'GET') {
		return {
			statusCode: 405,
			body: 'Method not allowed'
		};
	}

	return {
		statusCode: 200,
		body: 'You got the get via GET!'
	};
}