results = "";
objects = "";

function preload() {
    video = createVideo('video.mp4');
}

function start() { 
    objectDetector = ml5.objectDetector('cocossd', modelLoaded); 
    document.getElementById("status").innerHTML = "Status : Detecting Objects"; 
}

function modelLoaded() {
     console.log("Model Loaded!"); 
     status = true; 
     video.loop(); 
     video.speed(1); 
     video.volume(0); 
}

function draw() {
    if(status =! " ") {
        for(i = 0; i < objects.length; i++) {
            document.getElementById("status").innerHTML = "Status : Objects Deteted";

            fill("FFFFFF");
            perent = floor(objects[i].confidence * 100);
            text(objects[i].label + " " + percent + "%", objects[i].x + 15, objects[i].y + 15);
            noFill();
            stroke("FFFFFF");
            rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
        }
    }
}

function gotResult(error, results){
    if(error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}

function setup() {
    canvas = createCanvas(380, 380);
    canvas.center();
    video.hide();
}
