//Using random sizes to generate a random
//square.
let squareSize;
let lineWidth = 4;

function setup() {
    createCanvas(400, 300);

    //set a random square size and border thickness
    squareSize = random(50, 150);
    lineWidth = random(2, 10);
}

function draw() {
    background(150); //set background on grey scale

    rectMode(CENTER); //set the square to be in the center of the canvas
    strokeWeight(lineWidth);  //border

    //set colors of border/inside square
    stroke(0,0,255); //blue
    fill(0, 255, 0);  //green

    square(200, 150, squareSize); //magic numbers correspond to x-y- axis
}