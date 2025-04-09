import { io } from "socket.io-client";

const socket = io("https://real-time-back-production.up.railway.app");

export default socket;
