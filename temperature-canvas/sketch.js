//Using random sizes to generate a random
//square.
let squareSize;
let lineWidth = 2;

function setup() {
    createCanvas(400, 400);
}

function draw() {
    background(0); //set background on grey scale

    chain(0, 200, 0, 100);
    chain(5, 100, 0, 100);
    chain(10, 200, 200, 100);
    chain(15, 200, 0, 100);
    chain(20, 100, 0, 100);
    chain(25, 200, 200, 100);
}

function chain(yAxis, strokeR, strokeG, strokeB) {
    strokeWeight(lineWidth);  //border

    //set colors of chain border
    stroke(strokeR,strokeG,strokeB);
    noFill();
    for (let i = 0; i <= width ; i += 8) {
        circle(i, yAxis, 5);
    }



}