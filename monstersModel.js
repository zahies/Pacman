function UpdatePositionForMonster() {

    for (let i = 0; i < monsterArr.length; i++) {
        let placeToGo = findWhereToGo(monsterArr[i].i,monsterArr[i].j);
        var whatWas = monsterArr[i].WhatWasInTheCellBefore;

        monsterArr[i].WhatWasInTheCellBefore = board[placeToGo[0]][placeToGo[1]];
        if(!(placeToGo[0] === monsterArr[i].i && placeToGo[1] === monsterArr[i].j)){
            board[placeToGo[0]][placeToGo[1]]=6+i;
            if((whatWas === 6 || whatWas === 7 || whatWas === 8 || whatWas === 9 || whatWas===13 || whatWas === 16 ) ){
                board[monsterArr[i].i][monsterArr[i].j]=0;
            }else{
                board[monsterArr[i].i][monsterArr[i].j]=whatWas;
            }
            monsterArr[i].i = placeToGo[0];
            monsterArr[i].j = placeToGo[1];

        }
        Draw();
        if (monsterArr[i].i === shape.i && monsterArr[i].j === shape.j){
            board[shape.i][shape.j] = 0;
            if(!mute) {
                let audio = new Audio('resources/Death.mp3');
                audio.play();
            }
            score = score - 10;
            let b = score.toString();
            $('#lblScore').text(b);
            window.clearInterval(intervalSound);

            let life = parseInt($('#life').text());
            if (life === 1){
                // window.clearInterval(interval);
                if(parseInt($('#lblScore').text())>100){
                    if(!mute) {
                        let audio1 = new Audio('resources/tada.mp3');
                        audio1.play();
                    }
                    window.alert("Winner");
                }else{
                    window.alert("Youre better than " + $('#lblScore').text() + " points!!");
                }
                changeDisplay(document.getElementById("settingPage"));
                resetSettings();
                window.clearInterval(interval);
                clearInterval(cherryInterval);
                let bx = 0;
                let by = bx.toString();
                $('#lblScore').text(by);
                window.clearInterval(intervalMon);
                window.clearInterval(healthInterval);
                window.clearInterval(intervalSound);
                window.clearInterval(rottenInterval);
                window.clearInterval(currentTimeLeft);
                afterFailStart = true;

            }else if(life === 0){
                //var context
                firstTime=true;
                clearInterval(cherryInterval);
                window.clearInterval(interval);
                window.clearInterval(intervalMon);
                window.clearInterval(healthInterval);
                window.clearInterval(intervalSound);
                window.clearInterval(rottenInterval);
                window.clearInterval(currentTimeLeft);
            }
            else{
                if(newMonsterExist){
                    newMonsterExist = false;
                    board[newMonster.i][newMonster.j]=0;
                }
                if(extraLifeExists){
                    extraLifeExists=false;
                    board[extraLife.i][extraLife.j]=0;
                }
                clearInterval(cherryInterval);
                window.clearInterval(interval);
                window.clearInterval(intervalMon);
                window.clearInterval(healthInterval);
                window.clearInterval(rottenInterval);
                window.clearInterval(intervalSound);
                // life--;
                // $('#life').text(life);
                Start();
            }
        }


    }
}


function findWhereToGo(x,y) {
    switch (monsterPattern % 8) {
        case 0:
            if ( x > shape.i && x > 0 && board[x-1][y] !== 4 ){
                return [x-1,y];
            }else if (y < shape.j && y < 11 && board[x][y+1] !== 4 ){
                return [x,y+1];
            }else if (x < shape.i && x < 11 && board[x+1][y] !== 4 ){
                return [x+1,y];
            }else if (y > shape.j && y > 0 && board[x][y-1] !== 4 ){
                return [x,y-1];
            }
            break;
        case 1: 																				/** 1 + 2 */
            if (y > shape.j && y < 11 && board[x][y+1] != 4 ){
                return [x,y+1];
            }else if (x < shape.i && x > 0 && board[x-1][y] != 4 ){
                return [x-1,y];
            }else if (y < shape.j && y > 0 && board[x][y-1] != 4 ){
                return [x,y-1];
            }else if ( x > shape.i && x < 11 && board[x+1][y] != 4 ) {
                return [x + 1, y];
            }
            break;
        case 2:
            if (x < shape.i && x > 0 && board[x-1][y] != 4 ){
                return [x-1,y];
            }else if ( x > shape.i && x < 11 && board[x+1][y] != 4 ){
                return [x+1,y];
            }else if (y < shape.j && y > 0 && board[x][y-1] != 4 ){
                return [x,y-1];
            }else if (y > shape.j && y < 11 && board[x][y+1] != 4 ){
                return [x,y+1];
            }
            break;
        case 3:
            if (y > shape.j && y > 0 && board[x][y-1] != 4 ){
                return [x,y-1];

            }else if (x < shape.i && x < 11 && board[x+1][y] != 4 ){
                return [x+1,y];
            }else if (y < shape.j && y < 11 && board[x][y+1] != 4 ){
                return [x,y+1];
            }else if ( x > shape.i && x > 0 && board[x-1][y] != 4 ){
                return [x-1,y];
            }
            break;
        case 4:
            if (y < 11 && board[x][y+1] != 4){
                return [x,y+1];
            }
            break;
        case 5:
            if (y < 11 && board[x][y+1] != 4){
                return [x,y+1];
            }
            break;
        case 6:
            if (x < 11 && board[x+1][y] != 4){
                return [x+1,y];
            }
            break;
        case 7:
            if (x < 11 && board[x+1][y] != 4){
                return [x+1,y];
            }
            break;

    }
    monsterPattern++;

    return[x,y]
}
