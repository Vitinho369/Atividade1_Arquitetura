import { persistirDados } from "../persistencia/persistencia.js";

document.getElementById("validar").addEventListener("click", () => {
    let idade = parseFloat(document.getElementById("idade").value);
    let nome = document.getElementById("nome").value;

    if (idade > 18) {
        let usuario = { nome, idade };
        persistirDados(usuario);
        document.getElementById("resultado").innerHTML = "Usuário cadastrado com sucesso!";
        return
    }

    document.getElementById("resultado").innerHTML = "Usuário deve ser maior de idade!";
});
