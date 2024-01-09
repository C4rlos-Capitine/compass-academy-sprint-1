<h1>Este é o sistema de verificação de PIN.</h1>
<h2>1. Como funciona</h2>
   Ao abrir o navegador é exibido um formuário com um campo, no qual o utilizador deve informar um pin com 4 digitos.
   Enquanto escreve, uma mensagem é exibida para informar se já preencheu os requsitos para a avalição ou não, se tiver os 4 digitos no campo, o utilizador pode clicar no botão de verificação.
   Tendo clicado o botão de verificação, uma mensagem será mostrada na tela a vermelho ou verde caso erre ou acerte, o conteúdo da mensagem no erro diz ao utilizador se o numero informado é maior ou menor que o que foi gerado automaticamente.
   
<h2>3. Detalhes de como foi desenvolvida</h2>
   Com recurso a IDE Visual Studio Code gerei códigos nas linguagens HTML, CSS e javascript, onde o javascript foi a linguagem com maior peso.
  <h3> 2.1. HTML</h3>
   Com o HTML criei uma página simples obedecendo a estrutura básica do HTML5, com uma div como card que contém todos elementos utéis ao utilizador.
  <h3> 2.2. Javascript</h3>
   o codigo javascrip está em um ficheiro com nome funcoes na pasta js, neste ficheiro existem as funções (gerar_codigo, verificar, verificar_digitos)
   a function verificar() compara o pin gerado e o pin informado caso seja igual uma mensagem a verde é exibida informando que está certo e um novo pin será gerado.
   2.3. CSS
   boa parte do css é do ficheiro tailwind.min.css (da biblioteca com mesmo nome), e o código gerado pelo desenvolvedor está no ficheiro style.css, os dois ficheiros encontram-se na pasta CSS.
   
<h1>4. Dicas</h1>
O número gerado pode ser visto no console.

<h1>5. dificuldades</h1>
   tive dificuldades para actualizar o código fonte já no github, consegui actualizar localmente, mas não pude refletir as alterações no github.
