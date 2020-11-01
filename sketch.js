var dog,happydog,database;
var foodS,foodStock;

function preload()
{
loadimage = dog(200,200,100,100);

}

function setup() {
  createCanvas(500, 500);
  
  dog=createSprite(200,200,100,100);
  foodStock=database.ref("Food");
  FoodStock.on("value",redstock);
  
}


function draw() { 
  
  background(46,139,87)

  if(keywentdog(UP_ARROW)){
    writeStoke(foodS);
    dog.addImage(dogHappy);
  }

  drawSprites();
  

}

//function to read values from DB
function readStock(data){
  foodA=data.val();
} 

//function to write values in DB
function whiteStock(x){

  database.ref('/').update({
    food:x
  })
}



