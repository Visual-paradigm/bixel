---
layout: post
title: "Implementación y visualización"
date: 2019-11-05 08:44:38 -0400
category: grayscale
author: mac
short-description: Escala de grises
---

# Escala de Grises
El metodo utilizado para convertir la imagen a escala de grises es el de sacar el 
**promedio aritmético de los valores RGB**. para ver el efecto puede dar un click
sobre la imagen.


#### El resultado obtenido es el siguiente: 


![_config.yml]({{ site.baseurl }}/Sketches/gray_scale/Lenna.png)

<script src="../p5.js"></script>
<script src="../Sketches/gray_scale/grayscale.js"></script>



#### El código en processing es el siguiente:


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
  
    for (int i = 0; i < image.width * image.height; i++) {
      color c = image.pixels[i];
      image2.pixels[i] = color((red(c)+green(c)+blue(c))/3);
    }  
}

void mouseClicked() {
    complementary();
    toggle = !toggle;
}
```




