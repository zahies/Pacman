var context;
var shape = new Object();
var monster1 = new Object();
var monster2 = new Object();
var monster3 = new Object();
var monster4 = new Object();
var monsterArr = new Array();
var cherry = new Object();
var extraLife = new Object();
var rottenApple = new Object();
var newMonster = new Object();
var board;
var score;
var pac_color;
var interval;
var intervalMon;
var monsterPattern = 0;
var cherryInterval;
var cherryInterval2;
var rottenInterval;
var rottenExist = false;
var healthInterval;
var firstTime=true;
var extraLifeExists=true;
var afterFailStart = false;
var intervalSound;
var cherryExist = false;
var newMonsterExist = false;
var currentTimeLeft;

function Start() {
	if (firstTime || afterFailStart) {
		afterFailStart = false;
		score = 0;
		/**timeLeft = $('#timeValue').val();*/
		$('#life').text('5');
		let numMon = $('#numOfMonsters').val();
		$('#numOfMonstersInGame').text(numMon);
		let color5 = $('#5PointsColor').val();
		$('#5PointsColorG').val(color5);
		let color15 = $('#15PointsColor').val();
		$('#15PointsColorG').val(color15);
		let color25 = $('#25PointsColor').val();
		$('#25PointsColorG').val(color25);
		updateHealthBar(5);
		currentTimeLeft = setInterval(function () {
			if (timeLeft <= 0) {
				if (parseInt($('#lblScore').text()) > 100) {
					if(!mute) {
						let audio1 = new Audio('resources/tada.mp3');
						audio1.play();
					}
					window.alert("Winner");
				} else {
					window.alert("Youre better than " + $('#lblScore').text() + " points!!");
				}
				changeDisplay(document.getElementById("settingPage"));
				resetSettings();
				clearInterval(currentTimeLeft);
				window.clearInterval(interval);
				window.clearInterval(rottenInterval);
				clearInterval(cherryInterval);
				window.clearInterval(intervalMon);
				// intervalMon.stop();
				// cherryInterval.stop();
				// interval.stop();
				// rottenInterval.stop();

			}
			timeLeft -= 1;
			$('#lblTime').text(timeLeft);
		}, 1000);

		context = canvas.getContext("2d");
		board = new Array();
		pac_color = "yellow";
		var timeLeft = parseInt($('#timeValue').text());

		var cnt = 100;
		var food_remain = $('#numOfBalls').val();
		var five_remain = Math.floor(food_remain * 60 / 100);
		var fifteen_remain = Math.floor(food_remain * 30 / 100);
		var twenty_five_remain = Math.floor(food_remain * 10 / 100);
		if (five_remain + fifteen_remain + twenty_five_remain != food_remain) {
			twenty_five_remain++;
		}

		for (var i = 0; i < 12; i++) {
			board[i] = new Array();
			//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
			for (var j = 0; j < 12; j++) {
				if (
					(i == 3 && j == 3) ||
					(i == 3 && j == 4) ||
					(i == 3 && j == 5) ||
					(i == 6 && j == 1) ||
					(i == 6 && j == 2)
				) {
					board[i][j] = 4;
				} else {
					var randomNum = Math.random();
					if (randomNum <= (1.0 * food_remain) / cnt) {
						let randomNumFood = (Math.floor(Math.random() * 4) + 1);
						if (randomNumFood === 1 && five_remain > 0) {
							five_remain--;
							food_remain--;
							board[i][j] = 1;
						} else if (randomNumFood === 2 && fifteen_remain > 0) {
							/** 5 point - 1    15 point - 3      25 point - 5  */
							fifteen_remain--;
							food_remain--;
							board[i][j] = 3;
						} else if (randomNumFood === 3 && twenty_five_remain > 0) {
							twenty_five_remain--;
							food_remain--;
							board[i][j] = 5;
						}
					} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
						// shape.i = 0;
						// shape.j = 5;
						// pacman_remain--;
						// board[0][5] = 2;
					} else {
						board[i][j] = 0;
					}
					cnt--;
				}

			}
		}


		while (food_remain > 0) {
			var emptyCell = findRandomEmptyCell(board);
			if (twenty_five_remain > 0) {
				board[emptyCell[0]][emptyCell[1]] = 5;
				twenty_five_remain--;
			} else if (fifteen_remain > 0) {
				board[emptyCell[0]][emptyCell[1]] = 3;
				fifteen_remain--;
			} else if (five_remain > 0) {
				board[emptyCell[0]][emptyCell[1]] = 1;
				five_remain--;

			}
			food_remain--;
		}

		var pacmanPos = findRandomEmptyCell(board);

		shape.i = pacmanPos[0];
		shape.j = pacmanPos[1];
		board[shape.i][shape.j] = 2;


	} else {
		let life = parseInt($('#life').text());
		life--;
		$('#life').text(life);
		updateHealthBar(life);

		var pacmanPos = findRandomEmptyCell(board);

		shape.i = pacmanPos[0];
		shape.j = pacmanPos[1];
		board[shape.i][shape.j] = 2;

	}

	var pacman_remain = 1;
	// start_time = new Date();


	let numOfMonsters = $('#numOfMonsters').val();
	switch (numOfMonsters) {
		case "1":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			monster1.WhatWasInTheCellBefore = 0
			monsterArr = [monster1];
			break;
		case "2":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			board[11][11] = 7;
			monster2.i = 11;
			monster2.j = 11;
			monster1.WhatWasInTheCellBefore = 0
			monster2.WhatWasInTheCellBefore = 0
			monsterArr = [monster1, monster2];
			break;
		case "3":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			board[11][11] = 7;
			monster2.i = 11;
			monster2.j = 11;
			board[0][11] = 8;
			monster3.i = 0;
			monster3.j = 11;
			monster1.WhatWasInTheCellBefore = 0
			monster2.WhatWasInTheCellBefore = 0
			monster3.WhatWasInTheCellBefore = 0
			monsterArr = [monster1, monster2, monster3];
			break;
		case "4":
			board[0][0] = 6;
			monster1.i = 0;
			monster1.j = 0;
			board[11][11] = 7;
			monster2.i = 11;
			monster2.j = 11;
			board[0][11] = 8;
			monster3.i = 0;
			monster3.j = 11;
			board[11][0] = 9;
			monster4.i = 11;
			monster4.j = 0;
			monster1.WhatWasInTheCellBefore = 0
			monster2.WhatWasInTheCellBefore = 0
			monster3.WhatWasInTheCellBefore = 0
			monster4.WhatWasInTheCellBefore = 0
			monsterArr = [monster1, monster2, monster3, monster4];
			break;
	}

	if (!cherryExist) {
		var cherryPos = findRandomEmptyCell(board);
		cherry.i = cherryPos[0];
		cherry.j = cherryPos[1];
		board[cherry.i][cherry.j] = 13;
		cherry.whatWas = 0;
		cherryExist = true;
	}

	if (!rottenExist) {
		var rotPos = findRandomEmptyCell(board);
		rottenApple.i = rotPos[0];
		rottenApple.j = rotPos[1];
		board[rottenApple.i][rottenApple.j] = 16;
		rottenApple.whatWas = 0;
		rottenExist = true;
	}

	var extraLifePos = findRandomEmptyCell(board);
	extraLife.i=extraLifePos[0];
	extraLife.j=extraLifePos[0];
	board[extraLife.i][extraLife.j]=15;
	extraLifeExists=true;

	keysDown = {};
	addEventListener(
		"keydown",
		function(e) {
			keysDown[e.keyCode] = true;
		},
		false
	);
	addEventListener(
		"keyup",
		function(e) {
			keysDown[e.keyCode] = false;
		},
		false
	);
	healthInterval =setInterval(updateExtraLife,4000);
	cherryInterval = setInterval(UpdateCherryPosition,350);
	interval = setInterval(UpdatePosition, 130);
	intervalMon = setInterval(UpdatePositionForMonster, 270);
	rottenInterval = setInterval(UpdateApplePosition, 350);
	if(!mute) {
		playSong();
		intervalSound = setInterval(playSong, 4000);
	}
	firstTime=false;
}



function findRandomEmptyCell(board) {
	var i = Math.floor(Math.random() * 11 + 1);
	var j = Math.floor(Math.random() * 11 + 1);
	while (board[i][j] != 0) {
		i = Math.floor(Math.random() * 11 + 1);
		j = Math.floor(Math.random() * 11 + 1);
	}
	return [i, j];
}

function Draw() {
	canvas.width = canvas.width; //clean board
	lblScore.value = score;
	//lblTime.value = time_elapsed;
	for (var i = 0; i < 12; i++) {
		for (var j = 0; j < 12; j++) {
			var center = new Object();
			center.x = i * 60 + 30;
			center.y = j * 60 + 30;
			if (board[i][j] === 6){
				let img1 = new Image(3,3);
				img1.src = "resources/monsterLogo.png";
				context.drawImage(img1, i*60, j*60);
			}
			else if (board[i][j] === 7){
				let img2 = new Image(3,3);
				img2.src = "resources/monsterLogo1.png";
				context.drawImage(img2, i*60, j*60);
			}
			else if (board[i][j] === 8){
				let img = new Image(10,10);
				img.src = "resources/monsterLogo.png";
				context.drawImage(img, i*60, j*60);
			}
			else if (board[i][j] === 9){
				let img = new Image(10,10);
				img.src = "resources/monsterLogo.png";
				context.drawImage(img, i*60, j*60);
			}else if (board[i][j] === 13) {
				let img = new Image(10, 10);
				img.src = "resources/cherry.png"
				context.drawImage(img, i * 60, j * 60);
			}else if (board[i][j] === 16){
				let img4 = new Image(10,10);
				img4.src = "resources/rotten.png"
				context.drawImage(img4, i*60, j*60);
			}else if (board[i][j] === 15){
				let img = new Image(10,10);
				img.src = "resources/life.png"
				context.drawImage(img, i*60, j*60);
			}
			if (board[i][j] == 2) {  /**right*/
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.15 * Math.PI, 1.85 * Math.PI);// half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 5, center.y - 15, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 10) {  /**left*/
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.85 * Math.PI, 1.15 * Math.PI,true);// half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x - 5, center.y - 15, 5, 0, 2 * Math.PI, ); // circle
				context.fillStyle = "black"; //color
				context.fill();
			}else if (board[i][j] == 11) {  /**up*/
				context.beginPath();
				context.arc(center.x, center.y, 30, 1.65 * Math.PI, 1.35 * Math.PI);// half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x - 15, center.y - 5 , 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 12) {  /**down*/
				context.beginPath();
				context.arc(center.x, center.y, 30, 0.35 * Math.PI, 0.65 * Math.PI,true);// half circle
				context.lineTo(center.x, center.y);
				context.fillStyle = pac_color; //color
				context.fill();
				context.beginPath();
				context.arc(center.x + 15, center.y + 5, 5, 0, 2 * Math.PI); // circle
				context.fillStyle = "black"; //color
				context.fill();
			} else if (board[i][j] == 1) {
				context.beginPath();
				context.arc(center.x, center.y, 10, 0, 2 * Math.PI); // circle
				context.fillStyle = $('#5PointsColor').val(); //color
				context.fill();
			}  else if (board[i][j] == 3) {
				context.beginPath();
				context.arc(center.x, center.y, 15, 0, 2 * Math.PI); // circle
				context.fillStyle = $('#15PointsColor').val(); //color
				context.fill();
			}else if (board[i][j] == 5) {
					context.beginPath();
					context.arc(center.x, center.y, 20, 0, 2 * Math.PI); // circle
					context.fillStyle = $('#25PointsColor').val(); //color
					context.fill();
			} else if (board[i][j] == 4) {
				context.beginPath();
				context.rect(center.x - 30, center.y - 30, 60, 60);
				context.fillStyle = "grey"; //color
				context.fill();
			}
		}
	}
}


window.addEventListener("keydown",function (e) {
	if ([32,37,38,39,40].indexOf(e.keyCode) > -1 ){
		e.preventDefault();
	}
},false);


function startNewGame(){
	firstTime=true;
	clearInterval(cherryInterval);
	window.clearInterval(interval);
	window.clearInterval(intervalMon);
	window.clearInterval(healthInterval);
	window.clearInterval(intervalSound);
	window.clearInterval(rottenInterval);
	window.clearInterval(currentTimeLeft);
	startGame();
}

function playSong() {
	let audio = new Audio('resources/begin.wav');
	audio.play();

}

// function startAfterFail() {
// 	let life = parseInt($('#life').text());
// 	context = canvas.getContext("2d");
// 	life--;
// 	$('#life').text(life);
// 	updateHealthBar(life);
// 	board = new Array();
// 	score = 0;
// 	pac_color = "yellow";
// 	var cnt = 100;
// 	var food_remain = $('#numOfBalls').val();
// 	var five_remain = Math.floor(food_remain * 60/100);
// 	var fifteen_remain = Math.floor(food_remain * 30/100);
// 	var twenty_five_remain = Math.floor(food_remain * 10/100);
// 	if (five_remain + fifteen_remain + twenty_five_remain != food_remain){
// 		twenty_five_remain++;
// 	}
// 	var pacman_remain = 1;
// 	// start_time = new Date();
// 	for (var i = 0; i < 12; i++) {
// 		board[i] = new Array();
// 		//put obstacles in (i=3,j=3) and (i=3,j=4) and (i=3,j=5), (i=6,j=1) and (i=6,j=2)
// 		for (var j = 0; j < 12; j++) {
// 			if (
// 				(i == 3 && j == 3) ||
// 				(i == 3 && j == 4) ||
// 				(i == 3 && j == 5) ||
// 				(i == 6 && j == 1) ||
// 				(i == 6 && j == 2)
// 			) {
// 				board[i][j] = 4;
// 			} else {
// 				var randomNum = Math.random();
// 				if (randomNum <= (1.0 * food_remain) / cnt) {
// 					let randomNumFood = (Math.floor(Math.random() * 4) +1);
// 					if (randomNumFood === 1 && five_remain > 0 ) {
// 						five_remain--;
// 						food_remain--;
// 						board[i][j] = 1;
// 					}else if (randomNumFood === 2 && fifteen_remain > 0 ) {
// 						/** 5 point - 1    15 point - 3      25 point - 5  */
// 						fifteen_remain--;
// 						food_remain--;
// 						board[i][j] = 3;
// 					} else if (randomNumFood === 3 && twenty_five_remain > 0) {
// 						twenty_five_remain--;
// 						food_remain--;
// 						board[i][j] = 5;
// 					}
// 				} else if (randomNum < (1.0 * (pacman_remain + food_remain)) / cnt) {
// 					// shape.i = 0;
// 					// shape.j = 5;
// 					// pacman_remain--;
// 					// board[0][5] = 2;
// 				} else {
// 					board[i][j] = 0;
// 				}
// 				cnt--;
// 			}
//
// 		}
// 	}
//
//
//
//
// 	while (food_remain > 0) {
// 		var emptyCell = findRandomEmptyCell(board);
// 		if ( twenty_five_remain > 0){
// 			board[emptyCell[0]][emptyCell[1]] = 5;
// 			twenty_five_remain--;
// 		}else if ( fifteen_remain > 0){
// 			board[emptyCell[0]][emptyCell[1]] = 3;
// 			fifteen_remain--;
// 		}else if ( five_remain > 0){
// 			five_remain--;
// 			board[emptyCell[0]][emptyCell[1]] = 1;
//
// 		}
// 		food_remain--;
// 	}
//
// 	let numOfMonsters = $('#numOfMonsters').val();
// 	switch (numOfMonsters) {
// 		case "1":
// 			board[0][0] = 6;
// 			monster1.i = 0;
// 			monster1.j = 0;
// 			monster1.WhatWasInTheCellBefore = 0
// 			monsterArr = [monster1];
// 			break;
// 		case "2":
// 			board[0][0] = 6;
// 			monster1.i = 0;
// 			monster1.j = 0;
// 			board[11][11] = 7;
// 			monster2.i = 11;
// 			monster2.j = 11;
// 			monster1.WhatWasInTheCellBefore = 0
// 			monster2.WhatWasInTheCellBefore = 0
// 			monsterArr = [monster1,monster2];
// 			break;
// 		case "3":
// 			board[0][0] = 6;
// 			monster1.i = 0;
// 			monster1.j = 0;
// 			board[11][11] = 7;
// 			monster2.i = 11;
// 			monster2.j = 11;
// 			board[0][11] = 8;
// 			monster3.i = 0;
// 			monster3.j = 11;
// 			monster1.WhatWasInTheCellBefore = 0
// 			monster2.WhatWasInTheCellBefore = 0
// 			monster3.WhatWasInTheCellBefore = 0
// 			monsterArr = [monster1,monster2,monster3];
// 			break;
// 		case "4":
// 			board[0][0] = 6;
// 			monster1.i = 0;
// 			monster1.j = 0;
// 			board[11][11] = 7;
// 			monster2.i = 11;
// 			monster2.j = 11;
// 			board[0][11] = 8;
// 			monster3.i = 0;
// 			monster3.j = 11;
// 			board[11][0] = 9;
// 			monster4.i = 11;
// 			monster4.j = 0;
// 			monster1.WhatWasInTheCellBefore = 0
// 			monster2.WhatWasInTheCellBefore = 0
// 			monster3.WhatWasInTheCellBefore = 0
// 			monster4.WhatWasInTheCellBefore = 0
// 			monsterArr = [monster1,monster2,monster3,monster4];
// 			break;
// 	}
//
//
// 	var pacmanPos = findRandomEmptyCell(board);
// 	shape.i=pacmanPos[0];
// 	shape.j=pacmanPos[1];
// 	board[shape.i][shape.j]=2;
//
// 	var cherryPos = findRandomEmptyCell(board);
// 	cherry.i = cherryPos[0];
// 	cherry.j = cherryPos[1];
// 	board[cherry.i][cherry.j]=13;
// 	cherry.whatWas =0;
//
// 	var extraLifePos = findRandomEmptyCell(board);
// 	extraLife.i=extraLifePos[0];
// 	extraLife.j=extraLifePos[0];
// 	board[extraLife.i][extraLife.j]=15;
//
//
// 	cherryInterval2 =setInterval(UpdateCherryPosition,350);
// 	healthInterval =setInterval(updateExtraLife,4000);
// 	Draw();
//
// }
