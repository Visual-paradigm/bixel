---
layout: post
title: "Implementación y visualización"
date: 2019-11-05 08:44:38 -0400
category: efficient
author: mac
short-description: Eficiencia computacional
---


# Eficiencia computacional
A continuacion se observara la diferencia computacional que existe entre el procesamoento por
software y por hardware, asi como la eficiencia que se encuentra en este ultimo

#### Propiedades de los videos procesados

los videos procesados son **chavo.mp4 & disney.mp4** a continuación se puede observar
cada una de las propiedades de ambos archivos de video.  
<table class="tg">
<thead>
  <tr>
    <th class="tg-baqh" colspan="3">Propiedades de los videos procesados</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">Propiedad</td>
    <td class="tg-0lax">chavo.mp3</td>
    <td class="tg-0lax">disney.mp3</td>
  </tr>
  <tr>
    <td class="tg-0lax">Duración</td>
    <td class="tg-0lax">00:00:35</td>
    <td class="tg-0lax">00:00:31</td>
  </tr>
  <tr>
    <td class="tg-0lax">Ancho fotograma</td>
    <td class="tg-0lax">952</td>
    <td class="tg-0lax">1920</td>
  </tr>
  <tr>
    <td class="tg-0lax">Alto fotograma</td>
    <td class="tg-0lax">720</td>
    <td class="tg-0lax">1080</td>
  </tr>
  <tr>
    <td class="tg-0lax">Velocidad fotograma</td>
    <td class="tg-0lax">30.00 fps</td>
    <td class="tg-0lax">23.98 fps</td>
  </tr>
</tbody>
</table>

<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0; text-align:center}
.tg td{border-color:black;border-style:solid;border-width:1px;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-8d8j{text-align:center;vertical-align:bottom}
.tg .tg-7zrl{text-align:left;vertical-align:bottom}
</style>   

.  
.  


#### Rendimiento computacional


Se pueden apreciar la relación que existente entre el rendimiento por software 
y hardware, y la eficiencia computacional que posee el procesamiento usando mediante shaders.
<table class="tg">
<thead>
  <tr>
    <th class="tg-0lax"></th>
    <th class="tg-0lax">Disney.mp3</th>
    <th class="tg-0lax">Chavo.mp3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-0lax">Shaders</td>
    <td class="tg-0lax">14,60638</td>
    <td class="tg-0lax">28,769978</td>
  </tr>
  <tr>
    <td class="tg-0lax">Software</td>
    <td class="tg-0lax">2,6111102</td>
    <td class="tg-0lax">6,128165</td>
  </tr>
  <tr>
    <td class="tg-0lax">Relacion eficiencia</td>
    <td class="tg-0lax">5,59393548</td>
    <td class="tg-0lax">4,69471334</td>
  </tr>
</tbody>
</table>

.  
.  

#### Conteo framecount y framerate de los últimos 10 frames


por ultimo se puede observar un resumen mas detallado de la cantidad de **frameCount**  procesados
en los ultimos 10 frames asi como **el framerate** de ambos archivos de video.

<table class="tg">
<thead>
  <tr>
    <th class="tg-8d8j" colspan="4">Eficiencia&nbsp;&nbsp;&nbsp;para video disney.mp3</th>
    <th class="tg-8d8j" colspan="4">Eficiencia&nbsp;&nbsp;&nbsp;para video chavo.mp3</th>
  </tr>
</thead>
<tbody>
  <tr>
    <td class="tg-8d8j" colspan="2">Hardware</td>
    <td class="tg-8d8j" colspan="2">Software</td>
    <td class="tg-8d8j" colspan="2">Hardware</td>
    <td class="tg-8d8j" colspan="2">Software</td>
  </tr>
  <tr>
    <td class="tg-7zrl">framecount</td>
    <td class="tg-7zrl">framerate</td>
    <td class="tg-7zrl">framecount</td>
    <td class="tg-7zrl">framerate</td>
    <td class="tg-7zrl">framecount</td>
    <td class="tg-7zrl">framerate</td>
    <td class="tg-7zrl">framecount</td>
    <td class="tg-7zrl">framerate</td>
  </tr>
  <tr>
    <td class="tg-7zrl">444</td>
    <td class="tg-7zrl">14,54882</td>
    <td class="tg-7zrl">98</td>
    <td class="tg-7zrl">2,5980709</td>
    <td class="tg-7zrl">1071</td>
    <td class="tg-7zrl">28,09314</td>
    <td class="tg-7zrl">248</td>
    <td class="tg-7zrl">6,1338105</td>
  </tr>
  <tr>
    <td class="tg-7zrl">445</td>
    <td class="tg-7zrl">14,56016</td>
    <td class="tg-7zrl">99</td>
    <td class="tg-7zrl">2,606548</td>
    <td class="tg-7zrl">1072</td>
    <td class="tg-7zrl">28,153273</td>
    <td class="tg-7zrl">249</td>
    <td class="tg-7zrl">6,1504</td>
  </tr>
  <tr>
    <td class="tg-7zrl">446</td>
    <td class="tg-7zrl">14,59530</td>
    <td class="tg-7zrl">100</td>
    <td class="tg-7zrl">2,60754</td>
    <td class="tg-7zrl">1073</td>
    <td class="tg-7zrl">28,271654</td>
    <td class="tg-7zrl">250</td>
    <td class="tg-7zrl">6,164161</td>
  </tr>
  <tr>
    <td class="tg-7zrl">447</td>
    <td class="tg-7zrl">14,60993</td>
    <td class="tg-7zrl">101</td>
    <td class="tg-7zrl">2,6078634</td>
    <td class="tg-7zrl">1074</td>
    <td class="tg-7zrl">28,335089</td>
    <td class="tg-7zrl">251</td>
    <td class="tg-7zrl">6,1842</td>
  </tr>
  <tr>
    <td class="tg-7zrl">448</td>
    <td class="tg-7zrl">14,28246</td>
    <td class="tg-7zrl">102</td>
    <td class="tg-7zrl">2,6121569</td>
    <td class="tg-7zrl">1075</td>
    <td class="tg-7zrl">28,36892</td>
    <td class="tg-7zrl">252</td>
    <td class="tg-7zrl">6,1907544</td>
  </tr>
  <tr>
    <td class="tg-7zrl">449</td>
    <td class="tg-7zrl">14,31512</td>
    <td class="tg-7zrl">103</td>
    <td class="tg-7zrl">2,5979338</td>
    <td class="tg-7zrl">1076</td>
    <td class="tg-7zrl">28,504795</td>
    <td class="tg-7zrl">253</td>
    <td class="tg-7zrl">6,1054893</td>
  </tr>
  <tr>
    <td class="tg-7zrl">450</td>
    <td class="tg-7zrl">14,34639</td>
    <td class="tg-7zrl">104</td>
    <td class="tg-7zrl">2,6074028</td>
    <td class="tg-7zrl">1077</td>
    <td class="tg-7zrl">28,286293</td>
    <td class="tg-7zrl">254</td>
    <td class="tg-7zrl">6,1176443</td>
  </tr>
  <tr>
    <td class="tg-7zrl">451</td>
    <td class="tg-7zrl">14,38519</td>
    <td class="tg-7zrl">105</td>
    <td class="tg-7zrl">2,5927079</td>
    <td class="tg-7zrl">1078</td>
    <td class="tg-7zrl">27,990904</td>
    <td class="tg-7zrl">255</td>
    <td class="tg-7zrl">6,093921</td>
  </tr>
  <tr>
    <td class="tg-7zrl">452</td>
    <td class="tg-7zrl">14,59757</td>
    <td class="tg-7zrl">106</td>
    <td class="tg-7zrl">2,6050684</td>
    <td class="tg-7zrl">1079</td>
    <td class="tg-7zrl">28,77773</td>
    <td class="tg-7zrl">256</td>
    <td class="tg-7zrl">6,103488</td>
  </tr>
  <tr>
    <td class="tg-7zrl">453</td>
    <td class="tg-7zrl">14,60638</td>
    <td class="tg-7zrl">107</td>
    <td class="tg-7zrl">2,6111102</td>
    <td class="tg-7zrl">1080</td>
    <td class="tg-7zrl">28,769978</td>
    <td class="tg-7zrl">257</td>
    <td class="tg-7zrl">6,128165</td>
  </tr>
</tbody>
</table>


.  
.  

#### Comparación Grafica de los datos

<img src="../Sketches/graficoEficiencia.PNG">


