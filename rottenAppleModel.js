
function UpdateApplePosition() {
    var random = Math.random();
    let rottenWhatWas = rottenApple.whatWas;
    if(random>0&&random<0.25){
        if(rottenApple.i<11&&board[rottenApple.i+1][rottenApple.j]!==4){
            if((rottenWhatWas > 5 && rottenWhatWas < 14) ||  rottenWhatWas === 2) {
                board[rottenApple.i][rottenApple.j] = 0;
            }else{
                board[rottenApple.i][rottenApple.j] = rottenWhatWas;
            }
            rottenApple.whatWas = board[rottenApple.i + 1][rottenApple.j];
            board[rottenApple.i + 1][rottenApple.j] = 16;
            rottenApple.i=rottenApple.i+1;
        }
    }
    else if(random>0.25&&random<0.5){
        if(rottenApple.i>0&&board[rottenApple.i-1][rottenApple.j]!==4){
            if((rottenWhatWas > 5 && rottenWhatWas < 14) ||  rottenWhatWas === 2) {
                board[rottenApple.i][rottenApple.j] = 0
            }else{
                board[rottenApple.i][rottenApple.j] = rottenWhatWas;
            }
            rottenApple.whatWas = board[rottenApple.i-1][rottenApple.j];
            board[rottenApple.i-1][rottenApple.j]=16;
            rottenApple.i=rottenApple.i-1;
        }
    }else if(random>0.5&&random<0.75){
        if(rottenApple.j<11&&board[rottenApple.i][rottenApple.j+1]!==4){
            if((rottenWhatWas > 5 && rottenWhatWas < 14) ||  rottenWhatWas === 2) {
                board[rottenApple.i][rottenApple.j] = 0;
            }else{
                board[rottenApple.i][rottenApple.j] = rottenWhatWas;
            }
            rottenApple.whatWas = board[rottenApple.i][rottenApple.j+1];
            board[rottenApple.i][rottenApple.j+1]=16;
            rottenApple.j=rottenApple.j+1;
        }
    }else if(random>0.75){
        if(rottenApple.j>0&&board[rottenApple.i][rottenApple.j-1]!==4){
            if((rottenWhatWas > 5 && rottenWhatWas < 14) ||  rottenWhatWas === 2) {
                board[rottenApple.i][rottenApple.j] = 0;
            }else{
                board[rottenApple.i][rottenApple.j] = rottenWhatWas;
            }
            rottenApple.whatWas = board[rottenApple.i][rottenApple.j-1];
            board[rottenApple.i][rottenApple.j-1]=16;
            rottenApple.j=rottenApple.j-1;
        }
    }

    Draw();
}