// Mensagens que serão exibidas em sequência
const mensagens = [
  "Oiiiii gatonaaa , que bom que voce clicouuu 💕",
  "fiz isso pra te lembrar o tanto que voçê é PERFEITAAA💖",
  "E nao foi só pra isso nãoooooo... 💫",
  "foi tbm pra te lembrar que voçê é uma pessoa MARAVILHOSA E INCRIVEEEEEl💖💖",
  "Não esqueca o taaantãoooo que vc é especiallll...💖💖"
 
];

// Função para mostrar mensagem e próximo botão
function mostrarMensagem(index) {
  const msg = document.getElementById("mensagem");
  const botoes = document.getElementById("botoes");

  // Mostra a mensagem
  msg.textContent = mensagens[index];

  // Remove o botão atual
  botoes.innerHTML = "";

  // Se ainda há mais mensagens, cria o próximo botão
  if (index + 1 < mensagens.length) {
    const botao = document.createElement("button");
    botao.textContent = "Próximo 💖";
    botao.onclick = () => mostrarMensagem(index + 1);
    botoes.appendChild(botao);
  } else {
    const fim = document.createElement("p");
    fim.textContent = "✨ Obrigado por clicar até o final gatinhaaaa ✨";
    botoes.appendChild(fim);
  }
}

// Função para gerar corações flutuantes no fundo
function criarCoracoes() {
  const coracao = document.createElement("div");
  coracao.classList.add("heart");
  coracao.textContent = "💖";
  coracao.style.left = Math.random() * 100 + "vw";
  coracao.style.animationDuration = Math.random() * 3 + 4 + "s";
  document.body.appendChild(coracao);

  setTimeout(() => {
    coracao.remove();
  }, 6000);
}

// Corações surgem de tempos em tempos
setInterval(criarCoracoes, 400);
