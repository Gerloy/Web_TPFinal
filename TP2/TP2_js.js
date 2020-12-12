let fondo;
let fuente;
let fuente_Titulo;
let x;
let y;
let vel;
let dif;
let dif_Tit;

function preload(){
  fuente = loadFont("data/DiaryOfAn8BitMage-lYDD.ttf");
  fuente_Titulo = loadFont("data/final_fantasy_36_font.ttf");
  fondo = loadImage("data/Fondito_FF.png");
}
function setup(){
  createCanvas(512,480);
  frameRate(3);
  textAlign(CENTER,TOP);
  x = 208;
  y = 256;
  dif = 70;
  dif_Tit = 172;
  vel = 5;
  noStroke();
  fill("#FFFFFF");
}

function draw(){
  background(0,0,128);
  textFont(fuente_Titulo);
  textSize(50);
  text("Final Fantasy",x,y);
  textFont(fuente);
  textSize(14);
  text("Designer & Original Concept\nHironobu Sakaguchi",x,y+dif_Tit);
  text("Scenario\nKenji Terada",x,y+dif_Tit+dif);
  text("Battle System Design, Debugger\nHiroyuki Itou",x,y+dif_Tit+dif*2);
  text("Programmer\nNasir Gebelli",x,y+dif_Tit+dif*3);
  text("Character Design\nYoshitaka Amano",x,y+dif_Tit+dif*4);
  text("OST Composer\nNobuo Uematsu",x,y+dif_Tit+dif*5);
  text("Production\n Square A-Team",x,y+dif_Tit+dif*6);
  text("Executive Producer\nHisashi Suzuki",x,y+dif_Tit+dif*7);
  image (fondo,0,0,width,height);
  y-=vel;
}

function mouseClicked(){
  y = 256;
}
