function setup() {

  createCanvas(windowWidth, windowHeight);

  //Intoduction Page
    background(255,204,0);
    
  //create Button object 1 (Toronto)
  button1 = createButton('Toronto');
  button1.position(20, 30);
  //Load Data when Button 1 is Pressed
  button1.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22toronto%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });

  //create Button object 2 (Shang Hai)
  button2 = createButton('Shang Hai');
  button2.position(20, 60);
  //Load Data when Button 2 is Pressed
  button2.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22shanghai%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 3 (London)
  button3 = createButton('London');
  button3.position(20, 90);
  //Load Data when Button 3 is Pressed
  button3.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22london%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 4 (Rome)
  button4 = createButton('Rome');
  button4.position(20, 120);
  //Load Data when Button 4 is Pressed
  button4.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22rome%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
  //create Button object 5 (Paris)
  button5 = createButton('Paris');
  button5.position(20, 150);
  //Load Data when Button 5 is Pressed
  button5.mousePressed(function() {
  loadJSON("https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22paris%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys",
  weatherLoaded);
  });
  
}


function weatherLoaded(data) {
  var temp = data.query.results.channel.item.condition.temp;
  var windSpeed = data.query.results.channel.wind.speed;
  var windDirection = data.query.results.channel.wind.direction;
  
  //forcast data
  var tempD2H = data.query.results.channel.item.forecast[0].high;
  var tempD2L = data.query.results.channel.item.forecast[0].low;

// HOW to get avarage of tempD2H+tempD2L?!?!
//var tempforcast1 = ((tempD2H+tempD2L)/2);
 



//print data to the console
//print(temp);
//print(windSpeed);
print(tempD2H);
print(tempD2L);
//print(tempforcast1);


  background(255,204,0);

  //add data info in bottom left corner of the screen
  //for more information about using text in a P5js sketch visit:
  //http://creative-coding.decontextualize.com/text-and-type/
  
  textSize(19);
  textFont("Skia");
  textAlign(RIGHT);
     
    fill(255)
    text(windSpeed, 30, windowHeight - 50);
    fill(255,0,0);
    text(temp, 30, windowHeight - 30);
    fill(0,0,255);
    text(windDirection, 30, windowHeight - 10);
    // text(windangle, 30 windowHeight);

  //create ellipse and set width and height of the ellipse to windSpeed data
  fill(50,55,100);
  noStroke();
  ellipse(windowWidth / 2, windowHeight / 2, windSpeed * 10, windSpeed * 10);
  
   //create ellipse and set width and height of the ellipse to temp data
  noFill();
  strokeWeight(4);
  stroke(50,55,100);
  ellipse(windowWidth / 4, windowHeight / 2, temp * 2, temp * 2);
  
  
  //create rect and set rotation of rect to windDirection
  translate(windowWidth / 2, windowHeight / 2);
  fill(0,10,45,80);
  noStroke();
  angleMode(DEGREES); // Change the mode to DEGREES
  rotate(windDirection);
  rect(0, 0, 150, 5);
  



}

