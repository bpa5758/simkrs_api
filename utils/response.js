const response = (code, message, data, res) => {
    res.status(200).send({ code, message, data });
};


module.exports = { response };