const express = require('express');
const { createServer } = require('http'); // Fixed import
const socketio = require('socket.io'); // Fixed typo

const app = express();
const httpServer = createServer(app);


const io = new socketio.Server(httpServer, {
    cors: {
        origin: true, // Allow connections from this origin
        methods: ["GET", "POST"],
        credentials: true,
    },
});

const PORT = 8181; // Use a variable for clarity
httpServer.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
