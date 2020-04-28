---
layout: post
title: "Implementación"
date: 2020-04-25 10:29:38 -0400
category: convertion-ascii
author: mac
short-description: Implementación en processing
---


# Conversión a ASCII
Para la realizacion de la practica presentada a continuación fue necesario 
contrar con processing 



![_config.yml]({{ site.baseurl }}/Sketches/gray_scale/Lenna.png)

## Codigo

La implementacion de la estrategia utilizada es presentada a continuación

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
