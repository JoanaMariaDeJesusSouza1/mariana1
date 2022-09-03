var backgroundImg, background;
var arvore, arvoreImg;
var mangaImg, manga;
var botao, botaoImg;
var árvoreImg, arvore;

function preload(){
  backgroundImg = loadImage("background.jpg");
  mangaImg = loadImage("manga.png");
  botaoImg = loadImage("botao.png");
  arvoreImg = loadImage("arvore.png");
  pedraImg = loadImage("pedra.png")
}

function setup(){
  createCanvas(600,600);
 
  botao = createImg('botao.png');
  botao.position(20,30);
  botao.size(40,40);
 

  arvore=createSprite(160,340,20,20);
  arvore.scale =0.09;
  arvore.addImage("arvore",arvoreImg);

  pedra = createSprite(250,100,20,20);
  pedra.scale =0.09;
  pedra.addImage("pedra",pedraImg);

}

function draw(){
  background(0);

 
  
    
    drawSprites();
}
  
  
