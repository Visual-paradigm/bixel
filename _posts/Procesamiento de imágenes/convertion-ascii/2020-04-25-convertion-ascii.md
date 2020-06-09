---
layout: post
title: "Implementación y visualización"
date: 2020-04-25 10:29:38 -0400
category: convertion-ascii
author: mac
short-description: conversión a ASCII para una imagen
---


# Conversión a ASCII

En el siguiente post se va a bordar el proceso realizado para convertir cada pixel de una imagen a un caracter de ASCII y su respectiva documentación, todo esto utilizando **procesing**  

Para poder convertir cada pixel de la imagen a un caracter de ASCII, fue necesario sacar el promedio
de los componentes RGB del color, este componente resultante es la **luminosidad** de cada pixel. Luego de tener la luminosidad de cada pixel era necesario realizar el producto de dicho valor por la cantidad de carácteres que existen en ASCII y ajustando dicho resultado a un rango entre (0,255). El valor resultante era la posición del carácter que mejor se ajustaba al tipo de pixel que se tenia. 


### El resultado obtenido es el siguiente: 


<script src="../p5.js"></script>
<script src="../Sketches/ascii_convertion/convertion.js"></script>

![_config.yml]({{ site.baseurl }}/Sketches/gray_scale/Lenna.png)

-- **c** para aumentar el tamaño de letra  
-- **x** para disminuir el tamaño de letra

#### El código en processing es el siguiente:


```java

PImage image;
boolean toggle;
PFont f;
String asciichar = "$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,^`'. ";
int textSize=5;

void setup() {
    size(1260, 650);
    image = loadImage("lenna.jpg");
    f = createFont("Arial",textSize,true);
}

void draw() {
    f = createFont("Arial",textSize,true);
    background(255);
    fill(0);
    textFont(f);   
    asciiFunc();
    image(image, 630, 0);
}

void asciiFunc() {   
    for (int i = 0; i < image.width; i=i+textSize) {    
        for (int j = 0; j < image.height; j=j+textSize) {
            color c = image.get(i,j);
            int bright = (int) (red(c)+green(c)+blue(c))/3;
            int asciiEscale = asciichar.length();
            int charPosition = (bright*asciiEscale)/255;
            text(asciichar.charAt(charPosition),i,j);
        }
    }
}

void keyPressed() {
    if(key=='c' && textSize<=20){
        textSize++;
    }
    if(key=='x' && textSize>1){
        textSize--;
    }
}

```
