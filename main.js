noseX=0;
noseY=0;
function preload() {
    clown_nose=loadImage('https://i.postimg.cc/7ZBcjDqp/clownnose.png');
}
function setup() {
    canvas=createCanvas(300,300);
    canvas.center();
    myvideo=createCapture(VIDEO);
    myvideo.size (300,300);
    myvideo.hide();
    poseNet=ml5.poseNet(myvideo,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function take_snapshot() {
    save('my_filter_image.png');
}
function modelLoaded() {
    console.log("Model Is Loaded")
}
function gotPoses(results) {
    if (results.length > 0) {
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x=" + noseX);
        console.log("nose y=" + noseY);
    }
}
function draw() {
    image(myvideo,0,0,300,300);
    image(clown_nose,noseX,noseY,30,30);
}