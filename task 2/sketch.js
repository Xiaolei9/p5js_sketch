function Ball(x,y){
  this.position = {x:y, y:x};
  this.speed = {x:random (-8,8), y:random (-8,8)};
  
  noStroke();
  fill(random(255,0), 255,204);
  
  this.draw = function(){
    this.position.x = this. position.x + this.speed.x + random(-7,7);
    this.position.y = this. position.y + this.speed.y + random(-7,7);
    triangle(this.position.x, this.position.y, random(3,3), 3, 5, 5);
  }
}

var balls=[]
function mouseDragged(){
  var ball= new Ball (mouseX, mouseY);
  balls.push(ball);
}


function draw(){
  
  for(var moka=0; moka<balls.length; moka ++){
    balls[moka].draw();
  }
}

function setup() {
 createCanvas(500,600) 
}
