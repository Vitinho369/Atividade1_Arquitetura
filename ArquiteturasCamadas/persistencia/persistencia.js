export const persistirDados = (usuario) => {
    let dados = JSON.parse(localStorage.getItem("dados")) || [];

    dados.push(usuario);
    localStorage.setItem("dados", JSON.stringify(dados));
}
