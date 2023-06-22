import { emitirAdicionarDocumento } from "./socket-front-index.js";

const listaDocumentos = document.getElementById("lista-documentos");
const form = document.getElementById("form-adiciona-documento");
const inputDocumet = document.getElementById("input-documento");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    emitirAdicionarDocumento(inputDocumet.value);
    inputDocumet.value = "";
});

function inserirLinkDocumento(nome) {
    listaDocumentos.innerHTML += `
    <a href="documento.html?nome=${nome}" class="list-group-item list-group-item-action">
        ${nome}
    </a>
    `
};

export { inserirLinkDocumento };
