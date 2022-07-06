rightWristX = "";
rightWristY = "";
ScoreRightWrist = "";
function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(ping-pong);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(1240,336);
    video.hide();
}
function draw(){
	if(ScoreRightWrist>0.2){
    fill("red");
	stroke("red");
	circle(rightWristX, rightWristY, 30);
	}
	image(video, 0, 0, 1240, 336);
	poseNet = ml5.poseNet(video, modelLoaded);
	poseNet.on('pose', gotPoses);
	
}
function modelLoaded(){
	console.log("modelLoaded");
}
function gotPoses(){
	if(results.length>0){
	rightWristX = results[0].pose.rightWrist.x;
	rightWristY = results[0].pose.rightWrist.y;
	ScoreRightWrist = results[0].pose.keypoints[10].score;
	console.log(ScoreRightWrist);
	}
}