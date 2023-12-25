const { handleRequest } = require('./../config/requestHandler');

const router = app => {

    app.get("*", async (req, res) => {
        handleRequest(req, res);
    });

    app.post("*", async (req, res) => {
        handleRequest(req, res);
    });

    app.put("*", async (req, res) => {
        handleRequest(req, res);
    });

    app.delete("*", async (req, res) => {
        handleRequest(req, res);
    });

}


module.exports = router;