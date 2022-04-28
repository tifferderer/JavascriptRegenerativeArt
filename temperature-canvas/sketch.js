
//Highs of Seattle 2020
//https://weatherspark.com/h/d/145236/2020/1/11/Historical-Weather-on-Saturday-January-11-2020-at-Seattle-Tacoma-International-Airport-Washington-United-States
let tempsOfSeattle2020 = [53,50,62,48,48,51,55,48,39,44,46,] //Stopped at Jan 11 2020

function setup() {
    createCanvas(1470, 735);
    background(0); //set background on grey scale

    let spacing = 0;
    for (let i = 0; i < tempsOfSeattle.length; i++) {
        chain(spacing, colorScheme(tempsOfSeattle[i]));
        spacing+=4;
    }

}

function draw() {
}

function chain(xAxis, color) {
    strokeWeight(1.5);  //border

    //set colors of chain border
    stroke(color[0],color[1],color[2]);
    noFill();
    for (let i = 0; i <= width ; i += 7) {
        circle(xAxis, i, 5);
    }
}

function colorScheme(temp) {  //TODO: Choose colors & Scale ratio
    if(temp < 10) {
        return  [100,100,255];
    }
    if(temp < 20) {
        return  [100,100,220];
    }
    if(temp < 30) {
        return  [100,120,200];
    }
    if(temp < 40) {
        return  [140,120,190];
    }
    if(temp < 50) {
        return  [150,110,160];
    }
    if(temp < 60) {
        return  [170,100,120];
    }
    if(temp < 70) {
        return  [200,100,100];
    }
    return [0,0,0]
}