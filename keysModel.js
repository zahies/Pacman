var upKey=38;
var downKey=40;
var leftKey=37;
var rightKey=39;

function resetKeys() {
    upKey=38;
    downKey=40;
    leftKey=37;
    rightKey=39;
}
function updateKey(event, moving) {
    switch (moving) {
        case "up":
            if(!(event.keyCode===downKey ||event.keyCode===leftKey||event.keyCode===rightKey)) {
                upKey = event.keyCode;
                    $('#upKeyImg').attr("src", "resources/keys/" + event.keyCode + ".png");
                    $('#inGameKeyUp').attr("src", "resources/keys/" + event.keyCode + ".png");
            }else{
                window.alert("Please Choose Other Key!");
            }
            break;
        case "down": downKey = event.keyCode;
            if(!(event.keyCode===upKey ||event.keyCode===leftKey||event.keyCode===rightKey)) {
                     $('#downKeyImg').attr("src","resources/keys/"+event.keyCode+".png");
                    $('#inGameKeyDown').attr("src", "resources/keys/" + event.keyCode + ".png");

            }else{
                window.alert("Please Choose Other Key!");
            }
            break;
        case "left": leftKey = event.keyCode;
            if(!(event.keyCode===downKey ||event.keyCode===upKey||event.keyCode===rightKey)) {
                $('#leftKeyImg').attr("src", "resources/keys/" + event.keyCode + ".png");
                $('#inGameKeyLeft').attr("src", "resources/keys/" + event.keyCode + ".png");

            }else{
                window.alert("Please Choose Other Key!");
            }
            break;
        case "right": rightKey =event.keyCode;
            if(!(event.keyCode===downKey ||event.keyCode===leftKey||event.keyCode===upKey)) {
                    $('#rightKeyImg').attr("src", "resources/keys/" + event.keyCode + ".png");
                    $('#inGameKeyRight').attr("src", "resources/keys/" + event.keyCode + ".png");

            }else{
                window.alert("Please Choose Other Key!");
            }
            break;
    }
}


function GetKeyPressed() {
    if (keysDown[upKey]) {
        return 1;
    }
    if (keysDown[downKey]) {
        return 2;
    }
    if (keysDown[leftKey]) {
        return 3;
    }
    if (keysDown[rightKey]) {
        return 4;
    }
}

