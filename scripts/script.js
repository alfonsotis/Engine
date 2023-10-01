var current_engine_angle = +0;

function resetAngle(){
    current_engine_angle = +0;
    document.getElementById("angle").value = 0;
    applyRotation();
}

function getAngle(){
    return document.getElementById("angle").value
}

function getEngine(){
    return document.getElementById("engine");
}

function applyRotation(){
    motor = getEngine();
    motor.style.transform = `rotate(${current_engine_angle}deg)`;
}

function setRotatingAngle(next_engine_angle){
    current_engine_angle = (+current_engine_angle + +next_engine_angle)%361;
}


function rotateEngine(){
    next_engine_angle = getAngle();
    setRotatingAngle(next_engine_angle);
    applyRotation();
}