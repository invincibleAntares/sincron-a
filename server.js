import express from 'express';
import http from 'http';
import { Server } from 'socket.io';

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) => {
    console.log('Socket Connected', socket.id);
});

const PORT = 3000;
server.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
