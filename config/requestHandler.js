const { response } = require('./response');

const handleRequest = (req, res) => {
    try {
        return response(998, "Content-Type header not defined as it should be.", null, res);
    } catch (error) {
        return response(500, "Content-Type header not defined as it should be.", error, res);
    }
}

module.exports = {
    handleRequest
}