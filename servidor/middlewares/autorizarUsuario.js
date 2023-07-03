import jwt from "jsonwebtoken";

function autorizarUsuario(socket, next) {
    const tokenJWT = socket.handshake.auth.token;
    
    try {
        jwt.verify(tokenJWT, process.env.SEGREDO_JWT);

        next();
    } catch (error) {
        next(error);
    }
}

export default autorizarUsuario;