import app from './app';
import { Server as webSocketServer } from 'socket.io';
import http from 'http';
import sockets from './sockets';
import { connectDB } from './db';

connectDB();

const server = http.createServer(app);

const io = new webSocketServer(server, {
  cors: {
    origin: 'http://localhost:3000',
    methods: ["GET", "POST"],
    credentials: true
  }
});

sockets(io);

const httpServer = server.listen(3001);

console.log('Listening on port 3001');
