const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
var ground;

var ropeObj, fruit, linkagem;

function setup() {

  createCanvas(500,700);
  frameRate(80);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(200,680,600,20);

  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)

  ropeObj = new Rope(8, {x:250 ,y:100})
  
  fruit = Bodies.circle(250, 200, 15, {density:0.0001});
  Matter.Composite.add(ropeObj.body, fruit);
  World.add(world, fruit);
  
  linkagem = new Link(ropeObj, fruit);
}

function draw() {

  background(51);
  ground.show();
  
  Engine.update(engine);
  
  ropeObj.show();
 
  ellipse(fruit.position.x, fruit.position.y, 15, 15);
}
