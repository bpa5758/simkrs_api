const express = require("express");
const logger = require("morgan");
const compression = require("compression");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const mongoose = require("./config/database");
const router = require('./router/router');

const { response } = require("./config/response");
const { createServer } = require("http");
const { Server } = require("socket.io");
const { handleRequest } = require('./config/requestHandler');

require("dotenv").config();

const port = 421;

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
    cors: {
        origin: [
            "http://localhost:4200"
        ],
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept"],
    },
});

app.set("socketio", io);
app.set("secretKey", process.env.SECRET_KEY);

app.use(cors());
app.use(logger("short"));
app.use(compression());
app.use(bodyParser.json());

app.use("/uploads", express.static(process.cwd() + "/uploads"));
app.use(express.static(process.cwd() + "/simkrs_api/"));


mongoose.connection.on(
    "error",
    console.error.bind(console, "MongoDB connection error:")
);

app.get("/favicon.ico", function (req, res) {
    res.sendStatus(204);
});

router(app);



io.on("connection", (socket) => {
    io.emit("test event", "DATABASE CONNECTED!!");

    socket.on("addKeranjang", function (data) {
        io.emit("keranjang", data);
    });
});

httpServer.listen(port, () => {
    console.log(`simaya api listening on port ${port}`);
});