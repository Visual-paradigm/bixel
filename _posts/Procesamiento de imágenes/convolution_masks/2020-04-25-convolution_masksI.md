---
layout: post
title: "Implementación"
date: 2019-11-05 08:44:38 -0400
category: convolution-masks
author: mac
short-description: Implementación en processing
---


# Mascaras de Convolución
Para la realizacion de la practica presentada a continuación fue necesario 
contrar con processing 



![_config.yml]({{ site.baseurl }}/Sketches/gray_scale/Lenna.png)

## Codigo

La implementacion de la estrategia utilizada es presentada a continuación


```java

PImage img, img2;
boolean toggle;

int w = 240;
float[][] matrix = { { 0, -1, 0 },
                     { -1, 4.2, -1 },
                     { 0, -1, 0 } }; 
                     
                     
                     
float[][] matrix2 = { { 0, -1, 0 },
                     { -1, 6, -1 },
                     { 0, -1, 0 } }; 

void setup() {
  size(1054, 540);
  img = loadImage("Lenna.png"); 
  img2 = loadImage("Lenna.png");
}

void draw() {
  // We're only going to process a portion of the image
  // so let's set the whole image as the background first
  background(50);
  image(img, 10, 10);
  
  
  if(toggle)
    image(img2, 530, 10);
  
  // Calculate the small rectangle we will process
  //int xstart = constrain(mouseX - w/2, 0, img.width);
  int xstart = 0;
  int ystart = 00;
  int xend = 512;
  int yend = 512;
  int matrixsize = 3;
  loadPixels();
  // Begin our loop for every pixel in the smaller image
  for (int x = xstart; x < xend; x++) {
    for (int y = ystart; y < yend; y++ ) {
      color c = convolution(x, y, matrix, matrixsize, img);
      color d = convolution(x, y, matrix2, matrixsize, img);
      int loc = x + y*img.width;
      if (x + 150 < y || x - 150 > y || x + y < 400 || x + y > 700){
        img2.pixels[loc] = c;
      }else{
        img2.pixels[loc] = d;
      }
      
    }
  }
  updatePixels();
}



color convolution(int x, int y, float[][] matrix, int matrixsize, PImage img)
{
  float rtotal = 0.0;
  float gtotal = 0.0;
  float btotal = 0.0;
  int offset = matrixsize / 2;
  for (int i = 0; i < matrixsize; i++){
    for (int j= 0; j < matrixsize; j++){
      // What pixel are we testing
      int xloc = x+i-offset;
      int yloc = y+j-offset;
      int loc = xloc + img.width*yloc;
      // Make sure we haven't walked off our image, we could do better here
      loc = constrain(loc,0,img.pixels.length-1);
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

void mouseClicked() {
  toggle = !toggle;
}

```

