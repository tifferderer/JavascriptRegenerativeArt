function setup() {
    createCanvas(1459, 735);
    background(0); //set background on grey scale

    let spacing = 0;
    let data = readData(denver2019);        //SET JSON DATA FILE HERE

    for (let i = 0; i < data.length; i++) {
        chain(spacing, colorScheme(data[i], Math.min(...data), Math.max(...data)));
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

/**
 * Function creates a color for the chain based on the temperatures
 * @param temp Day temperature
 * @param low   Lowest temp of the year
 * @param high Highest temp of the year
 * @returns {number[]} RGB value
 */
function colorScheme(temp, low, high) {
    const scale = (high - low) / 10;
    if(temp < (low + scale)) {
        return  [87, 117, 144];
    }
    if(temp < (low + scale *2)) {
        return  [39, 125,161];
    }
    if(temp < (low + scale *3)) {
        return  [77, 144, 142];
    }
    if(temp < (low + scale *4)) {
        return  [67, 170, 139];
    }
    if(temp < (low + scale *5)) {
        return  [144, 190, 109];
    }
    if(temp < (low + scale *6)) {
        return  [249, 244, 113];
    }
    if(temp < (low + scale *7)) {
        return  [248, 164, 30];
    }
    if(temp < (low + scale *8)) {
        return  [243, 114, 44];
    }
    if(temp < (low + scale *9)) {
        return  [249, 132, 74];
    }
    return [255,65,68]
}

function readData(postmanData) {
    let tempsOfYear = [];
    for (let i = 0; i < 365; i++) {
        let temp =postmanData[i].value;
        temp = temp/10*1.8+32;
        tempsOfYear[i] = temp;
    }
    return (tempsOfYear);
}