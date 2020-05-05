
PImage img;
PImage img2;
boolean toggle;

void setup() {
  size(1050, 540);
  img = loadImage("../Sketches/gray_scale/Lenna.png");
  img2 = loadImage("../Sketches/gray_scale/Lenna.png");
}

void draw() {
  background(50);
  image(img, 0, 0);  
  if(toggle)
    image(img2, 540, 0);
}

void complementary() {
  img2.loadPixels();
  for (int i = 0; i < img.width * img.height; i++) {
    color c = img.pixels[i];
    img2.pixels[i] = color((red(c)+green(c)+blue(c))/3);
  }
  img2.updatePixels();
}


void mouseClicked() {
  complementary();
  toggle = !toggle;
}