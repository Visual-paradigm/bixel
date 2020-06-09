---
layout: post
title: "Implementación y visualización"
date: 2019-11-05 08:44:38 -0400
category: grayscale
author: mac
short-description: Escala de grises para una imagen
---

# Escala de Grises

En el siguiente post se va a bordar el proceso realizado para convertir una imagen a escala de grises y su respectiva documentación usando varios metodos, todo esto utilizando **procesing**  

-- El primer método que se va a emplear es **promedio aritmético de los valores RGB**. Los valores RGB varian entre 0 y 255, lo cual posibilita realizar la operación.

-- El segundo método que se va a emplear es **calculando la variable Luma**. Para realizar dicho proceso es necesario utilizar la siguiente ecuación: **Y = 0.2989xR + 0.5870xG + 0.1140xB**



#### El resultado obtenido es el siguiente: 


![_config.yml]({{ site.baseurl }}/Sketches/gray_scale/Lenna.png)


<script src="../p5.js"></script>
<script src="../Sketches/gray_scale/grayscale.js"></script>

-- **x** para poder visualizar el resultado de la aplicación del promedio aritmético

-- **y** para poder visualizar el resultado de haber utlizado la variable Luma

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




