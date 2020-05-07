let photo;
let toggle;
let f;
let asciichar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,^`'. ";
let textSize=5;
function setup() {
  var cnv = createCanvas(1050, 520);
  cnv.position('190', '500');
  photo = loadImage("../Sketches/ascii_convertion/Lenna.png");
   f = textFont("Arial",textSize,true);
}

function draw() {
 f = textFont("Arial",textSize);
 background(255);
 fill(0);
 textFont(f);   
 asciiFunc();
 //noLoop();
 image(photo, 520, 0);
}

function asciiFunc() {   
  for (let i = 0; i < photo.width; i=i+textSize) {    
    for (let j = 0; j < photo.height; j=j+textSize) {
      let c = photo.get(i,j);
      let bright = (int) (red(c)+green(c)+blue(c))/3;
      let asciiEscale = asciichar.length;
      let charPosition = (bright*asciiEscale)/255;
      text(asciichar.charAt(charPosition),i,j);
    }
  }
  
}

function keyPressed() {
  if(key=='c' && textSize<=20){
    textSize++;
  }
  if(key=='x' && textSize>1){
    textSize--;
  }
}