
var image;
var image2;
var toggle;

function setup() {
    createCanvas(1300, 650);
    image = loadImage("./Lenna.png");
    image2 = loadImage("./Lenna.png");
}

function draw() {
    background(50);
    image(image, 0, 0);  
    if(toggle)
        image(image2, 640, 0);
}

function complementary() {
    for (var i = 0; i < image.width * image.height; i++) {
        c = image.pixels[i];
        image2.pixels[i] = color((red(c)+green(c)+blue(c))/3);
    }
}


function mouseClicked() {
    complementary();
    toggle = !toggle;
}