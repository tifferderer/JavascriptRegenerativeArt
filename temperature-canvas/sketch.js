
//Highs of Seattle 2020
//https://www.wunderground.com/calendar/us/wa/seatac/KSEA/date/2020-1
//https://weatherspark.com/h/d/145236/2020/1/11/Historical-Weather-on-Saturday-January-11-2020-at-Seattle-Tacoma-International-Airport-Washington-United-States
let tempsOfSeattle2020 = [53,50,62,48,48,51,54,45,39,44,46,44,37,35,46,45,42,51,53,53,52,50,55,52,52,53,51,53,50,51,58, //jan
                          53,44,41,41,50,51,52,48,48,48,48,48,47,48,46,47,47,47,55,58,54,47,48,49,50,53,57,49,48,       //feb
                          47,48,52,51,55,43,44,48,50,50,51,51,42,43,46,55,53,55,61,61,55,57,49,49,49,48,50,53,55,50,50, //Mar
                          51,50,49,54,55,58,55,62,68,63,59,59,64,63,65,70,69,57,64,66,57,54,59,59,61,61,61,62,69,58,
                          65,58,56,65,70,62,67,79,86,87,72,64,64,66,67,63,67,67,65,58,59,61,64,69,63,65,74,81,79,60,62,
                          67,65,65,69,66,61,63,64,62,71,70,59,62,66,62,68,72,77,79,72,69,80,83,78,80,80,64,70,71,66,
                          65,66,65,71,73,71,70,73,71,73,69,72,75,81,83,76,72,79,84,87,80,72,68,70,78,88,93,81,85,90,83,
                          75,82,81,82,80,73,75,68,77,81,76,69,74,81,88,97,87,79,82,79,70,75,77,74,77,77,80,78,70,73,69,
                          81,80,86,82,74,81,84,81,87,91,73,60,63,69,75,70,73,66,71,70,69,71,63,64,63,64,69,75,79,75,
                          72,72,58,59,67,72,60,65,67,61,58,61,63,63,60,62,58,63,59,58,52,53,50,49,49,52,57,55,59,59,57,
                          59,65,58,66,60,50,43,48,43,46,46,49,51,48,52,50,61,48,47,50,53,45,47,52,48,50,50,47,44,51,
                          48,59,49,54,57,54,52,51,49,44,46,44,45,50,48,50,50,51,53,54,58,45,43,44,49,50,47,47,41,50,49
                            ] //low: 35 high:97
function setup() {
    createCanvas(1462, 735);
    background(0); //set background on grey scale

    let spacing = 0;
    for (let i = 0; i < tempsOfSeattle2020.length; i++) {
        chain(spacing, colorScheme(tempsOfSeattle2020[i]));
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
        //fill(color);
        circle(xAxis, i, 5);
    }
}

function colorScheme(temp) {  //TODO: Choose colors & Scale ratio
    if(temp < (35 + 6)) {
        return  [87, 117, 144];
    }
    if(temp < 47) {
        return  [39, 125,161];
    }
    if(temp < 53) {
        return  [77, 144, 142];
    }
    if(temp < 60) {
        return  [67, 170, 139];
    }
    if(temp < 66) {
        return  [144, 190, 109];
    }
    if(temp < 72) {
        return  [249, 244, 113];
    }
    if(temp < 78) {
        return  [248, 164, 30];
    }
    if(temp < 84) {
        return  [243, 114, 44];
    }
    if(temp < 90) {
        return  [249, 132, 74];
    }
    return [255,65,68]
}