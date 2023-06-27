//variáveis globais
var bola


//carregar imagens, sons...
function preload(){

}

//configuração inicial do jogo
// a função setup é executada apenas 1x
function setup() {
  createCanvas(400,400); //área visível do jogo
  bola = createSprite(200,200,20,20)
bola.shapeColor = 'red'
 

}

//animação
function draw() {
  background(200,200,200); 
  if(keyDown('s')){
  bola.velocityY=5
  }
  if(keyDown('w')){
    bola.velocityY-=5
    background('yellow')
  }
  if(keyDown('a')){
    bola.velocityX+=5
    background('red')
  }
  if(keyDown('d')){
    bola.velocityX-=5
    background('black')
  }
  drawSprites();
}