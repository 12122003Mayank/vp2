var doggy
var database 
var count
var stock 
function preload()
{
   doggyi = loadImage("images/dogImg.png");
   milk = loadImage("images/milk.png")
}

function setup() {
	createCanvas(800, 700);
  doggy= createSprite(400,300,10,10) 
  doggy.addImage(doggyi)
  doggy.scale=0.5;
  database=firebase.database()
  var doggyposition  = database.ref("food")
    doggyposition.on("value",read,showerror)
}


function draw() { 
  background ("green") 
 text(stock,50,10)
 if (keyDown(DOWN_ARROW))
 {
   stock-=1;
   updatefirebase();
 }
  drawSprites();
displaymilk(); 
}
function read (data)
{
  count=data.val()
  stock = count.count;
  console.log(count.count)
}
function showerror()
{

}
function updatefirebase ()
{
  database.ref("food").update
  ({
     count:stock
  })
}
function displaymilk ()
{
  var x = 100;
  for (var i=1;i<=stock;i++)
  {
    image (milk,x,600,10,10)
    x+=15;
  }

}
