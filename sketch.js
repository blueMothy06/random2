let occupation = ['young monarch who was thrown into the role too early','person pretending to be a cook','offical sword-holder','actor who plays the tree','very tired intern who is not getting paid for their efforts','Pixar lamp mascot'];
let action = ['ran away from your responsibilities','tried to fake their death ten years ago, but failed','piloted a T-Rex mecha','saved the world five times, despite trying to destroy it','organized protests to put actual bow ties on penguins','taught the queen how to do the Floss','tried to propose at a friend\'s wedding','managed to find the answer to life while trying to flee for their life'];
let place = ['back in my grandma\'s attic','in Shangri-la','in Narnia', 'in Camelot','at Hogwarts', 'in Gotham City','in Emerald City','in Neverland','on my roof ten days ago','in my dreams last night'];

let ghosts = [];

let or;
let ar;
let pr;
let gr;

let words;

let com1;
let com2;
let com3;

function preload() {
  com1 = loadImage('comment1.png');
  com2 = loadImage('comment2.png');
  com3 = loadImage('comment3.png');
  ghosts[0] = loadImage('ghost1.png');
  ghosts[1] = loadImage('ghost2.png');
  ghosts[2] = loadImage('ghost3.png');
  ghosts[3] = loadImage('ghost4.png');
}

function setup() {
  createCanvas(400, 400);
  frameRate(60);
  background(0);
  image(com1, width*-0.1, width*0.1);
  image(com2, width*0.5, width*0.5);
  image(com3, width*0.7, 0);
  mainText();

}

function draw() {
}

function mousePressed() {
  or = int(random(occupation.length));
  ar = int(random(action.length));
  pr = int(random(place.length));
  gr = int(random(ghosts.length));
  //make several word variables
  wrds = 'Hey, you\'re that ' + occupation[or] + ' and the same person who ' + action[ar] + ' ' + place[pr] + '!';
  bodyText();
  image(ghosts[gr], width*0.5, width*0.5);
  console.log(wrds);
}

function mainText() {
  fill(255);
  textAlign(CENTER);
  //this is a lie, you can click anywhere
  text('Wait a second...', width*0.5, height*0.3);
}

function bodyText() {
  background(0);
  mainText();
  fill(255);
  textAlign(CENTER);
//  textSize(20);
  textWrap(WORD);
  text(wrds, width*0.25, height*0.35, width*0.5);
}