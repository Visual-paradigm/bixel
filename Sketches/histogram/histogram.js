let img; 
let toggle;

function setup() {
  
    var cnv = createCanvas(1040, 515);
    cnv.position('190', '658');
    img = loadImage("../Sketches/histogram/Lenna.png");
}

function draw() {
  
    background(200);
    image(img, 0, 0);
    if(toggle){
        drawHist();
    }
    
    
}

function drawHist() {
    console.log('hallu')
    var histograma = [];
    for(var t = 0; t < 256; t++) histograma[t] = 0;

    for (var y = 0; y < img.height; y++) {
        for (var x = 0; x < img.width; x++) {
            let c = get(x,y);
            var bright = parseInt((c[0]+c[1]+c[2])/3)
            histograma[bright]++;
        }
    }

    var Max = Math.max(...histograma);
    for (var x = 0 ; x < img.width; x++){
        let w = parseInt(map(x,0,img.width,0,255));
        let y = parseInt(map(histograma[w],0,Max,img.height,0));
        stroke(w,256-2*w,192);
        line(x+520,0.98*img.height,x+520,0.98*y)
        
        if (x % 50 === 0){
            textSize(10);
            text(w,x+520, img.height);
            text(x,520, img.height-x);
        }
        
    }
    
    
}

function keyPressed() {
    if(key=='v') toggle = !toggle
}