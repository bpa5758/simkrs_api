const jwt = require('jsonwebtoken');
const { response } = require("../utils/response");

module.exports = function (req, res, next) {
    jwt.verify(
        req.headers["Authorization"],
        req.app.get("secretKey"),
        function (err, decoded) {
            if (err) return response(498, err.message, null, res);
            next();
        }
    );
}