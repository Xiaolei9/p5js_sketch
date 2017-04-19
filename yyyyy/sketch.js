 var spot = {
   x: 100,
   y: 50
 }
 
 var col = {
   r: 0,
   g: 0,
   b: 0
 }
 
 function setup() {
   createCanvas(500, 600);
   background(255, 204, 0)
 }
 function draw() {
   col.r = random(100, 255);
   col.g = 0;
   col.b = random(100, 190);
   spot.x = random(0, 500);
   spot.y = random(0, 600);
   noStroke();
   fill(col.r, col.g, col.b, 100);
   ellipse(spot.x, spot.y, 50, 50);
   
   fill(255,255,255);
  rect(100,50,350,40);
  rect(50,130,400,40);
  rect(50,210,400,40);
  rect(50,290,400,40);
  rect(50,370,400,40);
  rect(50,450,400,40);
  rect(50,530,350,40);
  
  
  
  quad(50,130,250,130,450,90,250,90);
  quad(50,210,250,210,450,170,250,170);
  quad(50,290,250,290,450,250,250,250);
  quad(50,370,250,370,450,330,250,330);
  quad(50,450,250,450,450,410,250,410);
  quad(50,530,250,530,450,490,250,490);
 }
   