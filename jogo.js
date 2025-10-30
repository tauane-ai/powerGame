function mostrarTela(tela) {
    document.querySelectorAll('.tela').forEach(s => s.classList.remove('ativa'));
    document.getElementById(tela).classList.add('ativa');
}

// Cadastro
function fazerCadastro() {
    let nome = document.getElementById('nomeCadastro').value;
    let email = document.getElementById('emailCadastro').value;
    let senha = document.getElementById('senhaCadastro').value;
    let confSenha = document.getElementById('confirmSenhaCadastro').value;
    let erro = document.getElementById('erroCadastro');

    if (senha !== confSenha) {
        erro.textContent = "As senhas não coincidem!";
        return;
    }

    localStorage.setItem("email", email);
    localStorage.setItem("senha", senha);
    mostrarTela('login');
}

// Login
function fazerLogin() {
    let email = document.getElementById('usuarioLogin').value;
    let senha = document.getElementById('senhaLogin').value;
    let erro = document.getElementById('erroLogin');

    if (email === "Tauane" &&
        senha === "0000") {
        mostrarTela('jogos');
    } else {
        erro.textContent = "Email ou senha incorretos!";
    }
}

let audioAtual = null;

// Abrir jogo com som e loading
function carregarJogo(url, audioId) {
    mostrarTela('loading');

    if (audioAtual) audioAtual.pause();

    audioAtual = document.getElementById(audioId);
    audioAtual.currentTime = 0;
    audioAtual.play();

    setTimeout(() => {
        document.getElementById("iframeJogo").src = url;
        mostrarTela("telaJogo");
    }, 2000);
}

function pararAudio() {
    if (audioAtual) audioAtual.pause();
}
