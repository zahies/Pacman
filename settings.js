
var mute=false;
var dialogIsOn = false;

function updateTextInputMonsters(val) {
    //document.getElementById('monstersInput').value=val;
   // document.getElementById('inGameMonstersInput').value=val;
    var slider = document.getElementById("numOfMonsters");
    var monVal = document.getElementById("monstersValue");
    monVal.innerHTML=val;
    slider.oninput=function () {
        monVal.innerHTML=this.value;
    }
}

function updateTextInputBalls(val) {
    // document.getElementById('ballsInput').value=val;
    // document.getElementById('inGameBallsInput').value=val;
    var slider = document.getElementById("numOfBalls");
    var monVal = document.getElementById("ballsValue");
    monVal.innerHTML=val;
    slider.oninput=function () {
        monVal.innerHTML=this.value;
    }
}
function updateTextInputTime(val) {
    //document.getElementById('timeInput').value=val;
    //document.getElementById('inGameTimeInput').value=val;
    document.getElementById('timeValue').innerHTML=val;
    var slider = document.getElementById("gameTime");
    var timeVal = document.getElementById("timeValue");
    timeVal.innerHTML=val;
    slider.oninput=function () {
        timeVal.innerHTML=this.value;
    }
}



function fillFormRandomly() {
    // $('upKey').reset();
    // $('downKey').reset();
    // $('leftKey').reset();
    // $('rightKey').reset();
    var x =Math.floor(Math.random()*40)+50;
    var y =Math.floor(Math.random()*4)+1;
    var z =Math.floor(Math.random()*(10000-60+1))+60;
    $(document).ready(function(){
        $('#gameTime').val(z);
        $('#timeValue').text(z)
        $('#numOfMonsters').val(y);
        $('#monstersValue').text(y)
        $('#inGameMonstersInput').text(y);
        $('#numOfBalls').val(x);
        $('#ballsValue').text(x);
        $('#inGameBallsInput').text(x);
        $('#5PointsColor').val(getRandomColor());
        $('#15PointsColor').val(getRandomColor());
        $('#25PointsColor').val(getRandomColor());


    });
    //$('#ballsInput').value = x ;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function resetSettings() {
    $('#timeValue').text(60)
    $('#monstersValue').text(1)
    $('#ballsValue').text(50);
    $('#upKeyImg').attr("src", "resources/keys/38.png");
    $('#inGameKeyUp').attr("src", "resources/keys/38.png");
    $('#downKeyImg').attr("src", "resources/keys/40.png");
    $('#inGameKeyDown').attr("src", "resources/keys/40.png");
    $('#leftKeyImg').attr("src", "resources/keys/37.png");
    $('#inGameKeyLeft').attr("src", "resources/keys/37.png");
    $('#rightKeyImg').attr("src", "resources/keys/39.png");
    $('#inGameKeyRight').attr("src", "resources/keys/39.png");
    resetKeys();
    document.getElementById("gameSettings").reset();

}
function muteMusic(){
    if(!mute){
        $('#muteBtn').css("background-image","url(resources/mute.png)");
        mute=true;
        clearInterval(intervalSound);
    }else{
        $('#muteBtn').css("background-image","url(resources/unmute.png)")
        mute=false;
    }
}

function startGame() {
   // document.getElementById('gameSettings').reset();
    changeDisplay(document.getElementById("mainContent"));
    Start();
}

function openDialog() {
    $('#aboutModal').css("display", "block");
    dialogIsOn = true;
}


function closeModal() {
    window.onclick = function (event) {
        window.onclick = function (event) {
            if (dialogIsOn == true) {
                $('#aboutModal').css("display", "none");
                dialogIsOn = false;
            }
        }
    }
}



$(document).keyup(function(e) {
    if (e.key === "Escape") { // escape key maps to keycode `27`
        $('#aboutModal').css("display", "none");
        dialogIsOn = false;
    }
});




