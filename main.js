function preload(){

}
function setup(){
canvas= createCanvas(640, 480)
canvas.position(110, 250)
video = createCapture(VIDEO);
video.hide();

}

function draw(){
image(video, 0, 0, 640, 480)
circle(40, 50, 100)
circle(40, 450, 100)
circle(600, 55, 100)
circle(600, 450, 100)
}

function takeSnapshot(){
    save('snapshot.png')
}

