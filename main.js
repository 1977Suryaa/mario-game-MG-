noseX = 0;
noseY = 0;
function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump = loadSound("jump.wav");
	mario_coin = loadSound("coin.wav");
	mario_kick = loadSound("kick.wav");
	mario_die = loadSound("mariodie.wav");
	mario_gameover = loadSound("gameover.wav");
	setSprites();
	MarioAnimation();
}

function setup() {
	canvas = createCanvas(1240,336);
	webcam=createCapture(VIDEO)
	webcam.size(800,400)
	canvas.parent("canvas")
	webcam.parent("game_screen")
	instializeInSetup(mario);
	posenet=ml5.poseNet(webcam,modelLoaded)
    posenet.on("pose",gotpose)
}

function draw() {
	game()
}
function modelLoaded(){
	console.log("hello,I am ready to work")
  }
  function gotpose(results){
	if(results){
	  console.log(results)
	  noseX=results[0].pose.nose.x
	  noseY=results[0].pose.nose.y
	  console.log(noseX,noseY)
	}
}








