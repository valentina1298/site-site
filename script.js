document.addEventListener('DOMContentLoaded', function() {
  // Selecionando elementos para acessibilidade
  const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
  const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
  const aumentaFonteBotao = document.getElementById('aumentar-fonte');
  const diminuiFonteBotao = document.getElementById('diminuir-fonte');
  const alternaContraste = document.getElementById('alterna-contraste');
  
  // Variáveis para controle do tamanho da fonte
  let tamanhoAtualFonte = 1;
  
  // Toggle para exibir/ocultar as opções de acessibilidade
  if (botaoDeAcessibilidade) {
    botaoDeAcessibilidade.addEventListener('click', function() {
      botaoDeAcessibilidade.classList.toggle('rotacao-botao');  // Rotação do ícone do botão
      opcoesDeAcessibilidade.classList.toggle('apresenta-lista'); // Exibe as opções de acessibilidade

      // Alternando o atributo 'aria-expanded' para acessibilidade
      const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
      botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });
  }

  // Aumentar fonte
  if (aumentaFonteBotao) {
    aumentaFonteBotao.addEventListener('click', function() {
      tamanhoAtualFonte += 0.1; // Aumenta o tamanho da fonte
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
  }

  // Diminuir fonte
  if (diminuiFonteBotao) {
    diminuiFonteBotao.addEventListener('click', function() {
      tamanhoAtualFonte -= 0.1; // Diminui o tamanho da fonte
      document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
    });
  }

  // Alternar modo de contraste alto
  if (alternaContraste) {
    alternaContraste.addEventListener('click', function() {
      document.body.classList.toggle('alto-contraste'); // Alterna a classe de alto contraste
    });
  }

  // Adicionando animações com ScrollReveal
  ScrollReveal().reveal('#inicio', { delay: 500 });
  ScrollReveal().reveal('#tropicalia', { delay: 500 });
  ScrollReveal().reveal('#galeria', { delay: 500 });
  ScrollReveal().reveal('#contato', { delay: 500 });
});
