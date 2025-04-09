import { io } from "socket.io-client";

const socket = io("http://localhost:3000"); // Cambiar si deployás

export default socket;
