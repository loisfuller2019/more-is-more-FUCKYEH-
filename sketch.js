
function setup() {
  createCanvas(400, 400, WEBGL);
 
}



  
  
  





let cOffset = 8;
function draw() {
  


    const inc = height/400;
    colorMode(HSB);

    for(let y = 8; y < height; y += inc) {
        let h = y / height * 400;
        fill(abs(h-cOffset)%400, 400, 400);
        noStroke();
        rect(400, y-inc, width, y);
    }

    cOffset += 5;


  rotateY(millis() / 5000);
  torus(10, 2, 22);
  
   rotateX(millis() / 2500);
  torus(13, 2, 22);
  
   rotateY(millis() / 5000);
  torus(16, 2, 22);
  
   rotateX(millis() / 2500);
  torus(19, 2, 22);
  
   
  rotateY(millis() / 5000);
  torus(23, 2, 22);
  
  rotateX(millis() / 2500);
  torus(26, 2, 22);
  
  rotateY(millis() / 5000);
  torus(29, 2, 22);
  
  rotateX(millis() / 2500);
  torus(32, 2, 22);
  
    rotateY(millis() / 5000);
  torus(35, 2, 22);
  
    rotateX(millis() / 2500);
  torus(38, 2, 22);
  
    rotateY(millis() / 5000);
  torus(41, 2, 22);
  
   rotateX(millis() / 2500);
  torus(44, 2, 22);
  
   rotateY(millis() / 5000);
  torus(47, 2, 22);
  
   rotateX(millis() / 2500);
  torus(50, 2, 22);
  
   rotateY(millis() / 5000);
  torus(53, 2, 22);
  
   rotateX(millis() / 2500);
  torus(56, 2, 22);
  
   rotateY(millis() / 5000);
  torus(59, 2, 22);
  
   rotateX(millis() / 2500);
  torus(62, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(65, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(68, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(71, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(74, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(77, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(80, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(83, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(86, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(89, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(92, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(95, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(98, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(101, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(104, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(107, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(110, 2, 22);
  
  
  
   rotateY(millis() / 5000);
  torus(113, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(116, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(119, 2, 22);
  
  
  
   rotateX(millis() / 2500);
  torus(122, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(125, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(128, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(131, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(136, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(139, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(142, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(145, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(148, 2, 22);
  
  
   rotateY(millis() / 5000);
  torus(151, 2, 22);
  
  
   rotateX(millis() / 2500);
  torus(154, 2, 22);
  
    rotateY(millis() / 5000);
  torus(157, 2, 22);
  
   rotateY(millis() / 5000);
  square(257, 2, 22);
  
 


}




