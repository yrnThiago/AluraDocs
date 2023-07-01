import { scryptSync, timingSafeEqual } from "crypto";

function autenticarUsuario(senhaDigitada, usuario) {
    const hashTest = scryptSync(senhaDigitada, usuario.salSenha, 64);

    const hashReal = Buffer.from(usuario.hashSenha, "hex");
    const autenticado = timingSafeEqual(hashTest, hashReal);

    return autenticado;
}

export default autenticarUsuario;