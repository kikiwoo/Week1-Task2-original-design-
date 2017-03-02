//Task2 original design without interactions
//Existing piece of design: Composition with Large Red Plane, Yellow, Black, Gray, and Blue (1921)
// code by Kiki Woo 24Feb2017


function setup() {
  createCanvas(600,600)
}

function draw() {
 background(0,0,0)
 
 /////first line
 //blue
 noStroke();
 fill(173,185,199);
 rect(0,0,137,70);
 
 //white
 noStroke();
 fill(229,227,227);
 rect(135,0,230,70);
 
  //orange
 noStroke();
 fill(232,149,35);
 rect(365,0,202,226);
 
  //blue
 noStroke();
 fill(151,178,202);
 rect(568,0,32,454);
 
 
 
 /////second line
 //white
 noStroke();
 fill(229,227,227);
 rect(0,70,60,158);
 
 //red
 noStroke();
 fill(198,29,30);
 rect(60,71,300,300);

 
 
 /////third line
 //blue
 noStroke();
 fill(151,178,202);
 rect(0,228,59,225);
 
 //white
 noStroke();
 fill(229,227,227);
 rect(365,228,200,216);

 
 
 /////forth line
 //blue
 noStroke();
 fill(151,178,202);
 rect(213,372,146,146);
 
 //orange
 noStroke();
 fill(232,149,35);
 rect(0,451,59,222);
 
 //red
 noStroke();
 fill(198,29,30);
 rect(568,445,32,454);
 

 
 /////fifth line
 //white
 noStroke();
 fill(229,227,227);
 rect(58,532,150,67);
 
 //white
 noStroke();
 fill(229,227,227);
 rect(212,574,348,25);
 
  //dark blue
 noStroke();
 fill(11,22,51);
 rect(365,445,200,119);

 
 
 /////vertical line
 strokeWeight(10);
 stroke(0,0,0);
 fill(0,0,0);
 line(55,74,55,585);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(138,30,138,65);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(210,376,210,600);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(363,74,363,600);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(460,235,460,442);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(565,0,565,600);
 
 
 
 //////landscape line
 stroke(0,0,0);
 fill(0,0,0);
 line(25,70,563,70);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(25,230,49,230);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(364,230,563,230);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(60,375,355,375);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(60,445,600,445);
 
 stroke(0,0,0);
 fill(0,0,0);
 line(210,570,600,570);
 
}