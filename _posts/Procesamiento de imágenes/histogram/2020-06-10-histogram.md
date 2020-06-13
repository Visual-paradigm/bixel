---
layout: post
title: "Implementación y visualización"
date: 2019-11-05 08:44:38 -0400
category: histogram
author: mac
short-description: Histograma de una imagen
---

# Histograma de una imagen

En el siguiente post se va a bordar el proceso realizado para calcular y mostrar el histograma de una imagen asi como su respectiva documentación usando un metodo en especifico, todo esto utilizando **procesing**  . Un histograma de imagen es un tipo de histograma que actúa como una representación gráfica de la distribución tonal en una imagen digital. 

-- El método que se va a emplear para capturar la distibución tonal de la imagen, es obtener de cada pixel el **promedio aritmético de los valores RGB**. Los valores RGB varian entre 0 y 255, lo cual posibilita realizar dicha operación.


#### El resultado obtenido es el siguiente: 


![_config.yml]({{ site.baseurl }}/Sketches/gray_scale/Lenna.png)


<script src="../p5.js"></script>
<script src="../Sketches/histogram/histogram.js"></script>

-- **v** para poder visualizar el histograma de imagen



#### El código en processing es el siguiente:


```java

PImage img;

void setup() {
  size(1000, 540);
  img = loadImage("Lenna.png");
}

void draw() {
  
  background(50);
  image(img, 10, 10);
  drawHist();
}

void drawHist(){
  int [] histograma = new int[256];
  for (int i=0 ; i < img.width; i++){
    for (int j=0 ; j < img.height ; j++){
      color c = img.get(i,j);
      int bright = (int) (red(c)+green(c)+blue(c)/3);
      histograma[bright]++;
    }  
  }
  int Max = max(histograma);
  for (int x=0 ; x < img.width; x++){
    int w =int(map(x,0,img.width,0,255));
    int y =int(map(histograma[w],0,Max,img.height,0));
    line(x+520,0.9*img.height+60,x+520,0.9*y+60);
  }
}


```




