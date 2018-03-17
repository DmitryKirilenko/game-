
var ball=document.getElementById("ball");
var basket=document.getElementById("basket");
var score=document.getElementById("out");
var num = 0;
var count = 1;

var act=0;
ball.style.left = Math.floor(Math.random() * 500) + 'px';


function move(){
	
	
    ball.style.marginTop= act + "px";
  	act=act+ 4;
	if(act == 500){
  		if(ball.offsetLeft >= basket.offsetLeft && ball.offsetLeft <= basket.offsetLeft + basket.clientWidth){
            num=num+1
  			score.innerHTML = num ; 



  		}
  		else{
  			
  			 
  			if(count>0){
  				alert("вы прогирали , начать заново");
  			    
  			    num=0;
  			    score.innerHTML = 0 ;
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





