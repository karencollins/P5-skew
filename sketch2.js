let img;
let snap;

function setup() {
  // put setup code here
       createCanvas(900, 900, WEBGL);
       img = loadImage('image.jpeg'); // Load the image
  
//   horizontal slider adjusts width of object //min, max, start
    wSlider = createSlider(500, 800, 0);
    wSlider.position(20,20);
    
    //height slider adjusts height of graphic
//    hSlider = createSlider(0, 400, 0);
//    hSlider.position (280, 20);
  
}

function draw() {
    
     background(50);
    
    const w = wSlider.value();
    //i is amount slider has increased by (width slider - the min width)
    let i = w - 500;
    //h is the progressively larger number as the slider increases
     const h =  1.4 * i;
        
    //creates and returns a new p5 renderer object, width and height
    snap = createGraphics(500, 500);
    
    //copies region of canvas to another region, and region of pixels from image used as sourceImage to canvas sourceIMage
    //copy sourcimage, sx, sy, sw, sw, destinationx, destinationy, destinationw, destinationheight
    snap.copy(img, 0, 0, 500, 500, 0, 0, 500, 500);
    
    noStroke();
    texture(snap);
    push();
    //moves position on canvas (x, y, )
    translate(-300, -100);
    
    //x1, y1, x2, y2, x3, y3, x4, y4)
    
    //this is what we want to change  (top left, top right, bottom left and bottom right corner location)
    //quad(0,0,  500,0,   500,500,   0,500);
   quad(0,-h,  500,-h,   w,500,   500-w,500);
    pop();
    

}

