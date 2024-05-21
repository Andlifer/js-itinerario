//variáveis da bolinha
let xBolinha = 200; 
let yBolinha = 200; 
let diametro = 15; 
let raio = diametro / 2;

//velocidade da bolinha
let velXBolinha = 6; 
let velYBolinha = 6;

//variáveis da raquete
let xRaquete = 5;
let yRaquete = 150;
let compRaquete = 10;
let altuRaquete = 90;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0); 
  mostraBolinha(); 
  movimentaBolinha();
  verificacolisãoborda();
  mostraRaquete();
  moveRacket();
}

function mostraBolinha(){
  circle(xBolinha, yBolinha, diametro)
  
}

function movimentaBolinha(){
  xBolinha += velXBolinha;
  yBolinha += velYBolinha;
}

function verificacolisãoborda(){
  if (xBolinha + raio > width ||
      xBolinha - raio < 0){
      velXBolinha *= -1;
  }
  if (yBolinha + raio > height ||
      yBolinha - raio < 0){
    velYBolinha *= -1
  }
}

function mostraRaquete (){
  rect(xRaquete, yRaquete, compRaquete, altuRaquete);
}

function moveRacket(){
  if (keyIsDown(UP_ARROW)){
    yRaquete -= 10;
  }
  if (keyIsDown(DOWN_ARROW)){
    yRaquete += 10;
  }
}

