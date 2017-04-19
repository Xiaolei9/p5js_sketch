var mouseX = (150, 450);

var speed = 3;

function setup() {
  createCanvas(500, 600);
}

function draw() {
  background(255, 204, 0);
  
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
  
  noStroke();
  fill(0);
  
  if(mouseX > 450){
    fill(255, 204, 0);
    speed = -3
  }
  
  if(mouseX <= 50){
    fill(255,204,0);
    speed = 3
  }
  
  ellipse(mouseX, 150, 20, 20);
  ellipse(mouseX, 230, 20, 20);
  ellipse(mouseX, 310, 20, 20);
  ellipse(mouseX, 390, 20, 20);
  ellipse(mouseX, 470, 20, 20);

  mouseX = mouseX + speed
}