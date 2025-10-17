function mostrarTela(tela) {
    document.querySelectorAll('.tela').forEach(sec => sec.classList.remove('ativa'));
    document.getElementById(tela).classList.add('ativa');
}

function fazerLogin() {
    const user = document.getElementById('usuario').value;
    const pass = document.getElementById('senha').value;
    const erro = document.getElementById('erroLogin');

    if (user === "Tauane" && pass === "0000") {
        mostrarTela('jogos');
        window.location.href='teste.html';
    } else {

        erro.textContent = "Usuário ou senha inválidos!";
    }
}
