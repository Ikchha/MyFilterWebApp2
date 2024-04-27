nose_X = 0;
nose_Y = 0;
function preload(){
  lips = loadImage("https://i.postimg.cc/3x3QzSGq/m.png");
}
function setup(){
  canvas= createCanvas(300, 300);
  canvas.center();
  video=createCapture(VIDEO);
  video.size(300, 300);
  video.hide();

  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
}

function modelLoaded() {
  console.log('PoseNet Is Initiated');
  
}

function draw(){
  image(video, 0, 0, 300, 300);
  image(lips, nose_X, nose_Y, 50, 20);
}
function take_snapshot(){
    save(myFilterImage.png);

}
function gotPoses(results)
{
  if(results.length > 0)
  {
    console.log(results);
    nose_X = results[0].pose.nose.x-25;
    nose_Y = results[0].pose.nose.y+15;
 }
}