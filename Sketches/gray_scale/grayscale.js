let img; // Declare variable 'img'.
let img2;
let toggle;

function setup() {
  
  var cnv = createCanvas(1050, 520);
  cnv.position('190', '450');
  img = loadImage("../Sketches/gray_scale/Lenna.png");
  img2 = loadImage("../Sketches/gray_scale/Lenna.png");
}

function draw() {
  
    background(50);
    //complementary();
    image(img, 0, 0);
    
    if(toggle){
      complementary();
      image(img2, 520, 0);
    }
    
}

function complementary() {
  
  
  //image(img2, 520, 0, img.width, img.height);
        
  loadPixels();
  for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var index = (x * height + y )*4;
        var r = pixels[index+0];
        var g = pixels[index+1];
        var b = pixels[index+2];
        var a = pixels[index+3];     
        
        var bw = (r + g + b)/3;
        
        pixels[index+0] = bw;
        pixels[index+1] = bw;
        pixels[index+2] = bw;
    }
  }
  updatePixels();
  
}


function mouseClicked() {
  //complementary();
  toggle = !toggle;

}