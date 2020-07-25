
function UpdatePosition() {

    let changed = false;
    if(board[shape.i][shape.j-1]===15){
        extraLifeExists=false;
        let life = parseInt($('#life').text());
        if(life<5) {
            life++;
        }
        $('#life').text(life);
        updateHealthBar(life);
        window.clearInterval(healthInterval);
    }
    var x = GetKeyPressed();
    if (x == 1) {

        if (shape.j > 0 && board[shape.i][shape.j - 1] != 4) {
            /****MAYBE????? COS IMA SHAL ZA
             if(board[shape.i][shape.j-1] === 3){
				score = score + 15;
			}else if(board[shape.i][shape.j-1] === 5){
				score = score + 25;
			}else if (board[shape.i][shape.j-1] === 1) {
				score = score + 5;
			}else if(board[shape.i][shape.j-1]===15){
				let life = parseInt($('#life').text());
				life--;
				$('#life').text(life);
				updateHealthBar(life);
			}
             */
            board[shape.i][shape.j] = 0;
            shape.j--;
        }
        changed = true;
    }
    if (x == 2) {

        if (shape.j < 11 && board[shape.i][shape.j + 1] != 4) {
            /****
             if(board[shape.i][shape.j+1] === 3){
				score = score + 15;
			}else if(board[shape.i][shape.j+1] === 5){
				score = score + 25;
			}else if (board[shape.i][shape.j+1] === 1) {
				score = score + 5;
			}else if(board[shape.i][shape.j+1]===15){
				let life = parseInt($('#life').text());
				life--;
				$('#life').text(life);
				updateHealthBar(life);
			}
             */
            board[shape.i][shape.j] = 0;
            shape.j++;
        }
        changed = true;
    }
    if (x == 3) {
        if (shape.i > 0 && board[shape.i - 1][shape.j] != 4) {
            /****
             if(board[shape.i-1][shape.j] === 3){
				score = score + 15;
			}else if(board[shape.i-1][shape.j] === 5){
				score = score + 25;
			}else if (board[shape.i-1][shape.j] === 1) {
				score = score + 5;
			}else if(board[shape.i-1][shape.j]===15){
				let life = parseInt($('#life').text());
				life--;
				$('#life').text(life);
				updateHealthBar(life);
			}
             */
            board[shape.i][shape.j] = 0;
            shape.i--;
        }
        changed = true;
    }
    if (x == 4) {
        if (shape.i < 11 && board[shape.i + 1][shape.j] != 4) {
            /****
             if(board[shape.i+1][shape.j] === 3){
				score = score + 15;
			}else if(board[shape.i+1][shape.j] === 5){
				score = score + 25;
			}else if (board[shape.i+1][shape.j] === 1) {
				score = score + 5;
			}else if(board[shape.i+1][shape.j]===15){
				let life = parseInt($('#life').text());
				life--;
				$('#life').text(life);
				updateHealthBar(life);
			}
             */
            board[shape.i][shape.j] = 0;
            shape.i++;
        }
        changed = true;
    }
    if (changed){
        let sa = 8;
    }

    if(board[shape.i][shape.j] == 3){
        score = score + 15;
    }else if(board[shape.i][shape.j] == 5){
        score = score + 25;
    }else if (board[shape.i][shape.j] == 1) {
        score = score + 5;
    }
    let b = score.toString();
    $('#lblScore').text(b);

    if(board[shape.i][shape.j]===13) {
        if(!mute) {
            let audio = new Audio('resources/eat.wav');
            audio.play();
        }
        //alert("FAS");
        board[shape.i][shape.j]=0;
        score = score + 50;
        window.clearInterval(cherryInterval);
        window.clearInterval(cherryInterval2);
        //cherryInterval.stop();
    }

    if(board[shape.i][shape.j]===16) {
        if(!mute) {
            let audio = new Audio('resources/apple.wav');
            audio.play();
        }
        board[11][7] = 7;
        newMonster.i = 11;
        newMonster.j = 7;
        newMonster.WhatWasInTheCellBefore = 0
        monsterArr.push(newMonster);
        board[shape.i][shape.j]=0;
        newMonsterExist = true;
        window.clearInterval(rottenInterval);
    }

    switch (x) {
        case 1:
            board[shape.i][shape.j] = 11;
            break;
        case 2:
            board[shape.i][shape.j] = 12;
            break;
        case 3:
            board[shape.i][shape.j] = 10;
            break;
        case 4:
            board[shape.i][shape.j] = 2;
            break;
    }
    //board[i][j] = 0;


    let life = parseInt($('#life').text());
    if (life !== 0) {

        Draw();
    }else{
        window.clearInterval(interval);
        window.clearInterval(intervalMon);
        clearInterval(cherryInterval);
        clearInterval(cherryInterval2);
        clearInterval(rottenInterval);

    }

}