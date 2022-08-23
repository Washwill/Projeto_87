// Create canvas variable
var canvas = new fabric.Canvas("myCanvas");

blockY=1;
blockX=1;

blockImageWidth = 350;
blockImageHeight = 430;

var blockImageObject= "";

function newImage(getImage)
{
   // para enviar imagens
   fabric.Image.fromURL(getImage,function(Img){
       blockImageObject = Img;

       blockImageObject.scaleToWidth(blockImageWidth);
       blockImageObject.scaleToHeight(blockImageHeight);
       blockImageObject.set({
           top:blockY,
           left:blockX
       });
        canvas.add(blockImageObject);   
    });
}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

   if(keyPressed == '84') // adicione os códigos adequados às teclas
   {
       // enviar ranger escarlate
       newImage("PowerRanger5");
       console.log("e")
   }
   if(keyPressed == '86')
   {
       blockX = 200;
       // enviar ranger verde
       newImage("PowerRanger3");
       console.log("v");
   }

   if(keyPressed == '65')
   {
       blockX =350;
       // enviar ranger amarelo
       newImage("PowerRanger6");
       console.log("a")
   }
   if(keyPressed == '82')
   {
       blockX = 600;
       // enviar ranger rosa
       newImage("PowerRanger4")
       console.log("r");
   }
   if(keyPressed == '73')
   {
       blockX = 700;
   // enviar ranger índigo
   newImage("PowerRanger2");
   console.log("i");
   }

}