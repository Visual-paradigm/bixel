---
layout: post
title: "Implementación"
date: 2019-11-05 08:44:38 -0400
category: grayscale
author: mac
short-description: Implementación en processing
---

# Escala de Grises
Para la realizacion de la practica presentada a continuación fue necesario 
contrar con...



![_config.yml]({{ site.baseurl }}/Sketches/gray_scale/Lenna.png)

## Codigo

La implementacion de la estrategia utilizada es presentada a continuación

```java
PImage image;
PImage image2;
boolean toggle;

void setup() {
  size(1300, 650);
  image = loadImage("Lenna.png");
  image2 = loadImage("Lenna.png");
}

void draw() {
  background(50);
  image(image, 0, 0);  
  if(toggle)
    image(image2, 640, 0);
}

void complementary() {
  //image2.loadPixels();
  for (int i = 0; i < image.width * image.height; i++) {
    color c = image.pixels[i];
    image2.pixels[i] = color((red(c)+green(c)+blue(c))/3);
  }
  //image2.updatePixels();
}


void mouseClicked() {
  complementary();
  toggle = !toggle;
}
```




