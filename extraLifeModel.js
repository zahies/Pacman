
function updateExtraLife() {
    board[extraLife.i][extraLife.j]=0;
    var extraLifePos = findRandomEmptyCell(board);
    extraLife.i=extraLifePos[0];

    extraLife.j=extraLifePos[0];
    board[extraLife.i][extraLife.j]=15;
    extraLifeExists=true;

}

function updateHealthBar(life) {
    switch (life) {
        case 0: $('#healthBar').attr("src","resources/health0.png");
            break;
        case 1: $('#healthBar').attr("src","resources/health1.png");
            break;
        case 2: $('#healthBar').attr("src","resources/health2.png");
            break;
        case 3: $('#healthBar').attr("src","resources/health3.png");
            break;
        case 4: $('#healthBar').attr("src","resources/health4.png");
            break;
        case 5: $('#healthBar').attr("src","resources/health5.png");
            break;
    }

}
