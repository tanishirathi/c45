var frect,mrect 
var jungle;
var mowgli;

function preload (){
   jungle = loadImage ("Forest3.jpg")
   mowgli = loadAnimation ("walking mowgli.png","clipmowgli212.gif")

   }

function setup() { 
createCanvas(displayWidth-50,displayHeight-150);
jungle1 = createSprite(displayWidth/2,displayHeight/2-100,10,10)
jungle1.addImage(jungle)
jungle1.scale = 0.3;

mowgli1 = createSprite (50,displayHeight-300,10,50) 
mowgli1.shapeColor = "yellow";
mowgli1.addAnimation("running",mowgli);
 }

   
function draw() {
background(0);
jungle1.velocityX=-2
if(jungle1.x<600){
jungle1.x=displayWidth/2;
}
drawSprites() }