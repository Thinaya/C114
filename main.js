noseX=0;
noseY=0;

function preload() {
    mustanche = loadImage('https://i.postimg.cc/d3XgHYn4/Mustanche-removebg-preview.png');
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX= results[0].pose.nose.x;
        noseY= results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}

function modelLoaded() {
    console.log('PostNet Is Intialized');
}

function draw() {
    image(video, 0, 0, 300, 300);
    image(mustanche, noseX-30, noseY-10, 60, 50);
    }

function take_snapshot(){
    save('myFilterImage.png')
}
