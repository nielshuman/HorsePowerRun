exports.handler = function(event, context, callback) {
    // your server-side functionality
    callback(null, {
    	statusCode: 200,
    	body: 'The test tested succelsfully test-like. \n\n' + `Randomness: ${Math.floor(Math.random() * 100)}`
    });
}