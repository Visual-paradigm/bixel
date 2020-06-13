---
layout: post
title: "Implementación y visualización"
date: 2019-11-05 08:44:38 -0400
category: grayscale
author: mac
short-description: Escala de grises para un video
---
## Escala de grises 


En el siguiente post se va a bordar el proceso realizado para convertir una imagen a escala de grises y su respectiva documentación usando varios metodos, todo esto utilizando **procesing & p5 js**  

-- El primer método que se va a emplear es **promedio aritmético de los valores RGB**. Los valores RGB varian entre 0 y 255, lo cual posibilita realizar la operación.

-- El segundo método que se va a emplear es **calculando la variable Luma**. Para realizar dicho proceso es necesario utilizar la siguiente ecuación: **Y = 0.2989xR + 0.5870xG + 0.1140xB**

Para que se pudiera visualizar el video en escala de grises fue necesario tomar cada **frame** del video y aplicarle a cada uno el proceso mencionado anteriormente sea **calculando la varible luma o calculando el promedio aritmético de los valores RGB**


#### El resultado obtenido es el siguiente:   



![_config.yml]({{ site.baseurl }}/Sketches/gray_scale/Video/via.png)

<script src="../p5.js"></script>
<script src="../Sketches/gray_scale/Video/grayscale_video.js"></script>


-- **p** para reproducir el video      
-- **a** para pausar la reprodución 



