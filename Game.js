class Game{
    constructor(){

    }

    getState(){
        console.log("game.getState");
        var gameStateRef  = database.ref('gameState');
        gameStateRef.on("value",function(data){
        gameState = data.val();
        console.log(data.val());
        })
        
      }

      update(state){
        database.ref('/').update({
          gameState: state
        });
      }

        async start(){
            console.log("inside start" + gameState);
            if(gameState === 0){
            console.log("I am in game.start");
            player = new Player();
            var playerCountRef = await database.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              playerCount = playerCountRef.val();
              player.getCount();
            }
            form = new Form();
            form.display();
            
          }
            disk1 = createSprite(displayWidth/2-10,displayHeight/2,20,20);
            disk1.shapeColor = "green";

            disk2 = createSprite(displayWidth/2,displayHeight/2,20,20);
            disk1.shapeColor = "red";
      }

      play(){

        form.hide();

        background(boardImg);

        Player.getPlayerInfo();
               
        if(allPlayers ==! undefined){
            
          image(boardImg,20,20,displayWidth-40,displayHeight-40);



          dice = createSprite(displayWidth/2-40,displayHeight/2,40,40);

          if(mousePressedOver(dice)){
          var rand = Math.round(random(1,6));
          switch(rand){
              case 1: dice.addImage(dice1Img);
              break;
              case 2: dice.addImage(dice2Img);
              break;
              case 3: dice.addImage(dice3Img);
              break;
              case 4: dice.addImage(dice4Img);
              break;
              case 5: dice.addImage(dice5Img);
              break;
              case 6: dice.addImage(dice6Img);
              break;
              default: break;
            }
        }
      }
        drawSprites();
      }
}