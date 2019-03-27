window.addEventListener("load", function(){
	var canvas = document.querySelector("canvas");
	canvas.style.display="none";
	canvas.style.zindex = 1;
	canvas.width = 80*20;
	canvas.height = 40*20;
	canvas.style.border = "1px solid black";
	canvas.style.marginLeft = "28%";
	canvas.style.marginTop = "8.5%";
	var context = canvas.getContext('2d');
	var score = document.getElementById("score");
	var levelSelector = document.getElementsByClassName("LevelSelect");
	var accueil = document.getElementById("instructions");
	document.addEventListener("keydown",changerdirection);
	var message = document.getElementById("lostmessage");
	message.style.display = "none";
	var delay=100;


	var oldsnake = null ;
	var numberofclick = 0;
	var levelselected ; 

	levelSelector[0].addEventListener("click",displaylev1);
	levelSelector[1].addEventListener("click",displaylev2);
	levelSelector[2].addEventListener("click",displaylev3);
	
	function displaylev1(){
		//draw walls
		snakelen =1;
		context.fillStyle = "lightGreen";
		for (var i = 0 ; i<wall.length;i++){

			context.clearRect(wall[i].x*20,wall[i].y*20,20,20);
			context.fillRect(wall[i].x*20,wall[i].y*20,20,20);


		}

		for (var i = 0 ; i<wall1.length;i++){
				drawWall(wall1[i].x,wall1[i].y);

		}
		wall = wall1 ;

		
		bck = "lightGreen";
		accueil.style.display = "none";
		message.style.display = "none";
		canvas.style.display="block";
		snake = [{x : 55, y : 24},{x : 56, y : 24}];
		freeze = false;
		direction = "null";
		score.innerHTML = 0;
		if(numberofclick>0){
		for(var i =0; i<snake.length;i++){
		 context.fillStyle = "lightGreen"
		 context.clearRect(oldsnake[i].x*20,oldsnake[i].y*20,20,20);
		 context.fillRect(oldsnake[i].x*20,oldsnake[i].y*20,20,20);

}
	numberofclick+=1;
	context.fillStyle = "brown";
	context.fillRect(oldsnake[snakelen].x*20,oldsnake[snakelen].y*20,20,20);

	 }

	}


	function displaylev2(){
		freeze = false;
		snakelen =1;
		delay-=190;

		for (var i = 0 ; i<wall.length;i++){
			context.fillStyle = "lightGreen";
				context.clearRect(wall[i].x*20,wall[i].y*20,20,20);
				context.fillRect(wall[i].x*20,wall[i].y*20,20,20);

		}
		for (var i = 0 ; i<wall2.length;i++){
				drawWall(wall2[i].x,wall2[i].y);

		}

		if(numberofclick>=0){
		for(var i =0; i<snake.length;i++){
		 context.fillStyle = "lightGreen"
		 context.clearRect(oldsnake[i].x*20,oldsnake[i].y*20,20,20);
		 context.fillRect(oldsnake[i].x*20,oldsnake[i].y*20,20,20);

}}
		snake = [{x : 55, y : 24},{x : 56, y : 24}];
		message.style.display = "none";
		accueil.style.display = "none";
		canvas.style.display="block";
		numberofclick+=1
		
		wall = wall2;

	}
	
	
	function displaylev3(){
	levelselected =3 ;
	freeze = false;
	snakelen =1;
	delay=10;
	 
	 
	 for (var i = 0 ; i<wall.length;i++){
			context.fillStyle = "lightGreen";
				context.clearRect(wall[i].x*20,wall[i].y*20,20,20);
				context.fillRect(wall[i].x*20,wall[i].y*20,20,20);

		}
		for (var i = 0 ; i<wall3.length;i++){
				drawWall(wall3[i].x,wall3[i].y);

		}
		
		if(numberofclick>=1){
		for(var i =0; i<snake.length;i++){
		 context.fillStyle = "lightGreen"
		 context.clearRect(oldsnake[i].x*20,oldsnake[i].y*20,20,20);
		 context.fillRect(oldsnake[i].x*20,oldsnake[i].y*20,20,20);

}}		snake = [{x : 55, y : 24},{x : 56, y : 24}];
		message.style.display = "none";
		accueil.style.display = "none";
		canvas.style.display="block";
		wall = wall3; 
		numberofclick+=1;
	
	}


	var snake = [{x : 55, y : 24},{x : 56, y : 24}];
	var snakelen = 1;
	var sc = 0;
	var freeze = false ;

var wall = [[]];

	var wall1 = [{x:5,y:7},{x:5,y:7},{x:5,y:8},{x:5,y:9},{x:5,y:10},{x:5,y:11},{x:5,y:12},{x:6,y:7},{x:7,y:7},{x:8,y:7},{x:9,y:7},{x:10,y:7},{x:11,y:7},{x:12,y:7},
	{x:75,y:7},{x:75,y:8},{x:75,y:9},{x:75,y:10},{x:75,y:11},{x:75,y:12},{x:75,y:12},{x:74,y:7},{x:73,y:7},{x:72,y:7},{x:71,y:7},{x:70,y:7},{x:69,y:7},{x:68,y:7},
	{x:5,y:35},{x:6,y:35},{x:7,y:35},{x:8,y:35},{x:9,y:35},{x:10,y:35},{x:11,y:35},{x:12,y:35},{x:13,y:35},{x:5,y:34},{x:5,y:33},{x:5,y:32},{x:5,y:31},{x:5,y:30},
	{x:68,y:35},{x:69,y:35},{x:70,y:35},{x:71,y:35},{x:72,y:35},{x:73,y:35},{x:74,y:35},{x:75,y:35},{x:75,y:34},{x:75,y:33},{x:75,y:32},{x:75,y:31},{x:75,y:30}];



	var wall2 = [{x:30,y:10},{x:31,y:10},{x:32,y:10},{x:33,y:10},{x:34,y:10},{x:36,y:10},{x:37,y:10},{x:38,y:10},{x:39,y:7},{x:40,y:7},{x:41,y:7},{x:42,y:7},{x:43,y:7},{x:44,y:7},{x:45,y:7},{x:46,y:7},{x:47,y:7},{x:48,y:7},{x:49,y:7},{x:50,y:7},
	{x:30,y:30},{x:31,y:30},{x:32,y:30},{x:33,y:30},{x:34,y:30},{x:35,y:30},{x:36,y:30},{x:38,y:30},{x:39,y:30},{x:40,y:30},{x:41,y:30},{x:42,y:37},{x:43,y:37},{x:44,y:37},{x:45,y:37},{x:46,y:37},{x:47,y:37},{x:48,y:37},{x:49,y:37},{x:50,y:37},
		{x:10,y:10},{x:10,y:11},{x:10,y:12},{x:10,y:13},{x:10,y:14},{x:10,y:15},{x:10,y:16},{x:10,y:17},{x:10,y:18},{x:10,y:19},{x:70,y:10},{x:70,y:11},{x:70,y:12},{x:70,y:13},{x:70,y:14},{x:70,y:15},{x:70,y:16},{x:70,y:17},{x:70,y:18},{x:70,y:19},{x:70,y:19},{x:70,y:20},{x:70,y:21},{x:70,y:22},{x:70,y:23}];
	
	
	var wall3 = [{x:30,y:10}];
	var world = new Array(80);
	for(var i=0; i<world.length;i++){
		world[i] = new Array(40);

	}
// fill styles
var bck = "lightGreen";
var snk = "black";
var fruit = "red";
var wallc = "brown";


// backgroud color
context.fillStyle = bck;
context.fillRect(0,0 ,80*20,40*20);



	//dessiner une case
function drawSq(x,y){
	context.fillStyle = snk;
	context.fillRect(x,y,20,20);

}

function drawFr(x,y){
	context.fillStyle = fruit;
	context.fillRect(x,y,20,20);


}

function drawWall(x,y){
	context.fillStyle = wallc;
	context.fillRect(x*20,y*20,20,20);
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





	}

var fruitposx = Math.floor((Math.random() * 80) + 1);
var fruitposy = Math.floor((Math.random() * 40) + 1);




for (var i = 0 ; i<wall.length;i++){
	if(wall[i].x == fruitposx && wall[i].y==fruitposy){
	
		fruitposx+=1;
		fruitposy+=1;
	
	}		
	
}
drawFr(fruitposx*20,fruitposy*20);


function movesnake(){
var oldx = snake[0].x;
var oldy = snake[0].y;

	if(direction=="Right"&& freeze==false){


		context.clearRect(oldx*20,oldy*20,20,20);
		context.fillStyle = bck;
		context.fillRect(oldx*20,oldy*20,20,20);

		snake.push({x:snake[snakelen].x+1,y:snake[snakelen].y});
		snake.shift();





}
if(direction=="Down" && freeze==false){

		context.clearRect(oldx*20,oldy*20,20,20);
		context.fillStyle = bck;
		context.fillRect(oldx*20,oldy*20,20,20);
		snake.push({x:snake[snakelen].x,y:snake[snakelen].y+1});
		snake.shift();




	}



if(direction=="Left"&& freeze==false){

		context.clearRect(oldx*20,oldy*20,20,20);
		context.fillStyle = bck;
		context.fillRect(oldx*20,oldy*20,20,20);
		snake.push({x:snake[snakelen].x-1,y:snake[snakelen].y});
		snake.shift();



}
if(direction=="Up"&& freeze==false){

		context.clearRect(oldx*20,oldy*20,20,20);
		context.fillStyle = bck;
		context.fillRect(oldx*20,oldy*20,20,20);
		snake.push({x:snake[snakelen].x,y:snake[snakelen].y-1});
		snake.shift();


}


for(i =0 ; i<snake.length;i++){


		drawSq(snake[i].x*20,snake[i].y*20);


		}



//taille
if(oldx==fruitposx && oldy==fruitposy){
	

		fruitposx = Math.floor((Math.random() * 80) + 1);
		fruitposy = Math.floor((Math.random() * 40) + 1);
		drawFr(fruitposx*20,fruitposy*20);
		sc +=1;
		score.innerHTML=sc;
		if(direction=="Right"){
		snake.push({x: snake[snakelen].x+1,y: snake[snakelen].y});
		}
		if(direction=="Left"){
	snake.push({x: snake[snakelen].x-1,y: snake[snakelen].y});
}
		if(direction=="Up"){
snake.push({x: snake[snakelen].x,y: snake[snakelen].y-1});
}
		if(direction=="Down"){
snake.push({x: snake[snakelen].x,y: snake[snakelen].y+1});
}
		snakelen = snakelen +1;
}

		if ((snake[snakelen].x > 80 || snake[snakelen].y<0 || snake[snakelen].x <0 || snake[snakelen].y>40  )){




			freeze = true ;
			if(freeze==true){
				accueil.style.display = "block";
				canvas.style.display = "none";
				message.style.display = "block";
				oldsnake = snake;
}
		}

		for (var i = 0 ; i<wall.length;i++){

			if (snake[snakelen].x == wall[i].x && snake[snakelen].y == wall[i].y  ){
			 	freeze =true ;
				if(freeze==true){
				accueil.style.display = "block";
				canvas.style.display = "none";
				message.style.display = "block";
			 	oldsnake = snake;


			}
		 	}



		}
		for (var i = 0 ; i<snake.length-1;i++){

			if (snake[snakelen].x == snake[i].x && snake[snakelen].y == snake[i].y  ){

				freeze =true ;
				if(freeze==true){
				accueil.style.display = "block";
				canvas.style.display = "none";
				message.style.display = "block";
				oldsnake = snake;


			}
			}



		}
		
		if(levelselected ==3){
			
			
			var posx = Math.floor((Math.random() * 80) + 1);
			var posy = Math.floor((Math.random() * 40) + 1);
			drawWall(posx,posy,20,20);
			wall.push({x:posx,y:posy});
		}
		
		



}



setInterval (movesnake,delay);





	});
