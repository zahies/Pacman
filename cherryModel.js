
function UpdateCherryPosition() {
    var random = Math.random();
    let cherryWhatWas = cherry.whatWas;
    if(random>0&&random<0.25){
        if(cherry.i<11&&board[cherry.i+1][cherry.j]!==4){
            if((cherryWhatWas > 5 && cherryWhatWas < 14) ||  cherryWhatWas === 2 || cherryWhatWas === 16) {
                board[cherry.i][cherry.j] = 0;
            }else{
                board[cherry.i][cherry.j] = cherryWhatWas;
            }
            cherry.whatWas = board[cherry.i + 1][cherry.j];
            board[cherry.i + 1][cherry.j] = 13;
            cherry.i=cherry.i+1;
        }
    }
    else if(random>0.25&&random<0.5){
        if(cherry.i>0&&board[cherry.i-1][cherry.j]!==4){
            if((cherryWhatWas > 5 && cherryWhatWas < 14) ||  cherryWhatWas === 2 || cherryWhatWas === 16) {
                board[cherry.i][cherry.j] = 0
            }else{
                board[cherry.i][cherry.j] = cherryWhatWas;
            }
            cherry.whatWas = board[cherry.i-1][cherry.j];
            board[cherry.i-1][cherry.j]=13;
            cherry.i=cherry.i-1;
        }
    }else if(random>0.5&&random<0.75){
        if(cherry.j<11&&board[cherry.i][cherry.j+1]!==4){
            if((cherryWhatWas > 5 && cherryWhatWas < 14) ||  cherryWhatWas === 2 || cherryWhatWas === 16) {
                board[cherry.i][cherry.j] = 0;
            }else{
                board[cherry.i][cherry.j] = cherryWhatWas;
            }
            cherry.whatWas = board[cherry.i][cherry.j+1];
            board[cherry.i][cherry.j+1]=13;
            cherry.j=cherry.j+1;
        }
    }else if(random>0.75){
        if(cherry.j>0&&board[cherry.i][cherry.j-1]!==4){
            if((cherryWhatWas > 5 && cherryWhatWas < 14) ||  cherryWhatWas === 2 || cherryWhatWas === 16) {
                board[cherry.i][cherry.j] = 0;
            }else{
                board[cherry.i][cherry.j] = cherryWhatWas;
            }
            cherry.whatWas = board[cherry.i][cherry.j-1];
            board[cherry.i][cherry.j-1]=13;
            cherry.j=cherry.j-1;
        }
    }
    if(board[shape.i][shape.j]===13) {
        //alert("FAS");
        board[shape.i][shape.j]=0;
        score = score + 50;
        window.clearInterval(cherryInterval);
        window.clearInterval(cherryInterval2);
        //cherryInterval.stop();
    }
    Draw();
}