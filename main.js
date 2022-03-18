nosex=0
nosey=0
leftwristx=0
rightwristx=0
difference=0

function setup(){
    canvas=createCanvas(550, 500);
    canvas.position(560,150);
    video=createCapture(VIDEO);
    video.size(550, 500);
    posenet=ml5.poseNet(video, modelloaded);
    posenet.on('pose', gotposes);
}

function draw(){
    background('#969A91');
    fill("blue");
    stroke("orange");
    square(nosex, nosey, difference);
    document.getElementById("square_sides").innerHTML="Width and Height of a Square will be = "+difference+"px"; 
}

function modelloaded(){
    console.log("Pose Net has been Initialized");
}

function gotposes(results){
    if(results.length>0){
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
    }
}