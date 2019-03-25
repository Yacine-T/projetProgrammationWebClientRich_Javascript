window.addEventListener("load", function(){
	var canvas = document.querySelector("canvas");
	canvas.width = 80*20;
	canvas.height = 40*20;
	canvas.style.border = "1px solid black";
	canvas.style.marginLeft = "28%";
	canvas.style.marginTop = "8.5%";
	var context = canvas.getContext('2d');
	var score = document.getElementById("score");
	
	document.addEventListener("keydown",changerdirection);
	
	var delay = 100 ; 
	
	
	var snake = [{x : 55, y : 24},{x : 56, y : 24}];
	var snakelen = 1;
	var sc = 0;

	
	
	
	
	
	var world = new Array(80);
	for(var i=0; i<world.length;i++){
		world[i] = new Array(40);
		
	}
// fill stles 
var bck = "lightGreen";
var snk = "black";
var fruit = "red";

context.fillStyle = bck;
context.fillRect(0,0 ,80*20,40*20);

//draw walls from json 


	//dessiner une case
function drawSq(x,y){
	context.fillStyle = snk;
	context.fillRect(x,y,20,20);	
	
}

function drawFr(x,y){
	context.fillStyle = fruit;
	context.fillRect(x,y,20,20);
	
	
}
//initialiser le monde 
for(i =0 ; i<snake.length;i++){
				
	
		drawSq(snake[i].x*20,snake[i].y*20);

		}



var direction = null ; 
function changerdirection(event){
	if (event.key == 'ArrowUp'){
		direction = "Up" ; 
		
	}
	
	if (event.key == 'ArrowDown'){
		direction = "Down" ; 
		
	}
	if (event.key == 'ArrowLeft'){
		direction = "Left" ; 
	}
	if (event.key == 'ArrowRight'){
		direction = "Right" ; 
	}
	
	console.log(direction);
	

	
	}
	
var fruitposx = Math.floor((Math.random() * 80) + 1);
var fruitposy = Math.floor((Math.random() * 40) + 1);
drawFr(fruitposx*20,fruitposy*20);


function movesnake(){
var oldx = snake[0].x;
var oldy = snake[0].y;

	if(direction=="Right"){

		
		context.clearRect(oldx*20,oldy*20,20,20);
		context.fillStyle = bck;
		context.fillRect(oldx*20,oldy*20,20,20);
		
		snake.push({x:snake[snakelen].x+1,y:snake[snakelen].y});
		snake.shift();
		

		

	
}
if(direction=="Down"){
		
		context.clearRect(oldx*20,oldy*20,20,20);
		context.fillStyle = bck;
		context.fillRect(oldx*20,oldy*20,20,20);
		snake.push({x:snake[snakelen].x,y:snake[snakelen].y+1});
		snake.shift();
		
		
		
			
	}
	
	

if(direction=="Left"){
		
		context.clearRect(oldx*20,oldy*20,20,20);
		context.fillStyle = bck;
		context.fillRect(oldx*20,oldy*20,20,20);
		snake.push({x:snake[snakelen].x-1,y:snake[snakelen].y});
		snake.shift();
		

	
}
if(direction=="Up"){
		
		context.clearRect(oldx*20,oldy*20,20,20);
		context.fillStyle = bck;
		context.fillRect(oldx*20,oldy*20,20,20);
		snake.push({x:snake[snakelen].x,y:snake[snakelen].y-1});
		snake.shift();
		
	
}


for(i =0 ; i<snake.length;i++){
				
		
		drawSq(snake[i].x*20,snake[i].y*20);
		console.log(snake.length);
		}





		
		if(oldx==fruitposx && oldy==fruitposy){
		delay-=10;
		console.log(delay);
		fruitposx = Math.floor((Math.random() * 80) + 1);
		fruitposy = Math.floor((Math.random() * 40) + 1);
		drawFr(fruitposx*20,fruitposy*20);
		sc +=1;
		score.innerHTML=sc;
		
		snake.push({x: snake[snakelen].x-1,y: snake[snakelen].y});
		snakelen = snakelen +1;
}

}


	
setInterval (movesnake,delay);	

	
	
	
	
	});