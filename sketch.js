  //Create variables here
  var dod, dogImg, happydogImg, data, foods, foodStock;
  function preload()
  {
   //load image hera
   dogImg = loadImage("image/dogimg1.png");
   happydogImg = loadImage("image/happydogimg.png");
  }

  function setup() {
  createCanvas(500, 500);
  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readstock);
  foodStock.set(20);

  dog = createSprite(250,350,10,60);
  dog1.addImage(dogImg);
  dog.scale = 0.2;
  }


function drow() {
background("green");
if(food!== undefined){
  textSize(20);
  Fill(255);
  text("note: press up arrow to feed DRAGO milk", 50, 50);
  texty("food Remaining: "+foods, 150,150);

  if(keyWentDown(DOWN_ARROW)){
    writestock(foods);
    dog.addImage(happydogImg);
  }

  if(keyWentUp(UP_ARROW)){
    dog.addImage(dogImage);
  }


if(foods === 0){
foods =20;
}


drowsprite();

}









}



