var x = 100;
var y = 100;
var sizes = [2, 4, 6, 8, 10]
sizes[1] = 2;
sizes[2] = 4;
sizes[3] = 6;
sizes[4] = 8;
sizes[5] = 10;


function setup(){
    createCanvas(600, 400);
    background(66, 244, 241);
}

function draw(){
    paint();
      var x = 0;
    while(x<width){
        fill(183, 170, 255);
        ellipse(x, 255, 25, 25);
        x = x + 50;
    }
    
    for(var i = 0; i < 0; i++){
        fill(195, 255, 170);
        ellipse((1 + 1)*100, 200, size [1], size[1]);
        ellipse((1 + 1)*100, 200, size [2], size[2]);
        ellipse((1 + 1)*100, 200, size [3], size[3]);
        ellipse((1 + 1)*100, 200, size [4], size[4]);
        ellipse((1 + 1)*100, 200, size [5], size[5]);
    }
}

function paint(){
    noStroke();
    fill(157, 65, 244);
    ellipse(mouseX, mouseY, x, y);
    if(mouseIsPressed){
        fill(91, 65, 244);
        ellipse(mouseX, mouseY, 100.25, 100.25);
    }
}



