window.addEventListener("load", function(){
	var canvas = document.querySelector("canvas");
	canvas.width = 80*20;
	canvas.height = 40*20;
	canvas.style.border = "1px solid black";
	canvas.style.marginLeft = "28%";
	canvas.style.marginTop = "8.5%";
	var context = canvas.getContext('2d');
	
	
	document.addEventListener("keydown",changerdirection);
	
	
	
	
	var snake = [{x : 5, y : 2}];
	
	//position de la tête
	
	
	console.log(snake[0].x);
	
	
	var world = new Array(80);
	for(var i=0; i<world.length;i++){
		world[i] = new Array(40);
		
	}
	
	// intialiser le monde
function insert(x,y){	
	for(var ligne = 0 ; ligne<80 ; ligne++){
		for(var colonne = 0 ; colonne<40; colonne++){
			if(ligne ==x && colonne ==y){
				snake[0].x = ligne*20;
				snake[0].y = colonne*20;
				drawSq(ligne*20,colonne*20);
				}
		
		}
	
	
	}
	
}





	//dessiner une case
function drawSq(x,y){
	
	context.fillRect(x,y,20,20);	
	
	
	
	
}

insert(snake[0].x,snake[0].y);



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
	
	
	

	
	}


function directionsnake(){
	console.log(direction);
	
}
	
//setInterval (directionsnake,200);	

	
	
	
	
	});