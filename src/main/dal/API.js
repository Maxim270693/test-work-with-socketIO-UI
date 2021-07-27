import {io} from "socket.io-client";

export const socket = io("http://localhost:3009")

export const testAPI = {
    sendMessage(message) {
        socket?.emit("send-message", message)
    }
}