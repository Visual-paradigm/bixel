/*
Mascara de convolución
Parte de este codigo fue extraido de https://processing.org/examples/convolution.html
*/

let photo1;
let photo2;
let w = 512;

// It's possible to convolve the image with many different 
// matrices to produce different effects. This is a high-pass 
// filter; it accentuates the edges. 
let toggle;
let matrix = [ [ -1, -1, -1 ],
             [ -1,  9, -1 ],
             [ -1, -1, -1]  ]; 

function setup() {
  createCanvas(1024, 512);
  photo1 = loadImage("Lenna.png"); 
  photo2 = loadImage("Lenna.png");
}

function draw() {
  // We're only going to process a portion of the image
  // so let's set the whole image as the background first
  background(50);
  image(photo1, 0, 0);  
  textSize(30);
  //text("click on the image", 128, 500);
  fill(255, 255,255);

  
  drawFilter();
  //  if(toggle)
      image(photo2, 512, 0);
  
  // Calculate the small rectangle we will process

}

function drawFilter(){
  let xstart = 0;
  let ystart = 0;
  let xend = 512;
  let yend = 512;
  
  let matrixsize = 3;
  photo1.loadPixels();
  photo2.loadPixels();
  //console.log("Esta es la salida de photo",photo1)
  // Begin our loop for every pixel in the smaller image
  for (let x = xstart; x < xend; x++) {
    for (let y = ystart; y < yend; y++ ) {      
      let c = convolution(x, y, matrix, matrixsize, photo1);
      let loc = x + y*photo1.width;
      photo2.pixels[loc] = c;
    }
  }
  photo2.updatePixels();
}

function convolution(x, y, matriz, matrixsize,  photo1)
{
  let rtotal = 0.0;
  let gtotal = 0.0;
  let btotal = 0.0;
  let offset = matrixsize / 2;
  for (let i = 0; i < matrixsize; i++){
    for (let j= 0; j < matrixsize; j++){
      // What pixel are we testing
      let xloc = x+i-offset;
      let yloc = y+j-offset;
      let loc = xloc + photo1.width*yloc;
      // Make sure we haven't walked off our image, we could do better here
      loc = constrain(loc,0,512-1);
      // Calculate the convolution
      rtotal  = rtotal + (red(photo1.pixels[loc]) * matriz[i][j]);
      gtotal  = gtotal + (green(photo1.pixels[loc]) * matriz[i][j]);
      btotal  = btotal + (blue(photo1.pixels[loc]) * matriz[i][j]);
    }
  }
  // Make sure RGB is within range
  rtotal = constrain(rtotal, 0, 255);
  gtotal = constrain(gtotal, 0, 255);
  btotal = constrain(btotal, 0, 255);
  // Return the resulting color
  return color(rtotal, gtotal, btotal);
}


function mouseClicked() {
  drawFilter();
  toggle = !toggle;
}
