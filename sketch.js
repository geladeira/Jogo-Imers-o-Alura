


  function setup() {
    createCanvas(windowWidth, windowHeight);
    frameRate(40);
    telaInicial = new TelaInicial();
    jogo = new Jogo();
    jogo.setup();
    botaoGerenciador = new BotaoGerenciador('Iniciar', width/2, height/2);
    cenas = {
    jogo,
    telaInicial
  }
  }

  function keyPressed() {
    jogo.keyPressed(key)
    
  }


  function draw() {
    cenas[cenaAtual].draw();
    
  }



