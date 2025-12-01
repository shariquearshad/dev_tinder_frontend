import { io } from "socket.io-client";
import { baseUrl } from "./constants";

export const createSocketConnection=()=>{
    if(window.location==="localhost")
    return io(baseUrl);
    return io("/",{path:"/api/socket.io"})
}