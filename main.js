function setup() {
	canvas = createCanvas(1240,336);
	instializeInSetup(ping-pong);
	canvas.parent('canvas');
	video = createCapture(VIDEO);
	video.size(1240,336);
    video.hide();
}
function draw(){
	image(video, 0, 0, 1240, 336);
	poseNet = ml5.poseNet(video, modelLoaded);
	
}
function modelLoaded(){
	console.log("modelLoaded");
}