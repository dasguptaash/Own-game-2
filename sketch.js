var player;
var gameState = 0;
var playerCount;
var allPlayers;
var canvas;
var dice;
var disk,disk1,disk2;
var boardImg;
var dice1Img, dice2Img, dice3Img, dice4Img, dice5Img, dice6Img;
var form, game;

function preload(){
   boardImg = loadImage("Board.png");
   dice1Img = loadImage("Dice 1.png");
   dice2Img = loadImage("Dice2.png");
   dice3Img = loadImage("Dice3.png");
   dice4Img = loadImage("Dice4.png");
   dice5Img = loadImage("Dice5.png");
   dice6Img = loadImage("Dice6.png");
}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}

function draw() {

  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }  

  if(gameState === 2){
    game.end();
  }

  
}


