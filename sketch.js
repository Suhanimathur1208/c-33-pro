const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bg,bgImg;
var snow;
function preload(){
bgImg = loadImage("snow1.png");

}



function setup() {
  createCanvas(800,400);
  snow = new Snow(600,300,10,10);
  snow.scale = 0.1;
 
}

function draw() {
  background(bg);  
  



  drawSprites();
}