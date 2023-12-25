

module.exports = (io) => {
    io.on("connection", (socket) => {
        io.emit("test event", "DATABASE CONNECTED!!");

        socket.on("addKeranjang", function (data) {
            io.emit("keranjang", data);
        });
    });
}

