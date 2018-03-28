window.onload=function(){
let gameWrap=document.getElementById('fieldWrap');
if(localStorage.getItem('clr')!==null){
	var color=localStorage.getItem('clr');
	gameWrap.style.background= color;
}

let frstClr=document.getElementById('first').onclick=function(){
gameWrap.style.background="black";
localStorage.setItem('clr',"black");
}

let secndClr=document.getElementById('second').onclick=function(){
gameWrap.style.background="blue";
localStorage.setItem('clr',"blue");
}

let forStart=document.getElementById('forStart').onclick=function(){
gameWrap.style.background=" #f69d3c";
localStorage.setItem('clr',"orange");
}

let start=document.getElementById('start');
start.onclick=function(){
var ball=document.getElementById("ball");
var basket=document.getElementById("basket");
var score=document.getElementById("out");
var num = 0;
var count = 1;
var story=0;

var act=0;
ball.style.left = Math.floor(Math.random() * 500) + 'px';

function move(){
ball.style.marginTop= act + "px";
act=act+ 4;
if(act == 500){
if(ball.offsetLeft >= basket.offsetLeft && ball.offsetLeft <= basket.offsetLeft + basket.clientWidth){
num=num+1
score.innerHTML = num ; 
localStorage.setItem( "score" , num);
}
else{	 
if(count>0){
alert("Ваш счет: " + num + "Начать заново?"); 
num=0;
score.innerHTML = 0 ;
story=story+1;
localStorage.setItem( "Сколько раз вы сыграли в игру (история):" ,story);
}
}	
act = 0;
ball.style.left = Math.floor(Math.random() * 1500) + 'px';
}	
}
var timer=setInterval(move, 10);
document.onmousemove = function(event){
	 basket.style.left = event.clientX + 'px';
}
}
}





