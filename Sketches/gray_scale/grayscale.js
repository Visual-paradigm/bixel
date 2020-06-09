let img; // Declare variable 'img'.
let img2;
let toggle;
let type = 'rgb';

function setup() {
  
  var cnv = createCanvas(1022, 515);
  cnv.position('190', '705');
  img = loadImage("../Sketches/gray_scale/Lenna.png");
  img2 = loadImage("../Sketches/gray_scale/Lenna.png");
}

function draw() {
  
    background(50);
    //complementary();
    image(img, 0, 0);
    
    if(toggle){
        complementary();
        image(img2, 510, 0);
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

        var bw;
        if (type === 'rgb') bw = (r + g + b)/3;
        else bw = 0.2989*r + 0.5870*g + 0.1140*b ; 
               
        pixels[index+0] = bw;
        pixels[index+1] = bw;
        pixels[index+2] = bw;
    }
  }
  updatePixels();
  
}

function keyPressed() {
    if(key=='x'){
        toggle = !toggle;
        type='rgb'
    }
    if (key=='y'){
        toggle = !toggle;
        type='luma'
    }
}