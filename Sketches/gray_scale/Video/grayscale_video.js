
var video;


function setup() {
  
    var cnv = createCanvas(645, 500);
    cnv.position('190', '760');
    background(51);
    video = createVideo(['../Sketches/gray_scale/Video/video.mp4']);
    video.size(380, 380);
    video.position('840','860')
    
}

function draw() {
    
    background(255);
    video.loadPixels();
    const stepSize =  1;
    for (let y = 0; y < height; y += stepSize) {
        for (let x = 0; x < width; x += stepSize) {
        const i = y * width + x;
        const darkness = (255 - video.pixels[i * 4]) / 255;
        const radius = stepSize * darkness;
        let r = video.pixels[i*4];
        let g = video.pixels[(i*4)+1]
        let b = video.pixels[(i*4)+2];
        let luma = 0.299*r+0.587*g+0.114*b;
        video.pixels[(i*4)]= luma;      
        video.pixels[(i*4)+1]= luma;     
        video.pixels[(i*4)+2]= luma;
        }
    }  
    video.updatePixels();  
  image(video, 0, 0, 640, 480);
}

function keyPressed() {
    if(key=='a'){
        video.pause();
      }
    if(key=='p'){
        video.loop();
    }
  
}