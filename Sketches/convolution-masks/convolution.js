/*let img;
let withmask;


let w = 512;
let maskop = 0;
let center = 8;

let toggle;
let matrix = [ -1, -1, -1 , -1, 9, -1 , -1, -1, -1   ];

function setup() {
  
  var cnv = createCanvas(1022, 515);
  cnv.position('190', '505');
  img = loadImage("../Sketches/convolution-masks/Lenna.png");
  withmask = createGraphics(512, 512);
}

function draw() {
    
    image(img,0,0);
    //withmask.beginDraw();
    withmask.image(img,0,0);
    drawFilter();     
    image(withmask, 512, 0);
}

function drawFilter(){
    let xstart = 0;
    let ystart = 0;
    let matrixsize = 3;
    withmask.loadPixels();
    // Begin our loop for every pixel in the smaller image
    for (let x = xstart; x < withmask.width; x++) {
        for (let y = ystart; y < withmask.height  ; y++ ) {
            let c = convolution(x, y, matrix,matrixsize, withmask.pixels,withmask.width);
            let loc = x + y*withmask.width;
            //withmask.pixels[loc] = c;
        }
    }
    withmask.updatePixels();
    //withmask.endDraw();
}

function convolution(x,y, matrix, matrixsize, pixels,width){

    let rtotal = 0.0;
    let gtotal = 0.0;
    let btotal = 0.0;
    loadPixels();
    //int offset = matrixsize / 2;
    for (let i = 0; i < matrixsize; i++){
        for (let j= 0; j < matrixsize; j++){
            // What pixel are we testing
            let xloc = x+i;//-offset;
            let yloc = y+j;//-offset;
            let loc = xloc + width*yloc;
            // Make sure we haven't walked off our image, we could do better here
            loc = map(loc,0,pixels.length-1,0,pixels.length-1);
            // Calculate the convolution

            rtotal += (red(img.pixels[loc]) * matrix[i][j]);
            gtotal += (green(img.pixels[loc]) * matrix[i][j]);
            btotal += (blue(img.pixels[loc]) * matrix[i][j]);
        }
    }
    // Make sure RGB is within range
    rtotal = constrain(rtotal, 0, 255);
    gtotal = constrain(gtotal, 0, 255);
    btotal = constrain(btotal, 0, 255);
    // Return the resulting color
    return color(rtotal, gtotal, btotal);
}

function keyPressed() {
    if(key == 'z'){ 
        console.log('hallui')   
        newmatrix = [0, -1, 0 , -1, 4, -1 , 0, -1, 0];
        matrix = newmatrix;
    }
}*/